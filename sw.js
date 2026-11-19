/* Service worker: keeps the app and the downloaded manual available offline.
   When you publish a change, bump VERSION so phones pick up the new files. */
const VERSION = '1.0.1';
const EDITION = '2026-02';
const SHELL = 'mbi-shell-' + VERSION;
const DATA = 'mbi-data-' + EDITION;
const SHELL_FILES = [
  "./",
  "index.html",
  "app.css?v=1.0.1",
  "app.js?v=1.0.1",
  "manifest.webmanifest",
  "lib/minisearch.js",
  "lib/panzoom.min.js",
  "data/content.json",
  "fonts/barlow-condensed-latin-600-normal.woff2",
  "fonts/barlow-condensed-latin-700-normal.woff2",
  "fonts/barlow-latin-400-italic.woff2",
  "fonts/barlow-latin-400-normal.woff2",
  "fonts/barlow-latin-500-normal.woff2",
  "fonts/barlow-latin-600-italic.woff2",
  "fonts/barlow-latin-600-normal.woff2",
  "icons/apple-touch-icon.png",
  "icons/favicon.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png"
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(SHELL).then((c) => c.addAll(SHELL_FILES.map((u) => new Request(u, { cache: 'reload' })))));
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k.startsWith('mbi-') && k !== SHELL && k !== DATA).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', (e) => { if (e.data === 'skipWaiting') self.skipWaiting(); });

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.headers.has('range')) return;
  if (url.searchParams.has('dl')) return;            // explicit offline download: go to the network
  if (req.mode === 'navigate') {
    e.respondWith((async () => (await caches.match('index.html', { ignoreSearch: true })) || fetch(req))());
    return;
  }
  e.respondWith((async () => {
    const hit = await caches.match(req) || await caches.match(req, { ignoreSearch: true });
    if (hit) return hit;
    try {
      const resp = await fetch(req);
      if (resp.ok && /\/(data|lib|fonts|icons)\//.test(url.pathname)) {
        const target = /\/(data\/f-|data\/manual|lib\/pdf)/.test(url.pathname) ? DATA : SHELL;
        const copy = resp.clone();
        caches.open(target).then((c) => c.put(req, copy));
      }
      return resp;
    } catch (err) {
      return new Response('Not available offline', { status: 503, statusText: 'Offline' });
    }
  })());
});
