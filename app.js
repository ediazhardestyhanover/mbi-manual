/* MBI Manual – offline field reference for the LADOTD Movable Bridge Inspection Manual (prototype). */
(() => {
  'use strict';
  const APP_VERSION = '1.1.0';
  const ICON = {"search": "<circle cx=\"11\" cy=\"11\" r=\"8\" /> <path d=\"m21 21-4.3-4.3\" />", "book-open": "<path d=\"M12 7v14\" /> <path d=\"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z\" />", "tag": "<path d=\"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z\" /> <circle cx=\"7.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\" />", "image": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\" /> <circle cx=\"9\" cy=\"9\" r=\"2\" /> <path d=\"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21\" />", "bookmark": "<path d=\"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z\" />", "settings": "<path d=\"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z\" /> <circle cx=\"12\" cy=\"12\" r=\"3\" />", "download": "<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\" /> <polyline points=\"7 10 12 15 17 10\" /> <line x1=\"12\" x2=\"12\" y1=\"15\" y2=\"3\" />", "circle-check": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"m9 12 2 2 4-4\" />", "wifi-off": "<path d=\"M12 20h.01\" /> <path d=\"M8.5 16.429a5 5 0 0 1 7 0\" /> <path d=\"M5 12.859a10 10 0 0 1 5.17-2.69\" /> <path d=\"M19 12.859a10 10 0 0 0-2.007-1.523\" /> <path d=\"M2 8.82a15 15 0 0 1 4.177-2.643\" /> <path d=\"M22 8.82a15 15 0 0 0-11.288-3.764\" /> <path d=\"m2 2 20 20\" />", "chevron-left": "<path d=\"m15 18-6-6 6-6\" />", "chevron-right": "<path d=\"m9 18 6-6-6-6\" />", "chevron-up": "<path d=\"m18 15-6-6-6 6\" />", "chevron-down": "<path d=\"m6 9 6 6 6-6\" />", "x": "<path d=\"M18 6 6 18\" /> <path d=\"m6 6 12 12\" />", "share-2": "<circle cx=\"18\" cy=\"5\" r=\"3\" /> <circle cx=\"6\" cy=\"12\" r=\"3\" /> <circle cx=\"18\" cy=\"19\" r=\"3\" /> <line x1=\"8.59\" x2=\"15.42\" y1=\"13.51\" y2=\"17.49\" /> <line x1=\"15.41\" x2=\"8.59\" y1=\"6.51\" y2=\"10.49\" />", "file-text": "<path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\" /> <path d=\"M14 2v4a2 2 0 0 0 2 2h4\" /> <path d=\"M10 9H8\" /> <path d=\"M16 13H8\" /> <path d=\"M16 17H8\" />", "triangle-alert": "<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\" /> <path d=\"M12 9v4\" /> <path d=\"M12 17h.01\" />", "zoom-in": "<circle cx=\"11\" cy=\"11\" r=\"8\" /> <line x1=\"21\" x2=\"16.65\" y1=\"21\" y2=\"16.65\" /> <line x1=\"11\" x2=\"11\" y1=\"8\" y2=\"14\" /> <line x1=\"8\" x2=\"14\" y1=\"11\" y2=\"11\" />", "zoom-out": "<circle cx=\"11\" cy=\"11\" r=\"8\" /> <line x1=\"21\" x2=\"16.65\" y1=\"21\" y2=\"16.65\" /> <line x1=\"8\" x2=\"14\" y1=\"11\" y2=\"11\" />", "trash-2": "<path d=\"M3 6h18\" /> <path d=\"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6\" /> <path d=\"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2\" /> <line x1=\"10\" x2=\"10\" y1=\"11\" y2=\"17\" /> <line x1=\"14\" x2=\"14\" y1=\"11\" y2=\"17\" />", "refresh-cw": "<path d=\"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8\" /> <path d=\"M21 3v5h-5\" /> <path d=\"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16\" /> <path d=\"M8 16H3v5\" />", "smartphone": "<rect width=\"14\" height=\"20\" x=\"5\" y=\"2\" rx=\"2\" ry=\"2\" /> <path d=\"M12 18h.01\" />", "info": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"M12 16v-4\" /> <path d=\"M12 8h.01\" />", "list": "<path d=\"M3 12h.01\" /> <path d=\"M3 18h.01\" /> <path d=\"M3 6h.01\" /> <path d=\"M8 12h13\" /> <path d=\"M8 18h13\" /> <path d=\"M8 6h13\" />", "arrow-left": "<path d=\"m12 19-7-7 7-7\" /> <path d=\"M19 12H5\" />", "house": "<path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\" /> <path d=\"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\" />", "cloud-off": "<path d=\"m2 2 20 20\" /> <path d=\"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193\" /> <path d=\"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07\" />", "maximize-2": "<polyline points=\"15 3 21 3 21 9\" /> <polyline points=\"9 21 3 21 3 15\" /> <line x1=\"21\" x2=\"14\" y1=\"3\" y2=\"10\" /> <line x1=\"3\" x2=\"10\" y1=\"21\" y2=\"14\" />", "copy": "<rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\" /> <path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\" />", "external-link": "<path d=\"M15 3h6v6\" /> <path d=\"M10 14 21 3\" /> <path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\" />", "layers": "<path d=\"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z\" /> <path d=\"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65\" /> <path d=\"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65\" />", "share": "<path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\" /> <polyline points=\"16 6 12 2 8 6\" /> <line x1=\"12\" x2=\"12\" y1=\"2\" y2=\"15\" />", "ruler": "<path d=\"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z\" /><path d=\"m14.5 12.5 2-2\" /><path d=\"m11.5 9.5 2-2\" /><path d=\"m8.5 6.5 2-2\" /><path d=\"m17.5 15.5 2-2\" />", "list-checks": "<path d=\"m3 17 2 2 4-4\" /><path d=\"m3 7 2 2 4-4\" /><path d=\"M13 6h8\" /><path d=\"M13 12h8\" /><path d=\"M13 18h8\" />", "scan-search": "<path d=\"M3 7V5a2 2 0 0 1 2-2h2\" /><path d=\"M17 3h2a2 2 0 0 1 2 2v2\" /><path d=\"M21 17v2a2 2 0 0 1-2 2h-2\" /><path d=\"M7 21H5a2 2 0 0 1-2-2v-2\" /><circle cx=\"12\" cy=\"12\" r=\"3\" /><path d=\"m16 16-1.9-1.9\" />", "flag": "<path d=\"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z\" /><line x1=\"4\" x2=\"4\" y1=\"22\" y2=\"15\" />", "siren": "<path d=\"M7 18v-6a5 5 0 1 1 10 0v6\" /><path d=\"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z\" /><path d=\"M21 12h1\" /><path d=\"M18.5 4.5 18 5\" /><path d=\"M2 12h1\" /><path d=\"M12 2v1\" /><path d=\"m4.929 4.929.707.707\" /><path d=\"M12 12v6\" />", "mail": "<rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\" /><path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\" />", "clipboard-copy": "<rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\" /><path d=\"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2\" /><path d=\"M16 4h2a2 2 0 0 1 2 2v4\" /><path d=\"M21 14H11\" /><path d=\"m15 10-4 4 4 4\" />", "send": "<path d=\"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z\" /><path d=\"m21.854 2.147-10.94 10.939\" />", "circle-alert": "<circle cx=\"12\" cy=\"12\" r=\"10\" /><line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"12\" /><line x1=\"12\" x2=\"12.01\" y1=\"16\" y2=\"16\" />", "wrench": "<path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z\" />", "gauge": "<path d=\"m12 14 4-4\" /><path d=\"M3.34 19a10 10 0 1 1 17.32 0\" />", "check": "<path d=\"M20 6 9 17l-5-5\" />", "arrow-up-right": "<path d=\"M7 7h10v10\" /><path d=\"M7 17 17 7\" />", "sliders-horizontal": "<line x1=\"21\" x2=\"14\" y1=\"4\" y2=\"4\" /><line x1=\"10\" x2=\"3\" y1=\"4\" y2=\"4\" /><line x1=\"21\" x2=\"12\" y1=\"12\" y2=\"12\" /><line x1=\"8\" x2=\"3\" y1=\"12\" y2=\"12\" /><line x1=\"21\" x2=\"16\" y1=\"20\" y2=\"20\" /><line x1=\"12\" x2=\"3\" y1=\"20\" y2=\"20\" /><line x1=\"14\" x2=\"14\" y1=\"2\" y2=\"6\" /><line x1=\"8\" x2=\"8\" y1=\"10\" y2=\"14\" /><line x1=\"16\" x2=\"16\" y1=\"18\" y2=\"22\" />", "scale": "<path d=\"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z\" /><path d=\"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z\" /><path d=\"M7 21h10\" /><path d=\"M12 3v18\" /><path d=\"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2\" />", "ship": "<path d=\"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1\" /><path d=\"M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76\" /><path d=\"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6\" /><path d=\"M12 10v4\" /><path d=\"M12 2v3\" />", "zap": "<path d=\"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z\" />", "droplets": "<path d=\"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z\" /><path d=\"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97\" />", "cog": "<path d=\"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z\" /><path d=\"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z\" /><path d=\"M12 2v2\" /><path d=\"M12 22v-2\" /><path d=\"m17 20.66-1-1.73\" /><path d=\"M11 10.27 7 3.34\" /><path d=\"m20.66 17-1.73-1\" /><path d=\"m3.34 7 1.73 1\" /><path d=\"M14 12h8\" /><path d=\"M2 12h2\" /><path d=\"m20.66 7-1.73 1\" /><path d=\"m3.34 17 1.73-1\" /><path d=\"m17 3.34-1 1.73\" /><path d=\"m11 13.73-4 6.93\" />", "traffic-cone": "<path d=\"M9.3 6.2a4.55 4.55 0 0 0 5.4 0\" /><path d=\"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3\" /><path d=\"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z\" /><path d=\"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8\" />", "building-2": "<path d=\"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z\" /><path d=\"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2\" /><path d=\"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2\" /><path d=\"M10 6h4\" /><path d=\"M10 10h4\" /><path d=\"M10 14h4\" /><path d=\"M10 18h4\" />", "circle-help": "<circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\" /><path d=\"M12 17h.01\" />", "camera": "<path d=\"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z\" /><circle cx=\"12\" cy=\"13\" r=\"3\" />", "message-square-warning": "<path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\" /><path d=\"M12 7v2\" /><path d=\"M12 13h.01\" />"};
  const STOP = new Set('a an and are as at be by for from has have if in into is it its of on or that the their them then there these this to was were when where which with will shall should may can not no all any each other than also such'.split(' '));
  const CSN = ['', 'Good', 'Fair', 'Poor', 'Severe'];

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const view = $('#view');
  const bar = $('#bar');
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const wb = (s) => esc(s).replace(/\//g, '/<wbr>');   // allow line breaks after slashes in long names
  const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const icon = (n, cls = '') => `<svg class="i ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICON[n] || ''}</svg>`;
  const store = {
    get(k, d) { try { const v = localStorage.getItem('mbi.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('mbi.' + k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } },
  };
  const mb = (b) => (b / 1e6 >= 10 ? Math.round(b / 1e6) : (b / 1e6).toFixed(1)) + '\u00a0MB';
  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  let C = null;
  const TOC = {};
  const ORDER = [];
  const EL = {};
  const BYNUM = {};
  let FIGS = [];
  let ms = null;
  let indexReady = null;
  let DATA_CACHE = '';
  let F = null;              // field reference: bridge types, critical findings, measurements, components, workflow, field terms
  const COMP = {};
  const TYPE = {};
  let SYN = [];
  let CFG = {};              // config.json on the site: notice, latestEdition, reportEmail

  // ------------------------------------------------------------------ preferences
  function applyPrefs() {
    document.documentElement.dataset.theme = store.get('theme', 'auto');
    document.documentElement.style.setProperty('--fs', store.get('fs', 17) + 'px');
    requestAnimationFrame(() => {
      const m = $('meta[name="theme-color"]');
      const v = getComputedStyle(document.documentElement).getPropertyValue('--bar').trim();
      if (m && v) m.setAttribute('content', v);
    });
  }

  // ------------------------------------------------------------------ content
  const figCmp = (a, b) => {
    const [a1, a2] = a.split('-').map(Number);
    const [b1, b2] = b.split('-').map(Number);
    return a1 - b1 || a2 - b2;
  };

  async function loadContent() {
    const r = await fetch('data/content.json');
    if (!r.ok) throw new Error('content ' + r.status);
    C = await r.json();
    DATA_CACHE = 'mbi-data-' + C.meta.edition_code;
    for (const t of C.toc) { TOC[t.id] = t; ORDER.push(t.id); if (t.num) BYNUM[t.num] = t; }
    for (const e of C.elements) EL[e.no] = e;
    FIGS = Object.keys(C.figs).sort(figCmp);
    F = C.field;
    for (const k of F.components) COMP[k.id] = k;
    for (const t of F.types) TYPE[t.id] = t;
    for (const m of F.measures) m.id = slug(m.t);
    SYN = F.synonyms.flatMap((s) => s.terms.map((term) => ({ s, term }))).sort((a, b) => b.term.length - a.term.length);
  }

  const isChapter = (t) => t.level === 1 && /^\d$/.test(t.num);
  const plateText = (t) => (t.level === 1 ? (isChapter(t) ? 'Ch ' + t.num : t.num ? 'App ' + t.num : '') : t.num);
  const fullLabel = (t) => (t.level === 1 ? (isChapter(t) ? `Chapter ${t.num}: ${t.title}` : t.num ? `Appendix ${t.num}: ${t.title}` : t.title) : `${t.num} ${t.title}`);
  const pagesText = (p) => (p[0] === p[1] ? `Page ${p[0]}` : `Pages ${p[0]}–${p[1]}`);

  function ctxLine(t) {
    const chain = [];
    let p = t.parent;
    while (p) { chain.unshift(TOC[p]); p = TOC[p].parent; }
    return chain.map((c) => (c.level === 1 ? (isChapter(c) ? 'Chapter ' + c.num : c.num ? 'Appendix ' + c.num : c.title) : `${c.num} ${c.title}`)).join(' › ');
  }

  // ------------------------------------------------------------------ figures (packed images)
  const packs = new Map();
  const figUrls = new Map();
  function loadPack(name) {
    if (!packs.has(name)) {
      packs.set(name, fetch('data/' + name).then((r) => {
        if (!r.ok) throw new Error(name + ' ' + r.status);
        return r.arrayBuffer();
      }).catch((e) => { packs.delete(name); throw e; }));
    }
    return packs.get(name);
  }
  async function figURL(id) {
    if (figUrls.has(id)) return figUrls.get(id);
    const f = C.figs[id];
    const buf = await loadPack(f.pack);
    const url = URL.createObjectURL(new Blob([buf.slice(f.off, f.off + f.len)], { type: 'image/webp' }));
    figUrls.set(id, url);
    return url;
  }
  // small photos for the bridge-type and component pickers (one file, saved with the app itself)
  const thumbUrls = new Map();
  async function thumbURL(id) {
    if (thumbUrls.has(id)) return thumbUrls.get(id);
    const [off, len] = C.thumbs[id];
    const buf = await loadPack('thumbs.bin');
    const url = URL.createObjectURL(new Blob([buf.slice(off, off + len)], { type: 'image/webp' }));
    thumbUrls.set(id, url);
    return url;
  }
  let io = null;
  function hydrate(root = view) {
    const imgs = $$('img[data-fig],img[data-thumb]', root);
    if (!('IntersectionObserver' in window)) { imgs.forEach(loadImg); return; }
    if (!io) {
      io = new IntersectionObserver((ents) => {
        for (const en of ents) if (en.isIntersecting) { io.unobserve(en.target); loadImg(en.target); }
      }, { rootMargin: '900px 0px' });
    }
    imgs.forEach((img) => io.observe(img));
  }
  async function loadImg(img) {
    try {
      img.src = img.dataset.thumb ? await thumbURL(img.dataset.thumb) : await figURL(img.dataset.fig);
    } catch (e) {
      const ph = document.createElement('div');
      ph.className = 'ph';
      ph.innerHTML = img.dataset.thumb || img.closest('.tile') ? icon('image') : icon('cloud-off') + '<span>Figure not saved on this device yet. Download the manual in Settings to see figures offline.</span>';
      img.replaceWith(ph);
    }
  }

  // ------------------------------------------------------------------ top bar and tabs
  function setBar({ back = false, title = '', sub = '', actions = '' } = {}) {
    let h = back ? `<button class="ib" id="b-back" aria-label="Back">${icon('chevron-left')}</button>` : '<span style="width:8px"></span>';
    h += `<div class="ttl">${esc(title)}${sub ? `<small>${esc(sub)}</small>` : ''}</div>`;
    h += `<span id="netdot"></span>${actions}`;
    h += `<a class="ib" href="#/settings" aria-label="Settings and offline download">${icon('settings')}</a>`;
    bar.innerHTML = h;
    refreshNet();
  }
  function refreshNet() {
    const d = $('#netdot');
    if (d) d.innerHTML = navigator.onLine ? '' : `<span class="offline-dot" role="status">${icon('wifi-off')}Offline</span>`;
  }
  const TABS = [['#/', 'search', 'Search'], ['#/toc', 'book-open', 'Contents'], ['#/el', 'tag', 'Elements'], ['#/figs', 'image', 'Figures'], ['#/saved', 'bookmark', 'Saved']];
  function renderTabs() {
    $('#tabs').innerHTML = TABS.map(([h, i, l]) => `<a href="${h}" data-tab="${h}">${icon(i)}<span>${l}</span></a>`).join('');
    $('#tabs').addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (a && a.dataset.tab === '#/' && (location.hash === '' || location.hash === '#/')) {
        e.preventDefault();
        const q = $('#q');
        if (q) { window.scrollTo(0, 0); q.focus(); }
      }
    });
  }
  function setTab(h) {
    $$('#tabs a').forEach((a) => (a.dataset.tab === h ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current')));
  }

  // ------------------------------------------------------------------ router
  let rendered = '';
  let isPop = false;
  let navDepth = 0;
  let replacing = false;
  const scrolls = new Map();
  function replaceHash(h) { replacing = true; location.replace(h); }
  window.addEventListener('popstate', () => { isPop = true; });
  window.addEventListener('hashchange', () => route());

  function route() {
    const h = location.hash.slice(1) || '/';
    const [path, qs] = h.split('?');
    const params = new URLSearchParams(qs || '');
    const parts = path.split('/').filter(Boolean).map(decodeURIComponent);
    const pop = isPop;
    isPop = false;
    if (pop) navDepth = Math.max(0, navDepth - 1); else if (rendered && !replacing) navDepth += 1;
    replacing = false;

    if (parts[0] === 'f' || parts[0] === 'p') {
      if (!rendered) {
        const base = parts[0] === 'f' && C.figs[parts[1]] ? '/s/' + C.figs[parts[1]].sec : '/';
        rendered = base;
        renderView(base.split('/').filter(Boolean), new URLSearchParams());
      }
      return parts[0] === 'f' ? openFigure(parts[1]) : openPage(parseInt(parts[1], 10) || 1);
    }
    closeOverlay();
    if (h === rendered) return;
    if (rendered) scrolls.set(rendered, window.scrollY);
    rendered = h;
    renderView(parts, params);
    if (pop && scrolls.has(h)) requestAnimationFrame(() => window.scrollTo(0, scrolls.get(h)));
    else if (!['h', 't', 'a', 'x', 'm'].some((k) => params.get(k))) window.scrollTo(0, 0);
  }

  function renderView(parts, params) {
    hideFind();
    const p0 = parts[0] || '';
    const P = (k) => params.get(k) || '';
    switch (p0) {
      case '':
      case 'search': setTab('#/'); return viewHome(P('q'));
      case 'toc': setTab('#/toc'); return viewToc();
      case 's': setTab(/^app-/.test(parts[1] || '') ? '#/el' : '#/toc'); return viewSection(parts[1] || '', params);
      case 'el': setTab('#/el'); return parts[1] ? viewElement(parts[1]) : viewElements(P('cat'), P('cs4') === '1');
      case 'figs': setTab('#/figs'); return viewFigures(P('ch'), P('q'));
      case 'saved': setTab('#/saved'); return viewSaved();
      case 'settings': setTab(''); return viewSettings();
      case 'type': setTab('#/'); return viewType(parts[1] || '');
      case 'critical': setTab('#/'); return viewCritical(P('cat'));
      case 'measure': setTab('#/'); return viewMeasure(P('cat'), P('m'), P('q'));
      case 'comp': setTab('#/'); return parts[1] ? viewComp(parts[1]) : viewComps(P('g'));
      case 'workflow': setTab('#/'); return viewWorkflow();
      default: setTab('#/'); return viewHome('');
    }
  }
  // keep filter choices in the address without adding a history step
  function replaceRoute(path, obj) {
    const p = new URLSearchParams();
    for (const [k, v] of Object.entries(obj)) if (v) p.set(k, v);
    const key = path + (p.toString() ? '?' + p.toString() : '');
    history.replaceState(null, '', '#' + key);
    rendered = key;
  }
  function goBack() {
    if (navDepth > 0) history.back();
    else location.hash = '#/';
  }
  function notFound() {
    setBar({ back: true, title: 'Not found' });
    view.innerHTML = '<div class="empty"><b>That page isn\'t in the manual.</b>Use Search or Contents to find what you need.</div>';
  }

  // ------------------------------------------------------------------ saved and recent
  const sameItem = (a, t, id) => a.t === t && a.id === id;
  const isSaved = (t, id) => store.get('saved', []).some((a) => sameItem(a, t, id));
  function toggleSaved(t, id, btn) {
    let s = store.get('saved', []);
    const on = s.some((a) => sameItem(a, t, id));
    s = on ? s.filter((a) => !sameItem(a, t, id)) : [{ t, id }, ...s];
    store.set('saved', s);
    if (btn) { btn.setAttribute('aria-pressed', String(!on)); btn.setAttribute('aria-label', on ? 'Bookmark' : 'Remove bookmark'); }
    toast(on ? 'Bookmark removed' : 'Bookmarked. Find it under Saved.');
  }
  function addRecent(t, id) {
    const r = store.get('recent', []).filter((a) => !sameItem(a, t, id));
    r.unshift({ t, id });
    store.set('recent', r.slice(0, 15));
  }
  const bmBtn = (t, id) => {
    const on = isSaved(t, id);
    return `<button class="ib" id="b-bm" data-t="${t}" data-id="${esc(id)}" aria-pressed="${on}" aria-label="${on ? 'Remove bookmark' : 'Bookmark'}">${icon('bookmark')}</button>`;
  };
  const shareBtn = () => `<button class="ib" id="b-share" aria-label="Share link">${icon('share-2')}</button>`;
  async function share() {
    const url = location.href;
    const title = ($('#bar .ttl') || {}).textContent || document.title;
    if (navigator.share) {
      try { await navigator.share({ title, url }); return; } catch (e) { if (e && e.name === 'AbortError') return; }
    }
    try { await navigator.clipboard.writeText(url); toast('Link copied'); } catch (e) { toast(url); }
  }
  function itemRow(a) {
    if (a.t === 's' && TOC[a.id]) {
      const t = TOC[a.id];
      return `<li><a class="row" href="#/s/${t.id}">${t.num ? `<span class="plate">${esc(plateText(t))}</span>` : ''}<span class="t"><b>${wb(t.title)}</b><small>${esc(ctxLine(t) || pagesText(t.pages))}</small></span>${icon('chevron-right', 'go')}</a></li>`;
    }
    if (a.t === 'e' && EL[a.id]) {
      const e = EL[a.id];
      return `<li><a class="row" href="#/el/${e.no}"><span class="plate">${e.no}</span><span class="t"><b>${wb(e.name)}</b><small>Element</small></span>${icon('chevron-right', 'go')}</a></li>`;
    }
    if (a.t === 'f' && C.figs[a.id]) {
      const f = C.figs[a.id];
      return `<li><a class="row" href="#/f/${a.id}"><span class="plate o">${esc(a.id)}</span><span class="t"><b>Figure ${esc(a.id)}</b><small>${esc(f.cap)}</small></span>${icon('chevron-right', 'go')}</a></li>`;
    }
    return '';
  }

  // ------------------------------------------------------------------ home and search
  function viewHome(q) {
    setBar({ title: 'MBI Manual', sub: 'Field reference' });
    view.innerHTML = `
      <div class="home-h"><h1>Movable Bridge Inspection Manual</h1><p>Field reference built from the LADOTD manual</p>
        <p class="src">Manual source: ${esc(C.meta.edition)} edition, ${C.meta.revision ? esc(C.meta.revision) : 'no revisions listed'}</p></div>
      <div id="home-notice"></div>
      <div id="home-status"></div>
      <div class="search-wrap"><label class="search">${icon('search')}<span class="sr">Search the manual</span>
        <input id="q" type="search" enterkeyhint="search" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="Search the manual" value="${esc(q)}">
        <button class="ib clear" id="qx" type="button" aria-label="Clear search"${q ? '' : ' hidden'}>${icon('x')}</button></label></div>
      <div id="results" aria-live="polite"></div>
      <div id="home-rest">${homeRest()}</div>`;
    const inp = $('#q');
    let tm;
    inp.addEventListener('input', () => {
      $('#qx').hidden = !inp.value;
      clearTimeout(tm);
      tm = setTimeout(() => doSearch(inp.value), 150);
    });
    inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') { clearTimeout(tm); doSearch(inp.value); inp.blur(); } });
    $('#qx').addEventListener('click', () => { inp.value = ''; $('#qx').hidden = true; doSearch(''); inp.focus(); });
    renderNoticeInto($('#home-notice'));
    renderInstallInto($('#home-install'), true);
    renderOfflineInto($('#home-status'), 'strip');
    hydrate();
    if (q) doSearch(q);
  }

  const toolRow = (href, ic, title, sub, cls = '') => `<li><a class="row" href="${href}"><span class="tool-ic ${cls}">${icon(ic)}</span><span class="t"><b>${title}</b><small>${sub}</small></span>${icon('chevron-right', 'go')}</a></li>`;
  const typeTile = (t) => `<a class="pick" href="#/type/${t.id}"><span class="im"><img data-thumb="${esc(t.fig)}" alt=""></span><b>${esc(t.name)}</b></a>`;

  function homeRest() {
    const chapters = C.toc.filter((t) => t.level === 1 && isChapter(t));
    const recent = store.get('recent', []).slice(0, 5).map(itemRow).join('');
    return `
      <p class="hint">Search words, section numbers, element numbers, figure numbers or acronyms. Try
        <button type="button" data-q="3.16.4">3.16.4</button>, <button type="button" data-q="882">882</button>,
        <button type="button" data-q="gearbox">gearbox</button>, <button type="button" data-q="backlash">backlash</button> or
        <button type="button" data-q="ATS">ATS</button>.</p>
      <div id="home-install"></div>
      <h2 class="grp">Field reference by bridge type</h2>
      <div class="types">${F.types.map(typeTile).join('')}</div>
      <h2 class="grp">Field tools</h2>
      <ul class="list">
        ${toolRow('#/critical', 'siren', 'Critical findings', 'What to report immediately, and every element’s CS4', 'crit')}
        ${toolRow('#/measure', 'ruler', 'Measurements and limits', 'How to measure, and the limits the manual gives')}
        ${toolRow('#/comp', 'scan-search', 'What is this component?', 'Pick what you’re looking at to find its section and element')}
        ${toolRow('#/workflow', 'list-checks', 'Inspection workflow', 'From planning to reporting, linked to the manual')}
      </ul>
      ${recent ? `<h2 class="grp">Recently viewed</h2><ul class="list">${recent}</ul>` : ''}
      <h2 class="grp">Chapters</h2>
      <ul class="list">${chapters.map((t) => `<li><a class="row" href="#/s/${t.id}"><span class="plate">${esc(plateText(t))}</span><span class="t"><b>${esc(t.title)}</b><small>${pagesText(chapterPages(t))}</small></span>${icon('chevron-right', 'go')}</a></li>`).join('')}
        <li><a class="row" href="#/s/app-a"><span class="plate">App A</span><span class="t"><b>Agency Defined Elements</b><small>Page 258</small></span>${icon('chevron-right', 'go')}</a></li>
        <li><a class="row" href="#/s/app-b"><span class="plate">App B</span><span class="t"><b>Movable Bridge Element Guide</b><small>Pages 260–273</small></span>${icon('chevron-right', 'go')}</a></li>
        <li><a class="row" href="#/s/foreword"><span class="plate o">Fwd</span><span class="t"><b>Foreword</b><small>Page 3</small></span>${icon('chevron-right', 'go')}</a></li>
      </ul>
      <p class="foot-note">Prototype. Not an official LADOTD publication. The official manual governs; every section links to its official pages so you can check the exact wording.</p>`;
  }
  function chapterPages(t) {
    let last = t.pages[1];
    const walk = (id) => { const x = TOC[id]; last = Math.max(last, x.pages[1]); x.children.forEach(walk); };
    t.children.forEach(walk);
    return [t.pages[0], last];
  }

  let searchSeq = 0;
  async function doSearch(raw) {
    const q = raw.trim();
    const key = q ? '/search?q=' + encodeURIComponent(q) : '/';
    history.replaceState(null, '', '#' + key);
    rendered = key;
    const res = $('#results');
    const rest = $('#home-rest');
    if (!res) return;
    const status = $('#home-status');
    if (status) status.hidden = !!q && !dl.active;     // keep results near the top while searching
    if (!q) { res.innerHTML = ''; rest.hidden = false; return; }
    rest.hidden = true;
    const seq = ++searchSeq;
    const syn = synonymFor(q);
    const answers = instantAnswers(q).concat(fieldAnswers(q));
    let h = syn ? synCard(syn) : '';
    h += answers.length ? `<div class="answers">${answers.join('')}</div>` : '';
    const literal = q.match(/^(?:sec(?:tion)?\.?\s*)?(\d+(?:\.\d+)+)$/i) || q.match(/^(?:fig(?:ure)?\.?\s*)?(\d-\d{1,2})$/i) || q.match(/^(?:p|pg|page)\.?\s*(\d{1,3})$/i) || q.match(/^tab(?:le)?\.?\s*(\d-\d)$/i);
    if (literal) {
      res.innerHTML = h + mentions(literal[1]);
      return;
    }
    if (!ms || !ms.__ready) {
      res.innerHTML = h + '<p class="res-n">Preparing search…</p>';
      await indexReady;
      if (seq !== searchSeq) return;
    }
    let hits = ms.search(q);
    if (syn) {
      // also search the manual's own term, and merge the two result lists
      const all = new Map(hits.map((r) => [r.id, r]));
      for (const r of ms.search(syn.query)) {
        const e = all.get(r.id);
        if (e) { e.score += r.score; e.terms = [...new Set([...e.terms, ...r.terms])]; } else all.set(r.id, r);
      }
      hits = [...all.values()].sort((a, b) => b.score - a.score);
    }
    let loose = false;
    if (!hits.length) { hits = ms.search(q, { combineWith: 'OR' }); loose = hits.length > 0; }
    if (seq !== searchSeq) return;
    if (!hits.length && !answers.length && !syn) {
      res.innerHTML = `<div class="empty"><b>No matches for “${esc(q)}”.</b>Check the spelling, try a shorter word, or browse Contents.</div>`;
      return;
    }
    const shown = hits.slice(0, 60);
    h += hits.length ? `<p class="res-n">${hits.length > 60 ? `Top 60 of ${hits.length}` : hits.length} result${hits.length === 1 ? '' : 's'}${loose ? ' containing some of your words' : ''}${syn ? `, including the manual’s term “${esc(syn.s.expand)}”` : ''}</p>` : '';
    h += shown.map((r) => resultHTML(r)).join('');
    res.innerHTML = h;
  }

  // field words the manual calls something else ("gearbox" is a speed reducer). The official term is shown, never swapped in silently.
  function synonymFor(q) {
    const s = q.toLowerCase().replace(/\s+/g, ' ').trim();
    if (s.length < 3) return null;
    for (const { s: syn, term } of SYN) {
      const re = new RegExp('(^|\\s)' + escRe(term) + '(?=\\s|$)', 'i');
      if (re.test(s)) return { s: syn, term, query: s.replace(re, '$1' + syn.expand).trim() };
    }
    return null;
  }
  function synCard({ s, term }) {
    const links = [
      ...s.secs.filter((id) => TOC[id]).map((id) => answerLink(`#/s/${id}?h=${encodeURIComponent(s.expand)}`, TOC[id].num, TOC[id].title, ctxLine(TOC[id]))),
      ...s.els.filter((n) => EL[n]).map((n) => answerLink('#/el/' + n, n, EL[n].name, 'Element condition states and feasible actions')),
    ];
    return `<div class="syn"><p class="syn-h">${icon('book-open')}<span>Manual term for “${esc(term)}”: <b>${esc(s.label)}</b></span></p>${links.length ? `<div class="answers">${links.join('')}</div>` : ''}</div>`;
  }
  const toolAnswer = (href, ic, title, sub, cls = '') => `<a class="answer" href="${href}"><span class="tool-ic ${cls}">${icon(ic)}</span><span class="t"><b>${esc(title)}</b><small>${esc(sub)}</small></span>${icon('chevron-right', 'go')}</a>`;
  function fieldAnswers(q) {
    const s = q.trim().toLowerCase();
    if (s.length < 4 || /\d/.test(s) || s.split(/\s+/).length > 3) return [];
    const base = s.length > 4 && s.endsWith('s') ? s.slice(0, -1) : s;
    const word = new RegExp('\\b' + escRe(base) + '(s|es)?\\b', 'i');
    const out = [];
    const ms2 = F.measures.filter((m) => word.test(m.t));
    if (ms2.length === 1) out.push(toolAnswer('#/measure?m=' + ms2[0].id, 'ruler', ms2[0].t, 'Measurements and limits'));
    else if (ms2.length > 1) out.push(toolAnswer('#/measure?q=' + encodeURIComponent(s), 'ruler', `${ms2.length} measurement topics`, ms2.map((m) => m.t).join(', ')));
    const comp = F.components.find((k) => word.test(k.name));
    if (comp) out.push(toolAnswer('#/comp/' + comp.id, 'scan-search', comp.name, 'What is this component?'));
    if (/^(critical|cs4|severe|notify|immediate(ly)?)( findings?)?$/.test(s)) out.unshift(toolAnswer('#/critical', 'siren', 'Critical findings', 'What to report immediately, and every element’s CS4', 'crit'));
    return out;
  }

  function mentions(lit) {
    const out = [];
    const re = new RegExp('(^|[^\\d.\\-])' + escRe(lit) + '(?![\\d]|\\.\\d)');
    for (const t of C.toc) {
      const text = C.sec[t.id].text;
      if (re.test(text)) out.push(t);
    }
    if (!out.length) return '';
    return `<p class="res-n">Mentioned in</p>` + out.map((t) => `<a class="res" href="#/s/${t.id}?h=${encodeURIComponent(lit)}"><span class="h">${t.num ? `<span class="plate">${esc(plateText(t))}</span>` : ''}<b>${esc(t.title)}</b></span><span class="ctx">${esc(ctxLine(t))}</span><p class="snip">${snippetLiteral(C.sec[t.id].text, lit)}</p></a>`).join('');
  }

  function answerLink(href, plate, title, sub, outline) {
    return `<a class="answer" href="${href}"><span class="plate${outline ? ' o' : ''}">${esc(plate)}</span><span class="t"><b>${wb(title)}</b>${sub ? `<small>${esc(sub)}</small>` : ''}</span>${icon('chevron-right', 'go')}</a>`;
  }
  function instantAnswers(q) {
    const out = [];
    const s = q.trim();
    let m;
    if ((m = s.match(/^(?:sec(?:tion)?\.?\s*)?(\d+(?:\.\d+){1,2})$/i)) && BYNUM[m[1]]) {
      const t = BYNUM[m[1]];
      out.push(answerLink('#/s/' + t.id, t.num, t.title, ctxLine(t) || pagesText(t.pages)));
    }
    if ((m = s.match(/^ch(?:apter)?\.?\s*(\d)$/i)) && TOC['ch-' + m[1]]) {
      const t = TOC['ch-' + m[1]];
      out.push(answerLink('#/s/' + t.id, plateText(t), t.title, 'Chapter ' + t.num));
    }
    if ((m = s.match(/^(?:el(?:ement)?\.?|ade)?\s*#?(8\d\d)$/i)) && EL[m[1]]) {
      const e = EL[m[1]];
      out.push(answerLink('#/el/' + e.no, e.no, e.name, 'Element condition states and feasible actions'));
    }
    if ((m = s.match(/^(?:fig(?:ure)?\.?\s*)?(\d-\d{1,2})$/i)) && C.figs[m[1]]) {
      const f = C.figs[m[1]];
      out.push(answerLink('#/f/' + m[1], m[1], 'Figure ' + m[1], f.cap, true));
    }
    if ((m = s.match(/^tab(?:le)?\.?\s*(\d-\d)$/i)) && C.tabs[m[1]]) {
      const t = C.tabs[m[1]];
      out.push(answerLink(`#/s/${t.sec}?t=${m[1]}`, m[1], 'Table ' + m[1], t.cap, true));
    }
    if ((m = s.match(/^(?:p|pg|page)\.?\s*(\d{1,3})$/i)) && +m[1] >= 1 && +m[1] <= C.meta.pages) {
      const sec = sectionForPage(+m[1]);
      out.push(answerLink('#/p/' + m[1], 'p ' + m[1], 'Official manual, page ' + m[1], sec ? fullLabel(sec) : '', true));
    }
    if ((m = s.match(/^app(?:endix)?\.?\s*([ab])$/i))) {
      const t = TOC['app-' + m[1].toLowerCase()];
      out.push(answerLink('#/s/' + t.id, plateText(t), t.title, 'Appendix ' + t.num));
    }
    const ac = C.acronyms.find(([a]) => a.toLowerCase() === s.toLowerCase().replace(/s$/, '') || a.toLowerCase() === s.toLowerCase());
    if (ac) out.push(`<a class="answer" href="#/s/s-1-2?h=${encodeURIComponent(ac[0])}"><span class="plate o">${esc(ac[0])}</span><span class="t"><b>${esc(ac[1])}</b><small>Acronym, section 1.2</small></span>${icon('chevron-right', 'go')}</a>`);
    return out;
  }

  function hlRegex(terms) {
    const ts = [...new Set(terms.filter((t) => t && t.length > 1))].map(escRe).sort((a, b) => b.length - a.length);
    return ts.length ? new RegExp('\\b(?:' + ts.join('|') + ')[\\w\']*', 'gi') : null;
  }
  function markText(text, re, brk) {
    const e = brk ? wb : esc;
    if (!re) return e(text);
    let out = '';
    let last = 0;
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(text))) {
      out += e(text.slice(last, m.index)) + '<mark>' + e(m[0]) + '</mark>';
      last = m.index + m[0].length;
      if (!m[0].length) re.lastIndex += 1;
    }
    return out + e(text.slice(last));
  }
  function snippetAround(text, pos, re, len = 190) {
    let start = Math.max(0, pos - 70);
    if (start > 0) { const sp = text.indexOf(' ', start); if (sp > -1 && sp < pos) start = sp + 1; }
    let end = Math.min(text.length, start + len);
    if (end < text.length) { const sp = text.lastIndexOf(' ', end); if (sp > pos) end = sp; }
    return (start > 0 ? '… ' : '') + markText(text.slice(start, end), re) + (end < text.length ? ' …' : '');
  }
  function snippet(text, terms) {
    const re = hlRegex(terms);
    let pos = 0;
    if (re) { re.lastIndex = 0; const m = re.exec(text); if (m) pos = m.index; }
    return snippetAround(text, pos, re);
  }
  function snippetLiteral(text, lit) {
    const re = new RegExp(escRe(lit), 'g');
    const m = re.exec(text);
    return snippetAround(text, m ? m.index : 0, re);
  }
  const elementText = (e) => [e.descB || e.descA, ...e.cs.map((c) => `CS${c.n} ${CSN[c.n]} ${c.desc} ${c.act.map((a) => a[1]).join(' ')}`)].join(' ');

  function resultHTML(r) {
    const terms = r.terms || [];
    const hq = encodeURIComponent(terms.join(' '));
    if (r.kind === 's') {
      const t = TOC[r.ref];
      return `<a class="res" href="#/s/${t.id}?h=${hq}"><span class="h">${t.num ? `<span class="plate">${esc(plateText(t))}</span>` : ''}<b>${markText(t.title, hlRegex(terms), true)}</b></span>${ctxLine(t) ? `<span class="ctx">${esc(ctxLine(t))}</span>` : ''}<p class="snip">${snippet(C.sec[t.id].text || t.title, terms)}</p></a>`;
    }
    if (r.kind === 'e') {
      const e = EL[r.ref];
      return `<a class="res" href="#/el/${e.no}"><span class="h"><span class="plate">${e.no}</span><b>${markText(e.name, hlRegex(terms), true)}</b></span><span class="ctx">Element, Appendix B</span><p class="snip">${snippet(elementText(e), terms)}</p></a>`;
    }
    const f = C.figs[r.ref];
    return `<a class="res" href="#/f/${r.ref}"><span class="h"><span class="plate o">${esc(r.ref)}</span><b>Figure ${esc(r.ref)}</b></span><p class="snip">${markText(f.cap, hlRegex(terms))}</p></a>`;
  }

  function buildIndex() {
    ms = new MiniSearch({
      fields: ['num', 'title', 'heads', 'text'],
      storeFields: ['kind', 'ref'],
      processTerm: (term) => { const t = term.toLowerCase(); return t.length < 2 || STOP.has(t) ? null : t; },
      searchOptions: {
        boost: { num: 4, title: 3, heads: 2 },
        prefix: (t) => t.length > 2,
        fuzzy: (t) => (t.length > 4 ? 0.2 : false),
        combineWith: 'AND',
        boostDocument: (id) => (id[0] === 'f' ? 0.5 : id[0] === 'e' ? 1.25 : 1),
      },
    });
    const docs = [];
    for (const t of C.toc) {
      const s = C.sec[t.id];
      docs.push({ id: 's:' + t.id, kind: 's', ref: t.id, num: t.num, title: t.title, heads: s.heads.join(' '), text: s.text });
    }
    for (const e of C.elements) docs.push({ id: 'e:' + e.no, kind: 'e', ref: e.no, num: e.no, title: e.name, heads: '', text: elementText(e) });
    for (const id of FIGS) { const f = C.figs[id]; docs.push({ id: 'f:' + id, kind: 'f', ref: id, num: id, title: f.cap, heads: '', text: f.labels || '' }); }
    indexReady = ms.addAllAsync(docs, { chunkSize: 30 }).then(() => { ms.__ready = true; });
  }

  // ------------------------------------------------------------------ section reader
  const CODING_BAR = '<span class="csbar" aria-hidden="true"><i style="background:var(--cs1)"></i><i style="background:var(--cs2)"></i><i style="background:var(--cs3)"></i><i style="background:var(--cs4)"></i></span>';
  function renderBlocks(blocks) {
    return blocks.map((b) => {
      switch (b[0]) {
        case 'p': return `<p>${b[1]}</p>`;
        case 'h4': return `<h3 id="${b[2]}">${esc(b[1])}</h3>`;
        case 'h5': return /recommendation/i.test(b[1]) ? `<h4 class="coding" id="${b[2]}">${CODING_BAR}<span>${esc(b[1])}</span></h4>` : `<h4 id="${b[2]}">${esc(b[1])}</h4>`;
        case 'h6': return `<h5>${esc(b[1])}</h5>`;
        case 'ul': return listHTML(b[1]);
        case 'fig': return figHTML(b[1]);
        case 'tbl': return tableHTML(b[1]);
        case 'elref': return elrefHTML(b[1]);
        case 'kv': return `<dl class="kv">${b[1].map((r) => `<dt>${r[0]}</dt><dd>${r.slice(1).join(' ')}</dd>`).join('')}</dl>`;
        case 'acro': return `<dl class="acro">${b[1].map(([a, m]) => `<dt>${esc(a)}</dt><dd>${esc(m)}</dd>`).join('')}</dl>`;
        case 'elist': return `<ul class="list">${b[1].map((no) => { const e = EL[no]; return `<li><a class="row" href="#/el/${no}"><span class="plate">${no}</span><span class="t"><b>${wb(e.name)}</b><small>${esc(e.descA)}</small></span>${icon('chevron-right', 'go')}</a></li>`; }).join('')}</ul>`;
        case 'elguide': return b[1].map((no) => elementCardHTML(EL[no], true)).join('');
        default: return '';
      }
    }).join('');
  }
  function listHTML(items) {
    const ordered = items.some((it) => it.m);
    const li = items.map((it) => `<li${it.m ? ` data-m="${esc(it.m)}"` : ''}>${it.h}${it.sub && it.sub.length ? `<ul>${it.sub.map((s) => `<li>${s}</li>`).join('')}</ul>` : ''}</li>`).join('');
    return ordered ? `<ol class="mk">${li}</ol>` : `<ul>${li}</ul>`;
  }
  function figHTML(id) {
    const f = C.figs[id];
    if (!f) return '';
    return `<figure class="fig" id="fig-${esc(id)}"><button type="button" data-open-fig="${esc(id)}" aria-label="Open figure ${esc(id)} full screen"><img data-fig="${esc(id)}" width="${f.w}" height="${f.h}" alt="${esc(f.cap)}"></button><figcaption><b>Figure ${esc(id)}</b>${esc(f.cap)}</figcaption></figure>`;
  }
  function tableHTML(t) {
    const html = t.html.replace(/\bCS([1-4])(\s*(?:&quot;|[“"])?\s*(?:GOOD|FAIR|POOR|SEVERE)\s*(?:&quot;|[”"])?)?/gi, (m, n) => `<span class="cs c${n}">${m}</span>`);
    const cap = t.id ? `<div class="cap"><b>Table ${esc(t.id)}</b>${esc(t.cap || '')}</div>` : '';
    return `<div class="tbl"${t.id ? ` id="t-${esc(t.id)}"` : ''}>${cap}<div class="scroll-x">${html}</div></div>`;
  }
  function elrefHTML(nos) {
    return `<div class="elref"><b>Elements</b><div class="chips">${nos.filter((n) => EL[n]).map((n) => `<a class="chip" href="#/el/${n}"><span class="plate">${n}</span><span>${wb(EL[n].name)}</span></a>`).join('')}</div></div>`;
  }
  function crumbsHTML(t) {
    const chain = [];
    let p = t.parent;
    while (p) { chain.unshift(TOC[p]); p = TOC[p].parent; }
    if (!chain.length) return '';
    return `<nav class="crumbs" aria-label="Where this section sits">${chain.map((c) => `<a href="#/s/${c.id}">${esc(c.level === 1 ? (isChapter(c) ? 'Chapter ' + c.num : 'Appendix ' + c.num) : c.num + ' ' + c.title)}</a>`).join('<span aria-hidden="true">›</span>')}</nav>`;
  }
  function sectionForPage(n) {
    let best = null;
    for (const t of C.toc) if (t.pages[0] <= n && n <= t.pages[1] && (!best || t.level >= best.level)) best = t;
    return best;
  }

  function viewSection(id, params) {
    const t = TOC[id];
    if (!t) return notFound();
    const s = C.sec[id];
    setBar({ back: true, title: t.num ? `${plateText(t)} ${t.title}` : t.title, actions: bmBtn('s', id) + shareBtn() });
    let h = '<article class="sec">' + crumbsHTML(t);
    h += `<header class="sec-h">${t.num ? `<span class="plate lg">${esc(plateText(t))}</span>` : ''}<h1>${wb(t.title)}</h1></header>`;
    const pages = t.level === 1 ? chapterPages(t) : t.pages;
    h += `<div class="orig"><a class="btn ghost" href="#/p/${pages[0]}">${icon('file-text')}${officialLabel(pages)}</a></div>`;
    h += renderBlocks(s.blocks);
    if (t.children.length) {
      h += `<div class="kids"><h2>${t.level === 1 ? 'Sections' : 'In this section'}</h2><ul class="list">${t.children.map((k) => {
        const x = TOC[k];
        return `<li><a class="row" href="#/s/${k}"><span class="plate">${esc(x.num)}</span><span class="t"><b>${wb(x.title)}</b>${x.children.length ? `<small>${x.children.map((g) => TOC[g].num + ' ' + TOC[g].title).join(', ')}</small>` : ''}</span>${icon('chevron-right', 'go')}</a></li>`;
      }).join('')}</ul></div>`;
    }
    const i = ORDER.indexOf(id);
    const prev = TOC[ORDER[i - 1]];
    const next = TOC[ORDER[i + 1]];
    h += `<nav class="pn" aria-label="Previous and next section">${prev ? `<a href="#/s/${prev.id}"><small>${icon('chevron-left')}Previous</small><b>${esc(fullLabel(prev))}</b></a>` : '<span></span>'}${next ? `<a class="next" href="#/s/${next.id}"><small>Next${icon('chevron-right')}</small><b>${esc(fullLabel(next))}</b></a>` : '<span></span>'}</nav>`;
    h += reportLinkHTML('section');
    h += '</article>';
    view.innerHTML = h;
    hydrate();
    addRecent('s', id);
    const hl = params.get('h');
    if (hl) highlight(hl);
    const tab = params.get('t');
    if (tab && !hl) { const el = document.getElementById('t-' + tab); if (el) requestAnimationFrame(() => el.scrollIntoView({ block: 'start' })); }
    const anchor = params.get('a');
    if (anchor && !hl) { const el = document.getElementById(anchor); if (el) requestAnimationFrame(() => el.scrollIntoView({ block: 'start' })); }
    const phrase = params.get('x');
    if (phrase && !hl) highlightPhrase(phrase);
  }
  const officialLabel = (p) => (p[0] === p[1] ? `View official manual, p. ${p[0]}` : `View official manual, pp. ${p[0]}–${p[1]}`);
  const reportLinkHTML = (what) => `<div class="report-l"><button type="button" class="linkbtn" data-report>${icon('flag')}Report a problem with this ${what}</button></div>`;

  // mark one quoted passage, even when it runs across bold, italic or list markup
  function highlightPhrase(phrase) {
    const root = $('.sec');
    if (!root) return;
    const nodes = [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => (n.parentElement && n.parentElement.closest('.crumbs,.sec-h,.orig,.pn,.kids,.report-l,figcaption,.cap') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
    });
    while (walker.nextNode()) nodes.push(walker.currentNode);
    const starts = [];
    let full = '';
    for (const n of nodes) { starts.push(full.length); full += n.nodeValue; }
    const words = phrase.split(/\s+/).filter(Boolean);
    let m = null;
    for (let k = words.length; k >= Math.min(4, words.length) && !m; k = k > 8 ? Math.ceil(k / 2) : k - 1) {
      m = new RegExp(words.slice(0, k).map(escRe).join('\\s*'), 'i').exec(full);
    }
    if (!m) return;
    const a = m.index;
    const b = a + m[0].length;
    const marks = [];
    nodes.forEach((n, i) => {
      const s = starts[i];
      const e = s + n.nodeValue.length;
      if (e <= a || s >= b) return;
      const mid = n.splitText(Math.max(a, s) - s);
      mid.splitText(Math.min(b, e) - Math.max(a, s));
      const mk = document.createElement('mark');
      mk.className = 'now';
      mid.replaceWith(mk);
      mk.append(mid);
      marks.push(mk);
    });
    if (marks.length) requestAnimationFrame(() => marks[0].scrollIntoView({ block: 'center' }));
  }

  // in-page highlighting and the match bar
  let findState = null;
  function highlight(q) {
    const terms = q.split(/\s+/).filter(Boolean);
    const re = terms.length === 1 && /[.\-]/.test(terms[0]) ? new RegExp(escRe(terms[0]), 'gi') : hlRegex(terms);
    const root = $('.sec');
    if (!re || !root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => (n.parentElement && n.parentElement.closest('.crumbs,.sec-h,.orig,.pn,.kids,mark') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    const marks = [];
    for (const n of nodes) {
      const text = n.nodeValue;
      re.lastIndex = 0;
      if (!re.test(text)) continue;
      re.lastIndex = 0;
      const frag = document.createDocumentFragment();
      let last = 0;
      let m;
      while ((m = re.exec(text))) {
        frag.append(text.slice(last, m.index));
        const mk = document.createElement('mark');
        mk.textContent = m[0];
        frag.append(mk);
        marks.push(mk);
        last = m.index + m[0].length;
        if (!m[0].length) re.lastIndex += 1;
      }
      frag.append(text.slice(last));
      n.replaceWith(frag);
      if (marks.length > 500) break;
    }
    if (marks.length) showFind(marks);
  }
  function showFind(marks) {
    findState = { marks, i: 0 };
    let f = $('#find');
    if (!f) {
      f = document.createElement('div');
      f.id = 'find';
      f.setAttribute('role', 'region');
      f.setAttribute('aria-label', 'Search matches');
      document.body.append(f);
      f.addEventListener('click', (e) => {
        const b = e.target.closest('[data-f]');
        if (!b || !findState) return;
        const d = +b.dataset.f;
        if (!d) clearHighlights(); else gotoMatch(findState.i + d);
      });
    }
    f.hidden = false;
    f.innerHTML = `<span id="find-n"></span><button class="ib" data-f="-1" aria-label="Previous match">${icon('chevron-up')}</button><button class="ib" data-f="1" aria-label="Next match">${icon('chevron-down')}</button><button class="ib" data-f="0" aria-label="Clear highlights">${icon('x')}</button>`;
    requestAnimationFrame(() => gotoMatch(0));
  }
  function gotoMatch(i) {
    const { marks } = findState;
    i = (i + marks.length) % marks.length;
    marks.forEach((m) => m.classList.remove('now'));
    marks[i].classList.add('now');
    marks[i].scrollIntoView({ block: 'center' });
    findState.i = i;
    $('#find-n').textContent = `Match ${i + 1} of ${marks.length}`;
  }
  function hideFind() { const f = $('#find'); if (f) f.hidden = true; findState = null; }
  function clearHighlights() {
    $$('.sec mark').forEach((m) => m.replaceWith(document.createTextNode(m.textContent)));
    const s = $('.sec');
    if (s) s.normalize();
    hideFind();
  }

  // ------------------------------------------------------------------ contents
  function viewToc() {
    setBar({ title: 'Contents', sub: 'Movable Bridge Inspection Manual' });
    const open = store.get('tocOpen', []);
    let h = `<div class="tree"><a class="row" href="#/s/foreword" style="border-bottom:1px solid var(--line)"><span class="plate o">Fwd</span><span class="t"><b>Foreword</b><small>Purpose of the manual and related references</small></span>${icon('chevron-right', 'go')}</a>`;
    for (const ch of C.toc.filter((t) => t.level === 1 && t.id !== 'foreword')) {
      h += `<details data-id="${ch.id}"${open.includes(ch.id) ? ' open' : ''}><summary><span class="plate">${esc(plateText(ch))}</span><span class="t">${esc(ch.title)}</span>${icon('chevron-right')}</summary><div class="sub">`;
      if (ch.children.length) h += `<a href="#/s/${ch.id}"><span class="n">${esc(plateText(ch))}</span><span>Chapter overview</span></a>`;
      else h += `<a href="#/s/${ch.id}"><span class="n">${esc(plateText(ch))}</span><span>${esc(ch.title)}</span></a>`;
      for (const id of ch.children) {
        const t = TOC[id];
        h += `<a href="#/s/${id}"><span class="n">${esc(t.num)}</span><span>${esc(t.title)}</span></a>`;
        for (const k of t.children) { const x = TOC[k]; h += `<a class="l3" href="#/s/${k}"><span class="n">${esc(x.num)}</span><span>${esc(x.title)}</span></a>`; }
      }
      h += '</div></details>';
    }
    view.innerHTML = h + '</div>';
    $$('.tree details[data-id]').forEach((d) => d.addEventListener('toggle', () => {
      const ids = $$('.tree details[data-id]').filter((x) => x.open).map((x) => x.dataset.id);
      store.set('tocOpen', ids);
    }));
  }

  // ------------------------------------------------------------------ elements
  function elementCardHTML(e, inGuide) {
    const H = inGuide ? 'h2' : 'h1';
    let h = `<section class="el-card" id="el-${e.no}"><header class="el-h"><span class="plate lg">${e.no}</span><div><${H}>${inGuide ? `<a href="#/el/${e.no}" style="color:inherit;text-decoration:none">${wb(e.name)}</a>` : wb(e.name)}</${H}><small>Unit: ${esc(e.unit)}</small></div></header>`;
    h += `<p class="el-desc">${esc(e.descB || e.descA)}</p>`;
    for (const c of e.cs) {
      h += `<div class="csrow c${c.n}"><span class="cs c${c.n}">CS${c.n} ${CSN[c.n]}</span><p>${esc(c.desc)}</p><div class="acts-l">Feasible actions</div><ul class="acts">${c.act.map(([k, a]) => {
        const notify = /notify/i.test(a);
        return `<li${notify ? ' class="notify"' : ''}><i>${k}</i>${notify ? icon('triangle-alert') : ''}${esc(a)}</li>`;
      }).join('')}</ul></div>`;
    }
    if (!inGuide) {
      if (e.secs.length) {
        h += `<h2 class="grp">Covered in the manual</h2><ul class="list">${e.secs.map((id) => { const t = TOC[id]; return `<li><a class="row" href="#/s/${id}"><span class="plate">${esc(t.num)}</span><span class="t"><b>${wb(t.title)}</b><small>${esc(ctxLine(t))}</small></span>${icon('chevron-right', 'go')}</a></li>`; }).join('')}</ul>`;
      }
      h += `<div class="orig" style="margin-top:18px"><a class="btn ghost" href="#/p/${e.pageB}">${icon('file-text')}View official manual, p. ${e.pageB}</a><a class="btn ghost" href="#/p/${e.pageA}">${icon('file-text')}Appendix A, p. ${e.pageA}</a></div>`;
      h += reportLinkHTML('element');
    }
    return h + '</section>';
  }
  const filtersHTML = (name, opts, cur, label) => `<div class="filters" data-f="${name}" role="group" aria-label="${esc(label)}">${opts.map(([v, l]) => `<button type="button" data-v="${esc(v)}" aria-pressed="${v === cur}">${esc(l)}</button>`).join('')}</div>`;
  function wireFilters(name, fn) {
    const box = $(`.filters[data-f="${name}"]`);
    if (box) box.addEventListener('click', (e) => { const b = e.target.closest('[data-v]'); if (b) fn(b.dataset.v); });
  }
  const catsOf = (no) => F.cat[no] || [];
  const cs4Line = (text) => `<span class="cs4l"><span class="cs c4">CS4</span> ${esc(text)}</span>`;

  function viewElements(cat, cs4) {
    setBar({ title: 'Elements', sub: 'Agency Defined Elements 840–892' });
    const cats = F.cats.filter(([k]) => C.elements.some((e) => catsOf(e.no).includes(k)));
    const list = C.elements.filter((e) => !cat || catsOf(e.no).includes(cat));
    view.innerHTML = `<p class="hint" style="margin:2px 0 8px">Condition states and feasible actions from Appendix B.</p>
      ${filtersHTML('cat', [['', 'All'], ...cats], cat, 'Show elements by discipline')}
      <label class="switch"><input type="checkbox" id="cs4t"${cs4 ? ' checked' : ''}><span class="sw" aria-hidden="true"></span><span>Show CS4 criteria</span></label>
      <ul class="list">${list.map((e) => `<li><a class="row${cs4 ? ' tall' : ''}" href="#/el/${e.no}"><span class="plate">${e.no}</span><span class="t"><b>${wb(e.name)}</b>${cs4 ? cs4Line(e.cs[3].desc) : ''}</span>${icon('chevron-right', 'go')}</a></li>`).join('')}</ul>`;
    const go = (c, t) => { replaceRoute('/el', { cat: c, cs4: t ? '1' : '' }); viewElements(c, t); };
    wireFilters('cat', (c) => go(c, cs4));
    $('#cs4t').addEventListener('change', (e) => { go(cat, e.target.checked); const t = $('#cs4t'); if (t) t.focus({ preventScroll: true }); });
  }
  function viewElement(no) {
    const e = EL[no];
    if (!e) return notFound();
    setBar({ back: true, title: `${e.no} ${e.name}`, actions: bmBtn('e', no) + shareBtn() });
    view.innerHTML = elementCardHTML(e, false);
    addRecent('e', no);
  }

  // ------------------------------------------------------------------ figures grid
  const filterBoxHTML = (id, label, v) => `<label class="search sm">${icon('search')}<span class="sr">${label}</span>
      <input id="${id}" type="search" enterkeyhint="search" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="${label}" value="${esc(v)}">
      <button class="ib clear" id="${id}x" type="button" aria-label="Clear"${v ? '' : ' hidden'}>${icon('x')}</button></label>`;
  const figTile = (id) => `<a class="tile" href="#/f/${id}"><div class="im"><img data-fig="${id}" alt=""></div><b>Figure ${id}</b><span>${esc(C.figs[id].cap)}</span></a>`;
  function viewFigures(ch, q = '') {
    setBar({ title: 'Figures', sub: `${FIGS.length} photos and drawings` });
    const chs = ['', ...new Set(FIGS.map((id) => id.split('-')[0]))];
    view.innerHTML = `${filterBoxHTML('fq', 'Search figure captions', q)}
      ${filtersHTML('ch', chs.map((c) => [c, c ? 'Chapter ' + c : 'All']), ch, 'Show figures by chapter')}
      <p class="res-n" id="fig-n" aria-live="polite"></p><div class="grid" id="fig-grid"></div>`;
    const inp = $('#fq');
    const draw = () => {
      const words = inp.value.toLowerCase().split(/\s+/).filter((w) => w.length > 1);
      const list = FIGS.filter((id) => (!ch || id.split('-')[0] === ch) && words.every((w) => (id + ' ' + C.figs[id].cap + ' ' + (C.figs[id].labels || '')).toLowerCase().includes(w)));
      $('#fig-grid').innerHTML = list.map(figTile).join('');
      $('#fig-n').textContent = words.length || ch ? `${list.length} figure${list.length === 1 ? '' : 's'}${words.length ? ` matching “${inp.value.trim()}”` : ''}` : '';
      if (!list.length) $('#fig-grid').innerHTML = '<div class="empty" style="grid-column:1/-1">No figure captions match. Try one word, like gear, brake or rope, or search the whole manual.</div>';
      replaceRoute('/figs', { ch, q: inp.value.trim() });
      hydrate($('#fig-grid'));
    };
    let tm;
    inp.addEventListener('input', () => { $('#fqx').hidden = !inp.value; clearTimeout(tm); tm = setTimeout(draw, 150); });
    inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') inp.blur(); });
    $('#fqx').addEventListener('click', () => { inp.value = ''; $('#fqx').hidden = true; draw(); inp.focus(); });
    wireFilters('ch', (c) => { ch = c; $$('.filters[data-f="ch"] button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.v === c))); draw(); });
    draw();
  }

  // ------------------------------------------------------------------ saved
  function viewSaved() {
    setBar({ title: 'Saved' });
    const saved = store.get('saved', []).map(itemRow).join('');
    const recent = store.get('recent', []).map(itemRow).join('');
    view.innerHTML = `<h2 class="grp" style="margin-top:4px">Bookmarks</h2>${saved ? `<ul class="list">${saved}</ul>` : `<div class="empty"><b>No bookmarks yet.</b>Tap the bookmark button at the top of any section, element or figure to keep it here.</div>`}
      <h2 class="grp">Recently viewed</h2>${recent ? `<ul class="list">${recent}</ul><div class="btns" style="margin-top:12px"><button class="btn ghost small" id="clr-recent" type="button">Clear recently viewed</button></div>` : '<div class="empty">Sections and elements you open will show up here.</div>'}`;
    const c = $('#clr-recent');
    if (c) c.addEventListener('click', () => { store.set('recent', []); viewSaved(); });
  }

  // ------------------------------------------------------------------ field reference pages
  // Every line on these pages is either a link into the manual or a verbatim quote with its section and official page.
  const secRow = (id, sub, title) => {
    const t = TOC[id];
    if (!t) return '';
    return `<li><a class="row" href="#/s/${id}">${t.num ? `<span class="plate">${esc(plateText(t))}</span>` : ''}<span class="t"><b>${wb(title || t.title)}</b>${sub ? `<small>${esc(sub)}</small>` : ''}</span>${icon('chevron-right', 'go')}</a></li>`;
  };
  const elRow = (no, sub) => {
    const e = EL[no];
    if (!e) return '';
    return `<li><a class="row" href="#/el/${no}"><span class="plate">${no}</span><span class="t"><b>${wb(e.name)}</b>${sub ? `<small>${esc(sub)}</small>` : ''}</span>${icon('chevron-right', 'go')}</a></li>`;
  };
  const secChip = (id) => { const t = TOC[id]; return t ? `<a class="chip" href="#/s/${id}"><span class="plate">${esc(plateText(t))}</span><span>${wb(t.title)}</span></a>` : ''; };
  const phraseParam = (q) => encodeURIComponent(q.split(/\s+/).slice(0, 30).join(' '));
  function quoteHTML(q) {
    const t = TOC[q.sec];
    return `<blockquote class="q"><p>${esc(q.q)}</p><footer><a href="#/s/${q.sec}?x=${phraseParam(q.q)}"><span class="plate">${esc(plateText(t))}</span><span>${wb(t.title)}</span></a><a href="#/p/${q.p}">${icon('file-text')}<span>Official manual, p. ${q.p}</span></a></footer></blockquote>`;
  }
  const fieldEnd = () => reportLinkHTML('page');

  function viewType(id) {
    const t = TYPE[id];
    if (!t) return notFound();
    setBar({ back: true, title: `${t.name} bridges`, sub: 'Field reference by bridge type', actions: shareBtn() });
    let h = '<div class="fieldpg">' + figHTML(t.fig);
    h += `<h2 class="grp">How it works</h2><ul class="list">${t.how.map((s) => secRow(s)).join('')}</ul>`;
    for (const [g, ids] of t.groups) h += `<h2 class="grp">${esc(g)}</h2><ul class="list">${ids.map((s) => secRow(s)).join('')}</ul>`;
    if (t.note) h += `<div class="qwrap">${quoteHTML(t.note)}</div>`;
    h += `<h2 class="grp">Elements you’ll usually find</h2><ul class="list">${t.els.map((n) => elRow(n)).join('')}</ul>`;
    h += `<h2 class="grp">On every movable bridge</h2><ul class="list">${F.common.map(([label, s]) => secRow(s, fullLabel(TOC[s]), label)).join('')}</ul>`;
    h += `<h2 class="grp">Other bridge types</h2><div class="types sm">${F.types.filter((x) => x.id !== id).map(typeTile).join('')}</div>`;
    view.innerHTML = h + fieldEnd() + '</div>';
    hydrate();
  }

  function critItemHTML(it) {
    const secs = it.secs.filter((id) => TOC[id]);
    return `<div class="crit"><p>${esc(it.q)}</p><div class="src">${secs.map((id) => `<a class="chip" href="#/s/${id}?x=${phraseParam(it.q)}"><span class="plate">${esc(TOC[id].num)}</span><span>${wb(TOC[id].title)}</span></a>`).join('')}${it.els.filter((n) => EL[n]).map((n) => `<a class="chip" href="#/el/${n}"><span class="plate">${n}</span><span>${wb(EL[n].name)}</span></a>`).join('')}<a class="chip pg" href="#/p/${it.p}">${icon('file-text')}<span>Official manual, p. ${it.p}</span></a></div></div>`;
  }
  function viewCritical(cat) {
    setBar({ back: true, title: 'Critical findings', actions: shareBtn() });
    const cr = F.critical;
    const used = F.cats.filter(([k]) => cr.items.some((i) => i.cat === k) || cr.cs4.some((r) => r.cats.includes(k)));
    const items = cr.items.filter((i) => !cat || i.cat === cat);
    const rows = cr.cs4.filter((r) => !cat || r.cats.includes(cat));
    const pB = cr.cs4.map((r) => r.p);
    let h = '<div class="fieldpg">' + cr.intro.map(quoteHTML).join('');
    h += '<p class="lede">Quoted from the manual. Each item links to its section, element and official page.</p>';
    h += filtersHTML('cat', [['', 'All'], ...used], cat, 'Show findings by discipline');
    h += '<h2 class="grp">Report at the time of the finding</h2><p class="sub">Where the chapters say to report a condition immediately or at the time of the finding.</p>';
    h += items.length ? items.map(critItemHTML).join('') : '<p class="sub none">None in the chapters for this discipline. The element CS4 conditions below still apply.</p>';
    h += `<h2 class="grp">Element CS4 conditions</h2><p class="sub">From Appendix B. ${cr.cs4.every((r) => r.notify) ? 'Every element lists Notify District Bridge Engineer as a CS4 feasible action.' : 'Open an element to see its CS4 feasible actions.'}</p>`;
    h += rows.length ? `<ul class="list">${rows.map((r) => `<li><a class="row tall" href="#/el/${r.no}"><span class="plate">${r.no}</span><span class="t"><b>${wb(EL[r.no].name)}</b>${cs4Line(r.q)}</span>${icon('chevron-right', 'go')}</a></li>`).join('')}</ul>` : '';
    h += `<div class="orig"><a class="btn ghost" href="#/p/${Math.min(...pB)}">${icon('file-text')}View official manual, Appendix B, pp. ${Math.min(...pB)}–${Math.max(...pB)}</a></div>`;
    view.innerHTML = h + fieldEnd() + '</div>';
    wireFilters('cat', (c) => { replaceRoute('/critical', { cat: c }); viewCritical(c); });
  }

  function tableBlock(id) {
    const t = C.tabs[id];
    const b = t && C.sec[t.sec].blocks.find((x) => x[0] === 'tbl' && x[1].id === id);
    return b ? b[1] : null;
  }
  const measText = (m) => (m.t + ' ' + m.qs.map((x) => x.q).join(' ') + ' ' + (m.tabcap || '')).toLowerCase();
  function measHTML(m, isOpen) {
    const first = TOC[m.qs.length ? m.qs[0].sec : m.tabsec];
    let body = m.qs.map(quoteHTML).join('');
    if (m.tab) {
      const tb = tableBlock(m.tab);
      const ts = TOC[m.tabsec];
      if (tb) body += tableHTML(tb).replace(` id="t-${m.tab}"`, '');
      body += `<p class="qsrc"><a href="#/s/${m.tabsec}?t=${m.tab}"><span class="plate">${esc(ts.num)}</span><span>Table ${esc(m.tab)} in ${wb(ts.title)}</span></a><a href="#/p/${m.tabp}">${icon('file-text')}<span>Official manual, p. ${m.tabp}</span></a></p>`;
    }
    if (m.figs.length) body += `<div class="grid mfigs">${m.figs.filter((f) => C.figs[f]).map(figTile).join('')}</div>`;
    return `<details class="meas" id="m-${m.id}"${isOpen ? ' open' : ''}><summary><span class="plate">${esc(first.num)}</span><span class="t">${esc(m.t)}</span>${icon('chevron-down')}</summary><div class="mb">${body}</div></details>`;
  }
  function viewMeasure(cat, open, q) {
    setBar({ back: true, title: 'Measurements and limits', actions: shareBtn() });
    const used = F.cats.filter(([k]) => F.measures.some((m) => m.cat === k));
    view.innerHTML = `<div class="fieldpg"><p class="lede">Where the manual gives a way to measure or a limit to compare against. Quoted from the manual; check the official page before you code a condition.</p>
      ${filterBoxHTML('mq', 'Filter topics', q)}
      ${filtersHTML('cat', [['', 'All'], ...used], cat, 'Show topics by discipline')}
      <div id="meas"></div>${fieldEnd()}</div>`;
    const inp = $('#mq');
    const draw = (openId) => {
      const words = inp.value.toLowerCase().split(/\s+/).filter((w) => w.length > 1);
      const list = F.measures.filter((m) => (!cat || m.cat === cat) && words.every((w) => measText(m).includes(w)));
      $('#meas').innerHTML = list.length ? list.map((m) => measHTML(m, m.id === openId || list.length === 1)).join('') : '<div class="empty">No topics match. Try one word, like gear, brake or clearance.</div>';
      replaceRoute('/measure', { cat, q: inp.value.trim(), m: openId });
      hydrate($('#meas'));
    };
    let tm;
    inp.addEventListener('input', () => { $('#mqx').hidden = !inp.value; clearTimeout(tm); tm = setTimeout(() => draw(''), 150); });
    inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') inp.blur(); });
    $('#mqx').addEventListener('click', () => { inp.value = ''; $('#mqx').hidden = true; draw(''); inp.focus(); });
    wireFilters('cat', (c) => { cat = c; $$('.filters[data-f="cat"] button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.v === c))); draw(''); });
    draw(open);
    if (open) { const el = document.getElementById('m-' + open); if (el) requestAnimationFrame(() => el.scrollIntoView({ block: 'start' })); }
  }

  const GROUP_ICON = { Hydraulic: 'droplets', 'Electrical and controls': 'zap', Power: 'zap', 'Traffic and navigation': 'traffic-cone' };
  const compTile = (k) => `<a class="pick" href="#/comp/${k.id}"><span class="im">${k.img ? `<img data-thumb="${esc(k.img)}" alt="">` : icon(GROUP_ICON[k.g] || 'cog')}</span><b>${esc(k.name)}</b></a>`;
  function viewComps(g) {
    setBar({ back: true, title: 'What is this component?', actions: shareBtn() });
    const groups = [...new Set(F.components.map((k) => k.g))];
    view.innerHTML = `<div class="fieldpg"><p class="lede">Pick what you’re looking at. Each one links to its manual sections, element and coding guidance.</p>
      ${filtersHTML('g', [['', 'All'], ...groups.map((x) => [x, x])], g, 'Show components by system')}
      ${(g ? [g] : groups).map((x) => `<h2 class="grp">${esc(x)}</h2><div class="picks">${F.components.filter((k) => k.g === x).map(compTile).join('')}</div>`).join('')}
      ${fieldEnd()}</div>`;
    wireFilters('g', (v) => { replaceRoute('/comp', { g: v }); viewComps(v); });
    hydrate();
  }
  function viewComp(id) {
    const k = COMP[id];
    if (!k) return notFound();
    setBar({ back: true, title: k.name, sub: k.g, actions: shareBtn() });
    let h = '<div class="fieldpg">' + (k.img ? figHTML(k.img) : '');
    h += `<h2 class="grp">Read about it</h2><ul class="list">${k.secs.map((s) => secRow(s)).join('')}</ul>`;
    if (k.els.length) h += `<h2 class="grp">${k.els.length > 1 ? 'Elements' : 'Element'}</h2><ul class="list">${k.els.map((n) => elRow(n, 'Condition states and feasible actions')).join('')}</ul>`;
    if (k.coding.length) {
      h += `<h2 class="grp">Coding guidance</h2><ul class="list">${k.coding.filter(([s]) => TOC[s]).map(([s, a, title]) => `<li><a class="row" href="#/s/${s}?a=${encodeURIComponent(a)}"><span class="plate">${esc(TOC[s].num)}</span><span class="t"><b>${CODING_BAR}${esc(title)}</b><small>${esc(TOC[s].title)}</small></span>${icon('chevron-right', 'go')}</a></li>`).join('')}</ul>`;
    }
    const more = k.figs.filter((f) => f !== k.img && C.figs[f]);
    if (more.length) h += `<h2 class="grp">More figures</h2><div class="grid">${more.map(figTile).join('')}</div>`;
    view.innerHTML = h + fieldEnd() + '</div>';
    hydrate();
  }

  function viewWorkflow() {
    setBar({ back: true, title: 'Inspection workflow', actions: shareBtn() });
    let h = '<div class="fieldpg"><p class="lede">The usual order of a movable bridge inspection, linked to the manual. It’s an orientation, not a checklist; the manual governs.</p><ol class="wf">';
    for (const w of F.workflow) {
      const crit = w.link && w.link[0] === '#/critical';
      h += `<li${crit ? ' class="crit"' : ''}><h2>${esc(w.t)}</h2>`;
      if (w.d) h += `<p>${esc(w.d)}</p>`;
      if (w.q) h += w.q.map(quoteHTML).join('');
      if (w.types) h += `<p class="chips-l">By bridge type</p><div class="chips">${F.types.map((t) => `<a class="chip tx" href="#/type/${t.id}"><span>${esc(t.name)}</span></a>`).join('')}</div>`;
      h += `<p class="chips-l">In the manual</p><div class="chips">${w.secs.map(secChip).join('')}</div>`;
      if (w.link) h += `<div class="btns"><a class="btn ghost small" href="${w.link[0]}">${esc(w.link[1])}${icon('chevron-right')}</a></div>`;
      h += '</li>';
    }
    view.innerHTML = h + '</ol>' + fieldEnd() + '</div>';
  }

  // ------------------------------------------------------------------ report a problem
  const REASONS = ['Text doesn’t match the official page', 'A figure or table is wrong or missing', 'Search didn’t find what I needed', 'The app isn’t working', 'Suggestion'];
  function reportContext() {
    const [path, qs] = (location.hash.slice(1) || '/').split('?');
    const parts = path.split('/').filter(Boolean).map(decodeURIComponent);
    const ttl = $('#bar .ttl');
    let where = ttl && ttl.firstChild ? ttl.firstChild.textContent : 'Home';
    let page = '';
    if (parts[0] === 's' && TOC[parts[1]]) {
      const t = TOC[parts[1]];
      const p = t.level === 1 ? chapterPages(t) : t.pages;
      where = fullLabel(t);
      page = p[0] === p[1] ? String(p[0]) : `${p[0]}–${p[1]}`;
    } else if (parts[0] === 'el' && EL[parts[1]]) {
      where = `Element ${parts[1]} ${EL[parts[1]].name}`;
      page = String(EL[parts[1]].pageB);
    } else if (parts[0] === 'f' && C.figs[parts[1]]) {
      where = `Figure ${parts[1]}: ${C.figs[parts[1]].cap}`;
      page = String(C.figs[parts[1]].page);
    } else if (parts[0] === 'p') {
      where = 'Official manual page view';
      page = parts[1] || '';
    } else if (!parts[0] || parts[0] === 'search') {
      const q = new URLSearchParams(qs || '').get('q');
      where = q ? `Search for “${q}”` : 'Home';
    }
    return { where, page, url: location.href };
  }
  function deviceText() {
    const ua = navigator.userAgent;
    const ipad = /iPad/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    let d = ipad ? 'iPad' : /iPhone/.test(ua) ? 'iPhone' : /Android/.test(ua) ? 'Android' : /Windows/.test(ua) ? 'Windows' : /Mac OS X/.test(ua) ? 'Mac' : /Linux/.test(ua) ? 'Linux' : 'Other device';
    const ios = ua.match(/ OS (\d+)_(\d+)/);
    if (ios && (ipad || /iPhone/.test(d))) d += ` (iOS ${ios[1]}.${ios[2]})`;
    const an = ua.match(/Android (\d+(?:\.\d+)?)/);
    if (an) d += ' ' + an[1];
    const br = /EdgiOS|Edg\//.test(ua) ? 'Edge' : /CriOS|Chrome\//.test(ua) ? 'Chrome' : /FxiOS|Firefox\//.test(ua) ? 'Firefox' : /Safari\//.test(ua) ? 'Safari' : 'browser';
    return `${d}, ${isStandalone() ? 'home screen app' : br}, screen ${screen.width}×${screen.height}`;
  }
  async function copyText(t) {
    try { await navigator.clipboard.writeText(t); return true; } catch (e) { /* use the fallback */ }
    try {
      const ta = document.createElement('textarea');
      ta.value = t;
      ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
      ($('dialog[open]') || document.body).append(ta);
      ta.select();
      const ok = document.execCommand('copy');
      ta.remove();
      return ok;
    } catch (e) { return false; }
  }
  function openReport() {
    const ctx = reportContext();
    let dlg = $('#report');
    if (!dlg) {
      dlg = document.createElement('dialog');
      dlg.id = 'report';
      dlg.setAttribute('aria-labelledby', 'rp-h');
      dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
      document.body.append(dlg);
    }
    const email = typeof CFG.reportEmail === 'string' && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(CFG.reportEmail.trim()) ? CFG.reportEmail.trim() : '';
    const canShare = typeof navigator.share === 'function';
    dlg.innerHTML = `<form method="dialog" class="sheet">
      <div class="sheet-h"><h2 id="rp-h">Report a problem</h2><button class="ib" value="close" aria-label="Close">${icon('x')}</button></div>
      <fieldset><legend>What’s wrong?</legend>${REASONS.map((r, i) => `<label class="opt"><input type="radio" name="why" value="${i}"${i === 0 ? ' checked' : ''}><span>${esc(r)}</span></label>`).join('')}</fieldset>
      <label class="fld"><span>Details</span><textarea id="rp-d" rows="3" placeholder="For example: Figure 3-21 won’t load, or this paragraph doesn’t match page 128."></textarea></label>
      <div class="incl"><b>Sent with your report</b><pre id="rp-ctx"></pre></div>
      <div class="btns">${email ? `<button class="btn" type="button" data-rp="mail">${icon('mail')}Email report</button>` : ''}${canShare ? `<button class="btn${email ? ' ghost' : ''}" type="button" data-rp="share">${icon('share')}Share report</button>` : ''}<button class="btn${email || canShare ? ' ghost' : ''}" type="button" data-rp="copy">${icon('copy')}Copy report</button></div>
      ${email ? '' : '<p class="note">Send it by email or text message to the person who looks after this app for your team.</p>'}
    </form>`;
    const pre = $('#rp-ctx', dlg);
    const lines = [`Where: ${ctx.where}`, ctx.page ? `Official manual ${ctx.page.includes('–') ? 'pages' : 'page'}: ${ctx.page}` : '', `Link: ${ctx.url}`, `App version: ${APP_VERSION}`,
      `Manual edition: ${C.meta.edition}${C.meta.revision ? ', ' + C.meta.revision : ''}`, `Device: ${deviceText()}`].filter(Boolean);
    pre.textContent = lines.join('\n');
    offlineState().then((st) => { if (st.supported && dlg.open) pre.textContent = lines.concat(`Saved for offline use: ${st.have === st.total ? 'yes' : st.have ? 'partly' : 'no'}`).join('\n'); });
    const reason = () => REASONS[+((($('input[name="why"]:checked', dlg)) || {}).value || 0)];
    const text = () => `MBI Manual app: problem report\nProblem: ${reason()}\nDetails: ${$('#rp-d', dlg).value.trim() || '(none given)'}\n\n${pre.textContent}\nSent: ${new Date().toISOString().slice(0, 10)}`;
    $('.btns', dlg).addEventListener('click', async (e) => {
      const b = e.target.closest('[data-rp]');
      if (!b) return;
      const t = text();
      if (b.dataset.rp === 'mail') {
        location.href = `mailto:${email}?subject=${encodeURIComponent('MBI Manual app: ' + reason())}&body=${encodeURIComponent(t)}`;
        dlg.close();
      } else if (b.dataset.rp === 'share') {
        try { await navigator.share({ title: 'MBI Manual problem report', text: t }); dlg.close(); toast('Report shared. Thank you.'); } catch (err) { if (!err || err.name !== 'AbortError') toast('Sharing didn’t work. Use Copy report instead.'); }
      } else if (await copyText(t)) {
        dlg.close();
        toast('Report copied. Paste it into an email or text message.');
      } else toast('Copy didn’t work. Select the text above and copy it.');
    });
    if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
  }

  // ------------------------------------------------------------------ offline download
  let dl = { active: false, done: 0, cur: 0, total: 0, error: null };
  function offlineAssets() {
    const out = Object.entries(C.packs).map(([p, b]) => ({ url: 'data/' + p, bytes: b }));
    out.push({ url: 'data/manual.pdf', bytes: C.meta.pdf_bytes });
    for (const [u, b] of Object.entries(C.meta.lib_bytes)) out.push({ url: u, bytes: b });
    return out;
  }
  async function offlineState() {
    if (!('caches' in window)) return { supported: false };
    try {
      const cache = await caches.open(DATA_CACHE);
      const list = offlineAssets();
      let have = 0;
      for (const a of list) if (await cache.match(a.url)) have += 1;
      return { supported: true, have, total: list.length, bytes: list.reduce((s, a) => s + a.bytes, 0) };
    } catch (e) {
      return { supported: false };
    }
  }
  const statusEls = new Set();
  // the home screen strip: field ready, or what to do before going to a site
  function readyStripHTML(st) {
    const prev = store.get('offline', null);
    const iosBrowser = isIOS() && !isStandalone();
    if (dl.active) {
      const pct = dl.total ? Math.min(100, ((dl.done + dl.cur) / dl.total) * 100) : 0;
      return `<div class="ready busy"><div class="ready-h"><span class="rp">${icon('download')}Saving for offline use</span><span id="dl-txt">${mb(dl.done + dl.cur)} of ${mb(dl.total)}. Keep the app open until it finishes.</span></div><div class="bar-prog"><i id="dl-bar" style="width:${pct}%"></i></div></div>`;
    }
    if (!st.supported) return `<div class="ready warn"><div class="ready-h"><span class="rp">${icon('circle-alert')}Online only</span><span>This browser can't save the manual. Open the app in Safari or Chrome.</span></div></div>`;
    if (st.have === st.total) {
      return `<div class="ready ok"><div class="ready-h"><span class="rp">${icon('circle-check')}Field ready</span><span>${iosBrowser ? 'Saved in Safari on this device. Text, figures and official pages work offline.' : 'Text, figures and official pages are saved on this device.'}</span></div></div>`;
    }
    const newEd = prev && prev.edition && prev.edition !== C.meta.edition_code;
    const what = newEd ? 'The app has a new edition of the manual. Download it again before you inspect.'
      : iosBrowser ? 'Add the manual to your home screen, then download it there before you inspect.'
        : st.have ? 'Part of the manual is saved. Finish the download before you inspect.' : 'Download figures and official pages before you inspect.';
    return `<div class="ready warn"><div class="ready-h"><span class="rp">${icon('circle-alert')}${newEd ? 'Update the offline copy' : 'Text only offline'}</span><span>${what}</span></div>${dl.error ? `<p class="err">${esc(dl.error)}</p>` : ''}<button class="btn small${iosBrowser ? ' ghost' : ''}" type="button" data-dl>${icon('download')}${iosBrowser ? 'Download in Safari' : 'Download for offline use'} (${mb(st.bytes)})</button></div>`;
  }
  async function renderOfflineInto(el, mode) {
    if (!el) return;
    el.dataset.mode = mode || '';
    statusEls.add(el);
    const st = await offlineState();
    if (mode === 'strip') {
      el.innerHTML = readyStripHTML(st);
      const b = el.querySelector('[data-dl]');
      if (b) b.addEventListener('click', downloadAll);
      return;
    }
    const detailed = mode === 'detailed';
    const prev = store.get('offline', null);
    const iosBrowser = isIOS() && !isStandalone();
    let h;
    if (dl.active) {
      const pct = dl.total ? Math.min(100, ((dl.done + dl.cur) / dl.total) * 100) : 0;
      h = `<div class="status">${icon('download')}<div style="flex:1"><b>Saving the manual on this device</b><p id="dl-txt">${mb(dl.done + dl.cur)} of ${mb(dl.total)}. Keep the app open until it finishes.</p><div class="bar-prog"><i id="dl-bar" style="width:${pct}%"></i></div></div></div>`;
    } else if (!st.supported) {
      h = `<div class="status">${icon('info')}<div><b>Offline saving isn't available here</b><p>Open the app from its secure web address (https) in Safari or Chrome to save it on this device.</p></div></div>`;
    } else if (st.have === st.total && iosBrowser) {
      h = `<div class="status ok">${icon('circle-check')}<div><b>Saved in Safari on this device</b><p>For the app icon, add the manual to your home screen and download it again from there.</p></div></div>`;
    } else if (st.have === st.total) {
      h = `<div class="status ok">${icon('circle-check')}<div><b>Field ready: saved on this device</b><p>Search, sections, figures and official pages work without a connection. ${esc(C.meta.edition)} edition.</p></div></div>`;
    } else if (iosBrowser) {
      h = `<div class="status">${icon('cloud-off')}<div><b>Not saved on this device yet</b><p>Text and search already work offline. Add the manual to your home screen first, then download it from the app; a download made in Safari doesn't carry over. About ${mb(st.bytes)}.${dl.error ? ' ' + esc(dl.error) : ''}</p><button class="btn ghost small" type="button" data-dl>${icon('download')}Download in Safari anyway</button></div></div>`;
    } else {
      const newEdition = prev && prev.edition && prev.edition !== C.meta.edition_code;
      h = `<div class="status">${icon('cloud-off')}<div><b>${newEdition ? 'A new edition is available' : st.have ? 'Partly saved on this device' : 'Not saved on this device yet'}</b><p>${newEdition ? 'Download it to keep using the manual offline.' : 'Text and search already work offline. Download the figures and official pages before you head to a bridge site.'} About ${mb(st.bytes)}; use Wi-Fi if you can.${dl.error ? ' ' + esc(dl.error) : ''}</p><button class="btn" type="button" data-dl>${icon('download')}Download for offline use</button></div></div>`;
    }
    if (detailed && st.supported && !dl.active) {
      let extra = '';
      try {
        if (navigator.storage && navigator.storage.estimate) {
          const est = await navigator.storage.estimate();
          extra += `<dt>Storage used</dt><dd>${mb(est.usage || 0)}</dd>`;
        }
        if (navigator.storage && navigator.storage.persisted) {
          const p = await navigator.storage.persisted();
          extra += `<dt>Kept by the phone</dt><dd>${p ? 'Yes, protected from automatic cleanup' : 'Not guaranteed. Add the app to your home screen so the phone keeps the download.'}</dd>`;
        }
      } catch (e) { /* not supported */ }
      if (extra) h += `<dl class="kvs" style="margin-top:12px">${extra}</dl>`;
      if (st.have) h += `<div class="btns"><button class="btn ghost small" type="button" data-rm>${icon('trash-2')}Remove offline copy</button></div>`;
    }
    el.innerHTML = h;
    const b = el.querySelector('[data-dl]');
    if (b) b.addEventListener('click', downloadAll);
    const r = el.querySelector('[data-rm]');
    if (r) r.addEventListener('click', async () => { await caches.delete(DATA_CACHE); packs.clear(); toast('Offline copy removed'); refreshOfflineUI(); });
  }
  function refreshOfflineUI() {
    for (const el of [...statusEls]) {
      if (!el.isConnected) { statusEls.delete(el); continue; }
      renderOfflineInto(el, el.dataset.mode);
    }
  }

  // ------------------------------------------------------------------ notices from config.json (edited on GitHub, no rebuild needed)
  async function loadConfig() {
    try {
      const ctl = new AbortController();
      const tm = setTimeout(() => ctl.abort(), 6000);
      const r = await fetch('config.json', { cache: 'no-store', signal: ctl.signal });
      clearTimeout(tm);
      if (r.ok) { const j = await r.json(); if (j && typeof j === 'object') CFG = j; }
    } catch (e) { /* offline and not cached yet */ }
    renderNoticeInto($('#home-notice'));
  }
  function renderNoticeInto(el) {
    if (!el) return;
    let h = '';
    const latest = typeof CFG.latestEdition === 'string' ? CFG.latestEdition.trim() : '';
    if (/^\d{4}-\d{2}$/.test(latest) && latest > C.meta.edition_code) {
      h += `<div class="notice">${icon('triangle-alert')}<div><b>A newer manual revision is available</b><p>This app shows the ${esc(C.meta.edition)} edition. Update before your next inspection, and use the official manual until the app is updated.</p><button class="btn small" type="button" data-update>${icon('refresh-cw')}Check for app update</button></div></div>`;
    }
    if (typeof CFG.notice === 'string' && CFG.notice.trim()) h += `<div class="notice info">${icon('info')}<div><p>${esc(CFG.notice.trim())}</p></div></div>`;
    el.innerHTML = h;
    const u = el.querySelector('[data-update]');
    if (u) u.addEventListener('click', checkForUpdate);
  }
  async function checkForUpdate() {
    if (!navigator.onLine) { toast('Connect to the internet to check for an update.'); return; }
    toast('Checking for an update…');
    try {
      const reg = 'serviceWorker' in navigator && await navigator.serviceWorker.getRegistration();
      if (reg) {
        await reg.update();
        const w = reg.waiting || reg.installing;
        if (w) {
          toast('Getting the update. The app reloads when it is ready.');
          if (w.state === 'installed') w.postMessage('skipWaiting');
          else w.addEventListener('statechange', () => { if (w.state === 'installed') w.postMessage('skipWaiting'); });
          return;
        }
      }
    } catch (e) { /* fall through */ }
    toast('This is the newest version of the app. Use the official manual until the app is updated.');
  }
  function refreshProgress() {
    const pct = dl.total ? Math.min(100, ((dl.done + dl.cur) / dl.total) * 100) : 0;
    $$('#dl-bar').forEach((b) => { b.style.width = pct + '%'; });
    $$('#dl-txt').forEach((t) => { t.textContent = `${mb(dl.done + dl.cur)} of ${mb(dl.total)}. Keep the app open until it finishes.`; });
  }
  async function readWithProgress(resp, cb) {
    if (!resp.body || !resp.body.getReader) return resp.blob();
    const reader = resp.body.getReader();
    const chunks = [];
    let n = 0;
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      n += value.length;
      cb(n);
    }
    return new Blob(chunks);
  }
  async function downloadAll() {
    if (dl.active) return;
    const list = offlineAssets();
    dl = { active: true, done: 0, cur: 0, total: list.reduce((s, a) => s + a.bytes, 0), error: null };
    refreshOfflineUI();
    try {
      const cache = await caches.open(DATA_CACHE);
      for (const a of list) {
        if (await cache.match(a.url)) { dl.done += a.bytes; refreshProgress(); continue; }
        const resp = await fetch(a.url + '?dl=' + Date.now(), { cache: 'no-store' });
        if (!resp.ok) throw new Error(a.url + ' ' + resp.status);
        const type = resp.headers.get('Content-Type') || 'application/octet-stream';
        const blob = await readWithProgress(resp, (n) => { dl.cur = Math.min(n, a.bytes); refreshProgress(); });
        await cache.put(a.url, new Response(blob, { headers: { 'Content-Type': type } }));
        dl.done += a.bytes;
        dl.cur = 0;
        refreshProgress();
      }
      let persisted = false;
      try { if (navigator.storage && navigator.storage.persist) persisted = await navigator.storage.persist(); } catch (e) { /* ignore */ }
      store.set('offline', { edition: C.meta.edition_code, at: Date.now(), persisted });
      dl.active = false;
      refreshOfflineUI();
      toast('Field ready. The manual is saved on this device.');
    } catch (err) {
      dl.active = false;
      dl.error = navigator.onLine ? 'The download stopped. Check the connection and try again.' : 'There is no connection right now. Connect to Wi-Fi or cellular data and try again.';
      refreshOfflineUI();
    }
  }

  // ------------------------------------------------------------------ install
  let installEvt = null;
  window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); installEvt = e; renderInstallInto($('#inst')); renderInstallInto($('#home-install'), true); });
  window.addEventListener('appinstalled', () => { installEvt = null; toast('Installed. Open it from your home screen.'); });
  const isStandalone = () => window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const isIOSSafari = () => isIOS() && !/CriOS|FxiOS|EdgiOS|OPiOS|GSA\/|FBAN|FBAV|Instagram|LinkedInApp/i.test(navigator.userAgent);
  const iosSteps = () => (isIOSSafari()
    ? `<ol class="steps"><li>Tap <b>•••</b> next to the address bar, then <b>Share</b>. On older iOS, tap the Share button ${icon('share', 'inl')} at the bottom of the screen.</li><li>Scroll down, tap <b>Add to Home Screen</b>, then <b>Add</b>.</li><li>Open the manual from the new icon and tap <b>Download for offline use</b> there.</li></ol>`
    : '<p>Open this page in <b>Safari</b>, then add it to your home screen from Safari\'s Share menu.</p>');
  function renderInstallInto(el, compact) {
    if (!el) return;
    if (isStandalone()) { el.innerHTML = compact ? '' : '<p>Installed. Open the manual from its home screen icon.</p>'; return; }
    if (installEvt) {
      el.innerHTML = `${compact ? '' : '<p>Add the manual to your home screen so it opens like an app, full screen and without a connection.</p>'}<div class="btns"><button class="btn${compact ? ' ghost' : ''}" type="button" data-install>${icon('smartphone')}Install the app</button></div>`;
      el.querySelector('[data-install]').addEventListener('click', async () => { installEvt.prompt(); try { await installEvt.userChoice; } catch (e) { /* ignore */ } installEvt = null; renderInstallInto(el, compact); });
      return;
    }
    if (isIOS()) {
      if (compact && store.get('iosHintHidden', false)) { el.innerHTML = ''; return; }
      el.innerHTML = compact
        ? `<div class="install-card"><div class="ic-h">${icon('smartphone')}<b>Add the manual to your home screen</b></div><p>On iPhone and iPad, add it to your home screen first. That puts the app icon on your phone and keeps the offline download saved.</p>${iosSteps()}<div class="btns"><button class="btn ghost small" type="button" data-hide-ios>Hide this</button></div></div>`
        : `${iosSteps()}<p class="note">A download made in Safari doesn't carry over to the home screen app, so download from the app itself.</p>`;
      const hide = el.querySelector('[data-hide-ios]');
      if (hide) hide.addEventListener('click', () => { store.set('iosHintHidden', true); el.innerHTML = ''; toast('Hidden. The steps are in Settings under Add to home screen.'); });
      return;
    }
    if (compact) { el.innerHTML = ''; return; }
    el.innerHTML = '<ol class="steps"><li>Open this page in Chrome.</li><li>Tap the menu (three dots).</li><li>Tap <b>Install app</b> or <b>Add to Home screen</b>.</li></ol><p class="note">Then open the manual from the new home screen icon and download it for offline use.</p>';
  }

  // ------------------------------------------------------------------ settings
  function viewSettings() {
    setBar({ back: true, title: 'Settings' });
    const fs = store.get('fs', 17);
    const th = store.get('theme', 'auto');
    const sizes = [[15, 'Small'], [17, 'Medium'], [19, 'Large'], [21, 'Extra large']];
    const themes = [['auto', 'Automatic'], ['light', 'Light'], ['dark', 'Dark'], ['sun', 'Bright sun']];
    const notes = (C.meta.notes || []).map((n) => `<li>${esc(n)}</li>`).join('');
    view.innerHTML = `<div class="set">
      <h2>Offline use</h2><div id="off"></div>
      <h2>Add to home screen</h2><div id="inst"></div>
      <h2>Text size</h2><div class="seg" role="group" aria-label="Text size">${sizes.map(([v, l]) => `<button type="button" data-fs="${v}" aria-pressed="${v === fs}">${l}</button>`).join('')}</div>
      <h2>Display</h2><div class="seg" role="group" aria-label="Display">${themes.map(([v, l]) => `<button type="button" data-th="${v}" aria-pressed="${v === th}">${l}</button>`).join('')}</div>
      <p class="note">Bright sun uses black text and heavier type for reading outdoors. Dark is easier on the eyes in machinery rooms and at night.</p>
      <h2>About this app</h2>
      <p>A prototype field reference built from the ${esc(C.meta.publisher)} <i>${esc(C.meta.title)}</i>, ${esc(C.meta.section)}, ${esc(C.meta.edition)} edition (${C.meta.pages} pages).</p>
      <p>It is not an official LADOTD publication. Where this app and the official manual differ, the official manual governs. Every section links to its official manual pages so the exact wording is one tap away.</p>
      <dl class="kvs"><dt>Manual edition</dt><dd>${esc(C.meta.edition)}</dd><dt>Manual revision</dt><dd>${C.meta.revision ? esc(C.meta.revision) : 'None listed (the revision table on page 2 is blank)'}</dd><dt>App version</dt><dd>${esc(APP_VERSION)}</dd><dt>Content converted</dt><dd>${esc(C.meta.built)}</dd></dl>
      ${notes ? `<h2>Notes on the source document</h2><ul class="steps">${notes}</ul>` : ''}
      <h2>Report a problem</h2>
      <p>Text that doesn't match the official page, a figure that won't load, or something you couldn't find? Reports include the app version, manual edition and the page you were on.</p>
      <div class="btns"><button class="btn ghost" type="button" data-report>${icon('flag')}Report a problem</button></div>
    </div>`;
    renderOfflineInto($('#off'), 'detailed');
    renderInstallInto($('#inst'));
  }
  function settingsClick(e) {
    const f = e.target.closest('[data-fs]');
    const t = e.target.closest('[data-th]');
    if (!f && !t) return;
    if (f) store.set('fs', +f.dataset.fs);
    if (t) store.set('theme', t.dataset.th);
    applyPrefs();
    const grp = (f || t).parentElement;
    $$('button', grp).forEach((b) => b.setAttribute('aria-pressed', String(b === (f || t))));
  }

  // ------------------------------------------------------------------ overlays: figure and original page viewers
  let pz = null;
  let ovSeq = 0;
  function overlayShell(title, stageHTML, footHTML, navHTML, stageClass = '') {
    let ov = $('#ov');
    if (!ov) {
      ov = document.createElement('div');
      ov.id = 'ov';
      ov.setAttribute('role', 'dialog');
      ov.setAttribute('aria-modal', 'true');
      document.body.append(ov);
    }
    if (pz) { try { pz.destroy(); } catch (e) { /* ignore */ } pz = null; }
    ov.hidden = false;
    document.body.style.overflow = 'hidden';
    ov.setAttribute('aria-label', title);
    ov.innerHTML = `<div class="ov-bar"><button class="ib" id="ov-x" type="button" aria-label="Close">${icon('x')}</button><div class="ttl">${esc(title)}</div>${navHTML || ''}</div><div class="stage ${stageClass}">${stageHTML}</div>${footHTML ? `<div class="ov-foot">${footHTML}</div>` : ''}`;
    $('#ov-x').addEventListener('click', closeOverlayNav);
    $('#ov-x').focus({ preventScroll: true });
    return ov;
  }
  function closeOverlayNav() {
    if (navDepth > 0) history.back();
    else location.hash = '#' + (rendered || '/');
  }
  function closeOverlay() {
    const ov = $('#ov');
    if (!ov || ov.hidden) return;
    if (pz) { try { pz.destroy(); } catch (e) { /* ignore */ } pz = null; }
    ov.hidden = true;
    ov.innerHTML = '';
    document.body.style.overflow = '';
  }
  function setupZoom(el, maxScale) {
    if (!window.Panzoom) return;
    pz = window.Panzoom(el, { maxScale, minScale: 1, panOnlyWhenZoomed: true, cursor: 'grab' });
    el.parentElement.addEventListener('wheel', (e) => { if (pz) pz.zoomWithWheel(e); }, { passive: false });
    let last = 0;
    el.addEventListener('pointerup', (e) => {
      const now = Date.now();
      if (now - last < 300) {
        if (pz.getScale() > 1.05) pz.reset(); else pz.zoomToPoint(2.5, e);
        last = 0;
      } else last = now;
    });
  }
  async function openFigure(id) {
    const f = C.figs[id];
    if (!f) return;
    const seq = ++ovSeq;
    const i = FIGS.indexOf(id);
    const prev = FIGS[i - 1];
    const next = FIGS[i + 1];
    const t = TOC[f.sec];
    const nav = `${bmBtnOv('f', id)}<button class="ib" id="ov-prev" type="button" aria-label="Previous figure"${prev ? '' : ' disabled'}>${icon('chevron-left')}</button><button class="ib" id="ov-next" type="button" aria-label="Next figure"${next ? '' : ' disabled'}>${icon('chevron-right')}</button>`;
    const foot = `<p>${esc(f.cap)}</p><div class="btns"><a class="btn ghost small" href="#/s/${t.id}">${esc(t.num ? t.num + ' ' + t.title : t.title)}</a><a class="btn ghost small" href="#/p/${f.page}" data-replace>${icon('file-text')}Official manual, p. ${f.page}</a><button class="btn ghost small" type="button" data-report aria-label="Report a problem with this figure">${icon('flag')}Report</button></div>`;
    overlayShell(`Figure ${id}`, '<div class="msg">Loading figure…</div>', foot, nav);
    wireOverlayNav(prev && '#/f/' + prev, next && '#/f/' + next);
    try {
      const url = await figURL(id);
      if (seq !== ovSeq) return;
      const stage = $('#ov .stage');
      stage.innerHTML = `<img id="ov-img" src="${url}" alt="${esc(f.cap)}"><span class="zoomhint">Pinch or double-tap to zoom</span>`;
      setupZoom($('#ov-img'), 6);
    } catch (e) {
      if (seq !== ovSeq) return;
      $('#ov .stage').innerHTML = '<div class="msg">This figure isn\'t saved on this device yet. Connect to the internet, or download the manual in Settings before going offline.</div>';
    }
  }
  function bmBtnOv(t, id) {
    const on = isSaved(t, id);
    return `<button class="ib" id="ov-bm" type="button" aria-pressed="${on}" aria-label="${on ? 'Remove bookmark' : 'Bookmark'}">${icon('bookmark')}</button>`;
  }
  function wireOverlayNav(prevHash, nextHash) {
    const p = $('#ov-prev');
    const n = $('#ov-next');
    if (p && prevHash) p.addEventListener('click', () => replaceHash(prevHash));
    if (n && nextHash) n.addEventListener('click', () => replaceHash(nextHash));
    const bm = $('#ov-bm');
    if (bm) {
      const id = location.hash.split('/')[2];
      bm.addEventListener('click', () => toggleSaved('f', decodeURIComponent(id), bm));
    }
    $$('#ov a[data-replace]').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); replaceHash(a.getAttribute('href')); }));
    $$('#ov [data-report]').forEach((b) => b.addEventListener('click', openReport));
    // swipe left/right between items when not zoomed
    const stage = $('#ov .stage');
    let sx = null;
    let sy = null;
    stage.addEventListener('pointerdown', (e) => { sx = e.clientX; sy = e.clientY; });
    stage.addEventListener('pointerup', (e) => {
      if (sx == null || (pz && pz.getScale() > 1.05)) { sx = null; return; }
      const dx = e.clientX - sx;
      const dy = e.clientY - sy;
      sx = null;
      if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        if (dx < 0 && nextHash) replaceHash(nextHash);
        if (dx > 0 && prevHash) replaceHash(prevHash);
      }
    });
  }

  let pdfP = null;
  let pdfProg = null;
  function getPdf() {
    if (!pdfP) {
      pdfP = (async () => {
        const lib = await import('./lib/pdf.min.js');
        lib.GlobalWorkerOptions.workerSrc = new URL('lib/pdf.worker.min.js', document.baseURI).href;
        const resp = await fetch('data/manual.pdf');
        if (!resp.ok) throw new Error('pdf ' + resp.status);
        const total = +resp.headers.get('Content-Length') || C.meta.pdf_bytes;
        const blob = await readWithProgress(resp, (n) => { if (pdfProg) pdfProg(n, total); });
        const data = new Uint8Array(await blob.arrayBuffer());
        return lib.getDocument({ data, isEvalSupported: false }).promise;
      })().catch((e) => { pdfP = null; throw e; });
    }
    return pdfP;
  }
  async function openPage(n) {
    n = Math.min(Math.max(1, n), C.meta.pages);
    const seq = ++ovSeq;
    const sec = sectionForPage(n);
    const nav = `<button class="ib" id="ov-prev" type="button" aria-label="Previous page"${n > 1 ? '' : ' disabled'}>${icon('chevron-left')}</button><button class="ib" id="ov-next" type="button" aria-label="Next page"${n < C.meta.pages ? '' : ' disabled'}>${icon('chevron-right')}</button>`;
    const foot = `<div class="btns">${sec ? `<a class="btn ghost small" href="#/s/${sec.id}">${esc(fullLabel(sec))}</a>` : ''}<button class="btn ghost small" type="button" data-report aria-label="Report a problem with this page">${icon('flag')}Report</button></div>`;
    overlayShell(`Official manual, page ${n} of ${C.meta.pages}`, '<div class="msg" id="pg-msg">Opening the official page…</div>', foot, nav, 'page');
    wireOverlayNav(n > 1 && '#/p/' + (n - 1), n < C.meta.pages && '#/p/' + (n + 1));
    pdfProg = (got, total) => {
      const m = $('#pg-msg');
      if (m && seq === ovSeq) m.innerHTML = `Loading the official manual (${mb(got)} of ${mb(total)})…<div class="bar-prog"><i style="width:${Math.min(100, (got / total) * 100)}%"></i></div>`;
    };
    try {
      const pdf = await getPdf();
      if (seq !== ovSeq) return;
      const page = await pdf.getPage(n);
      if (seq !== ovSeq) return;
      const stage = $('#ov .stage');
      const sw = stage.clientWidth;
      const sh = stage.clientHeight;
      const v1 = page.getViewport({ scale: 1 });
      const fit = Math.min(sw / v1.width, sh / v1.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 3);
      let scale = fit * dpr * 2;
      const maxPx = 9e6;
      if (v1.width * v1.height * scale * scale > maxPx) scale = Math.sqrt(maxPx / (v1.width * v1.height));
      const vp = page.getViewport({ scale });
      const canvas = document.createElement('canvas');
      canvas.width = Math.floor(vp.width);
      canvas.height = Math.floor(vp.height);
      canvas.style.width = Math.floor(v1.width * fit) + 'px';
      canvas.style.height = Math.floor(v1.height * fit) + 'px';
      canvas.setAttribute('aria-label', `Official manual page ${n}`);
      await page.render({ canvasContext: canvas.getContext('2d'), viewport: vp }).promise;
      if (seq !== ovSeq) return;
      stage.classList.remove('page');
      stage.innerHTML = '';
      stage.append(canvas);
      const hint = document.createElement('span');
      hint.className = 'zoomhint';
      hint.textContent = 'Pinch or double-tap to zoom';
      stage.append(hint);
      setupZoom(canvas, 6);
    } catch (e) {
      if (seq !== ovSeq) return;
      const m = $('#pg-msg');
      if (m) m.innerHTML = navigator.onLine ? 'The official page couldn\'t open. Try again in a moment.' : 'The official pages aren\'t saved on this device yet. Download the manual in Settings, or connect to the internet.';
    }
  }

  // ------------------------------------------------------------------ toast
  let toastT = null;
  function toast(msg, action) {
    const el = $('#toast');
    el.innerHTML = `<span>${esc(msg)}</span>${action ? `<button type="button">${esc(action.label)}</button>` : ''}`;
    if (action) el.querySelector('button').addEventListener('click', () => { el.classList.remove('on'); action.fn(); });
    el.classList.add('on');
    clearTimeout(toastT);
    toastT = setTimeout(() => el.classList.remove('on'), action ? 12000 : 3200);
  }

  // ------------------------------------------------------------------ service worker
  function registerSW() {
    if (!('serviceWorker' in navigator)) return;
    const hadController = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.register('sw.js').then((reg) => {
      const waiting = () => toast('An updated version of the app is ready.', { label: 'Reload', fn: () => reg.waiting && reg.waiting.postMessage('skipWaiting') });
      if (reg.waiting && hadController) waiting();
      reg.addEventListener('updatefound', () => {
        const w = reg.installing;
        if (w) w.addEventListener('statechange', () => { if (w.state === 'installed' && navigator.serviceWorker.controller) waiting(); });
      });
    }).catch(() => { /* offline support unavailable */ });
    let reloading = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!hadController || reloading) return;
      reloading = true;
      location.reload();
    });
  }

  // ------------------------------------------------------------------ boot
  function wireGlobal() {
    view.addEventListener('click', (e) => {
      settingsClick(e);
      if (e.target.closest('[data-report]')) { openReport(); return; }
      const f = e.target.closest('[data-open-fig]');
      if (f) { e.preventDefault(); location.hash = '#/f/' + f.dataset.openFig; return; }
      const q = e.target.closest('[data-q]');
      if (q) { const inp = $('#q'); if (inp) { inp.value = q.dataset.q; $('#qx').hidden = false; doSearch(q.dataset.q); } }
    });
    bar.addEventListener('click', (e) => {
      const b = e.target.closest('#b-bm');
      if (b) toggleSaved(b.dataset.t, b.dataset.id, b);
      if (e.target.closest('#b-share')) share();
      if (e.target.closest('#b-back')) goBack();
    });
    document.addEventListener('keydown', (e) => {
      const rp = $('#report');
      if (rp && rp.open) return;            // the report form handles its own keys
      const ov = $('#ov');
      if (e.key === 'Escape' && ov && !ov.hidden) { closeOverlayNav(); return; }
      if (ov && !ov.hidden) {
        if (e.key === 'ArrowLeft') { const p = $('#ov-prev'); if (p && !p.disabled) p.click(); }
        if (e.key === 'ArrowRight') { const n = $('#ov-next'); if (n && !n.disabled) n.click(); }
        return;
      }
      if (e.key === '/' && !/input|textarea|select/i.test(document.activeElement.tagName)) {
        e.preventDefault();
        if (!/^#\/?(search.*)?$/.test(location.hash || '#/')) location.hash = '#/';
        setTimeout(() => { const q = $('#q'); if (q) q.focus(); }, 60);
      }
    });
    window.addEventListener('online', () => { refreshNet(); refreshOfflineUI(); });
    window.addEventListener('offline', refreshNet);
  }

  async function boot() {
    applyPrefs();
    renderTabs();
    registerSW();
    view.innerHTML = '<div class="empty">Opening the manual…</div>';
    try {
      await loadContent();
    } catch (e) {
      setBar({ title: 'MBI Manual' });
      view.innerHTML = '<div class="empty"><b>The manual couldn\'t open.</b>Connect to the internet and reopen the app. After the first visit it opens without a connection.</div>';
      return;
    }
    wireGlobal();
    route();
    buildIndex();
    loadConfig();
  }
  boot();
})();
