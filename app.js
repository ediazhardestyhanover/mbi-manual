/* MBI Manual – offline field reference for the LADOTD Movable Bridge Inspection Manual (prototype). */
(() => {
  'use strict';
  const APP_VERSION = '1.0.0';
  const ICON = {"search": "<circle cx=\"11\" cy=\"11\" r=\"8\" /> <path d=\"m21 21-4.3-4.3\" />", "book-open": "<path d=\"M12 7v14\" /> <path d=\"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z\" />", "tag": "<path d=\"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z\" /> <circle cx=\"7.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\" />", "image": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\" /> <circle cx=\"9\" cy=\"9\" r=\"2\" /> <path d=\"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21\" />", "bookmark": "<path d=\"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z\" />", "settings": "<path d=\"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z\" /> <circle cx=\"12\" cy=\"12\" r=\"3\" />", "download": "<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\" /> <polyline points=\"7 10 12 15 17 10\" /> <line x1=\"12\" x2=\"12\" y1=\"15\" y2=\"3\" />", "circle-check": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"m9 12 2 2 4-4\" />", "wifi-off": "<path d=\"M12 20h.01\" /> <path d=\"M8.5 16.429a5 5 0 0 1 7 0\" /> <path d=\"M5 12.859a10 10 0 0 1 5.17-2.69\" /> <path d=\"M19 12.859a10 10 0 0 0-2.007-1.523\" /> <path d=\"M2 8.82a15 15 0 0 1 4.177-2.643\" /> <path d=\"M22 8.82a15 15 0 0 0-11.288-3.764\" /> <path d=\"m2 2 20 20\" />", "chevron-left": "<path d=\"m15 18-6-6 6-6\" />", "chevron-right": "<path d=\"m9 18 6-6-6-6\" />", "chevron-up": "<path d=\"m18 15-6-6-6 6\" />", "chevron-down": "<path d=\"m6 9 6 6 6-6\" />", "x": "<path d=\"M18 6 6 18\" /> <path d=\"m6 6 12 12\" />", "share-2": "<circle cx=\"18\" cy=\"5\" r=\"3\" /> <circle cx=\"6\" cy=\"12\" r=\"3\" /> <circle cx=\"18\" cy=\"19\" r=\"3\" /> <line x1=\"8.59\" x2=\"15.42\" y1=\"13.51\" y2=\"17.49\" /> <line x1=\"15.41\" x2=\"8.59\" y1=\"6.51\" y2=\"10.49\" />", "file-text": "<path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\" /> <path d=\"M14 2v4a2 2 0 0 0 2 2h4\" /> <path d=\"M10 9H8\" /> <path d=\"M16 13H8\" /> <path d=\"M16 17H8\" />", "triangle-alert": "<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\" /> <path d=\"M12 9v4\" /> <path d=\"M12 17h.01\" />", "zoom-in": "<circle cx=\"11\" cy=\"11\" r=\"8\" /> <line x1=\"21\" x2=\"16.65\" y1=\"21\" y2=\"16.65\" /> <line x1=\"11\" x2=\"11\" y1=\"8\" y2=\"14\" /> <line x1=\"8\" x2=\"14\" y1=\"11\" y2=\"11\" />", "zoom-out": "<circle cx=\"11\" cy=\"11\" r=\"8\" /> <line x1=\"21\" x2=\"16.65\" y1=\"21\" y2=\"16.65\" /> <line x1=\"8\" x2=\"14\" y1=\"11\" y2=\"11\" />", "trash-2": "<path d=\"M3 6h18\" /> <path d=\"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6\" /> <path d=\"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2\" /> <line x1=\"10\" x2=\"10\" y1=\"11\" y2=\"17\" /> <line x1=\"14\" x2=\"14\" y1=\"11\" y2=\"17\" />", "refresh-cw": "<path d=\"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8\" /> <path d=\"M21 3v5h-5\" /> <path d=\"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16\" /> <path d=\"M8 16H3v5\" />", "smartphone": "<rect width=\"14\" height=\"20\" x=\"5\" y=\"2\" rx=\"2\" ry=\"2\" /> <path d=\"M12 18h.01\" />", "info": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"M12 16v-4\" /> <path d=\"M12 8h.01\" />", "list": "<path d=\"M3 12h.01\" /> <path d=\"M3 18h.01\" /> <path d=\"M3 6h.01\" /> <path d=\"M8 12h13\" /> <path d=\"M8 18h13\" /> <path d=\"M8 6h13\" />", "arrow-left": "<path d=\"m12 19-7-7 7-7\" /> <path d=\"M19 12H5\" />", "house": "<path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\" /> <path d=\"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\" />", "cloud-off": "<path d=\"m2 2 20 20\" /> <path d=\"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193\" /> <path d=\"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07\" />", "maximize-2": "<polyline points=\"15 3 21 3 21 9\" /> <polyline points=\"9 21 3 21 3 15\" /> <line x1=\"21\" x2=\"14\" y1=\"3\" y2=\"10\" /> <line x1=\"3\" x2=\"10\" y1=\"21\" y2=\"14\" />", "copy": "<rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\" /> <path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\" />", "external-link": "<path d=\"M15 3h6v6\" /> <path d=\"M10 14 21 3\" /> <path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\" />", "layers": "<path d=\"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z\" /> <path d=\"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65\" /> <path d=\"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65\" />"};
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

  let C = null;
  const TOC = {};
  const ORDER = [];
  const EL = {};
  const BYNUM = {};
  let FIGS = [];
  let ms = null;
  let indexReady = null;
  let DATA_CACHE = '';

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
  let io = null;
  function hydrate(root = view) {
    if (!('IntersectionObserver' in window)) { $$('img[data-fig]', root).forEach(loadImg); return; }
    if (!io) {
      io = new IntersectionObserver((ents) => {
        for (const en of ents) if (en.isIntersecting) { io.unobserve(en.target); loadImg(en.target); }
      }, { rootMargin: '900px 0px' });
    }
    $$('img[data-fig]', root).forEach((img) => io.observe(img));
  }
  async function loadImg(img) {
    try {
      img.src = await figURL(img.dataset.fig);
    } catch (e) {
      const ph = document.createElement('div');
      ph.className = 'ph';
      ph.innerHTML = icon('cloud-off') + '<span>Figure not saved on this device yet. Download the manual in Settings to see figures offline.</span>';
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
    else if (!params.get('h') && !params.get('t')) window.scrollTo(0, 0);
  }

  function renderView(parts, params) {
    hideFind();
    const p0 = parts[0] || '';
    switch (p0) {
      case '':
      case 'search': setTab('#/'); return viewHome(params.get('q') || '');
      case 'toc': setTab('#/toc'); return viewToc();
      case 's': setTab(/^app-/.test(parts[1] || '') ? '#/el' : '#/toc'); return viewSection(parts[1] || '', params);
      case 'el': setTab('#/el'); return parts[1] ? viewElement(parts[1]) : viewElements();
      case 'figs': setTab('#/figs'); return viewFigures(params.get('ch') || '');
      case 'saved': setTab('#/saved'); return viewSaved();
      case 'settings': setTab(''); return viewSettings();
      default: setTab('#/'); return viewHome('');
    }
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
      <div class="home-h"><h1>Movable Bridge Inspection Manual</h1><p>Field reference built from the LADOTD manual, February 2026 edition</p></div>
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
    renderOfflineInto($('#home-status'), false);
    if (q) doSearch(q);
  }

  function homeRest() {
    const chapters = C.toc.filter((t) => t.level === 1 && isChapter(t));
    const recent = store.get('recent', []).slice(0, 5).map(itemRow).join('');
    return `
      <p class="hint">Search words, section numbers, element numbers, figure numbers or acronyms. Try
        <button type="button" data-q="trunnion">trunnion</button>, <button type="button" data-q="3.16.4">3.16.4</button>,
        <button type="button" data-q="882">882</button>, <button type="button" data-q="backlash">backlash</button> or
        <button type="button" data-q="ATS">ATS</button>.</p>
      <div id="home-status"></div>
      <div id="home-install"></div>
      ${recent ? `<h2 class="grp">Recently viewed</h2><ul class="list">${recent}</ul>` : ''}
      <h2 class="grp">Chapters</h2>
      <ul class="list">${chapters.map((t) => `<li><a class="row" href="#/s/${t.id}"><span class="plate">${esc(plateText(t))}</span><span class="t"><b>${esc(t.title)}</b><small>${pagesText(chapterPages(t))}</small></span>${icon('chevron-right', 'go')}</a></li>`).join('')}
        <li><a class="row" href="#/s/app-a"><span class="plate">App A</span><span class="t"><b>Agency Defined Elements</b><small>Page 258</small></span>${icon('chevron-right', 'go')}</a></li>
        <li><a class="row" href="#/s/app-b"><span class="plate">App B</span><span class="t"><b>Movable Bridge Element Guide</b><small>Pages 260–273</small></span>${icon('chevron-right', 'go')}</a></li>
        <li><a class="row" href="#/s/foreword"><span class="plate o">Fwd</span><span class="t"><b>Foreword</b><small>Page 3</small></span>${icon('chevron-right', 'go')}</a></li>
      </ul>
      <p class="foot-note">Prototype. Not an official LADOTD publication. The official manual governs; every section links to its original pages so you can check the exact wording.</p>`;
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
    if (!q) { res.innerHTML = ''; rest.hidden = false; return; }
    rest.hidden = true;
    const seq = ++searchSeq;
    const answers = instantAnswers(q);
    let h = answers.length ? `<div class="answers">${answers.join('')}</div>` : '';
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
    let loose = false;
    if (!hits.length) { hits = ms.search(q, { combineWith: 'OR' }); loose = hits.length > 0; }
    if (seq !== searchSeq) return;
    if (!hits.length && !answers.length) {
      res.innerHTML = `<div class="empty"><b>No matches for “${esc(q)}”.</b>Check the spelling, try a shorter word, or browse Contents.</div>`;
      return;
    }
    const shown = hits.slice(0, 60);
    h += hits.length ? `<p class="res-n">${hits.length > 60 ? `Top 60 of ${hits.length}` : hits.length} result${hits.length === 1 ? '' : 's'}${loose ? ' containing some of your words' : ''}</p>` : '';
    h += shown.map((r) => resultHTML(r)).join('');
    res.innerHTML = h;
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
      out.push(answerLink('#/p/' + m[1], 'p ' + m[1], 'Original page ' + m[1], sec ? fullLabel(sec) : '', true));
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
    h += `<div class="orig"><a class="btn ghost" href="#/p/${pages[0]}">${icon('file-text')}${pages[0] === pages[1] ? 'Original page ' + pages[0] : `Original pages ${pages[0]}–${pages[1]}`}</a></div>`;
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
    h += '</article>';
    view.innerHTML = h;
    hydrate();
    addRecent('s', id);
    const hl = params.get('h');
    if (hl) highlight(hl);
    const tab = params.get('t');
    if (tab && !hl) { const el = document.getElementById('t-' + tab); if (el) requestAnimationFrame(() => el.scrollIntoView({ block: 'start' })); }
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
      h += `<div class="orig" style="margin-top:18px"><a class="btn ghost" href="#/p/${e.pageB}">${icon('file-text')}Original page ${e.pageB}</a><a class="btn ghost" href="#/p/${e.pageA}">${icon('file-text')}Appendix A, page ${e.pageA}</a></div>`;
    }
    return h + '</section>';
  }
  function viewElements() {
    setBar({ title: 'Elements', sub: 'Agency Defined Elements 840–892' });
    view.innerHTML = `<p class="hint" style="margin:2px 0 6px">Condition states and feasible actions from Appendix B.</p><ul class="list">${C.elements.map((e) => `<li><a class="row" href="#/el/${e.no}"><span class="plate">${e.no}</span><span class="t"><b>${wb(e.name)}</b></span>${icon('chevron-right', 'go')}</a></li>`).join('')}</ul>`;
  }
  function viewElement(no) {
    const e = EL[no];
    if (!e) return notFound();
    setBar({ back: true, title: `${e.no} ${e.name}`, actions: bmBtn('e', no) + shareBtn() });
    view.innerHTML = elementCardHTML(e, false);
    addRecent('e', no);
  }

  // ------------------------------------------------------------------ figures grid
  function viewFigures(ch) {
    const list = FIGS.filter((id) => !ch || id.split('-')[0] === ch);
    setBar({ title: 'Figures', sub: `${FIGS.length} photos and drawings` });
    const chs = ['', ...new Set(FIGS.map((id) => id.split('-')[0]))];
    view.innerHTML = `<div class="filters" role="group" aria-label="Filter figures by chapter">${chs.map((c) => `<button type="button" data-ch="${c}" aria-pressed="${c === ch}">${c ? 'Chapter ' + c : 'All'}</button>`).join('')}</div>
      <div class="grid">${list.map((id) => `<a class="tile" href="#/f/${id}"><div class="im"><img data-fig="${id}" alt=""></div><b>Figure ${id}</b><span>${esc(C.figs[id].cap)}</span></a>`).join('')}</div>`;
    $('.filters').addEventListener('click', (e) => {
      const b = e.target.closest('[data-ch]');
      if (!b) return;
      const c = b.dataset.ch;
      const key = c ? '/figs?ch=' + c : '/figs';
      history.replaceState(null, '', '#' + key);
      rendered = key;
      viewFigures(c);
    });
    hydrate();
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
  async function renderOfflineInto(el, detailed) {
    if (!el) return;
    el.dataset.detailed = detailed ? '1' : '';
    statusEls.add(el);
    const st = await offlineState();
    const prev = store.get('offline', null);
    let h;
    if (dl.active) {
      const pct = dl.total ? Math.min(100, ((dl.done + dl.cur) / dl.total) * 100) : 0;
      h = `<div class="status">${icon('download')}<div style="flex:1"><b>Saving the manual on this device</b><p id="dl-txt">${mb(dl.done + dl.cur)} of ${mb(dl.total)}. Keep the app open until it finishes.</p><div class="bar-prog"><i id="dl-bar" style="width:${pct}%"></i></div></div></div>`;
    } else if (!st.supported) {
      h = `<div class="status">${icon('info')}<div><b>Offline saving isn't available here</b><p>Open the app from its secure web address (https) in Safari or Chrome to save it on this device.</p></div></div>`;
    } else if (st.have === st.total) {
      h = `<div class="status ok">${icon('circle-check')}<div><b>Saved on this device</b><p>Search, sections, figures and original pages work without a connection. ${esc(C.meta.edition)} edition.</p></div></div>`;
    } else {
      const newEdition = prev && prev.edition && prev.edition !== C.meta.edition_code;
      h = `<div class="status">${icon('cloud-off')}<div><b>${newEdition ? 'A new edition is available' : st.have ? 'Partly saved on this device' : 'Not saved on this device yet'}</b><p>${newEdition ? 'Download it to keep using the manual offline.' : 'Text and search already work offline. Download the figures and original pages before you head to a bridge site.'} About ${mb(st.bytes)}; use Wi-Fi if you can.${dl.error ? ' ' + esc(dl.error) : ''}</p><button class="btn" type="button" data-dl>${icon('download')}Download for offline use</button></div></div>`;
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
      renderOfflineInto(el, el.dataset.detailed === '1');
    }
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
      toast('Manual saved on this device. It now works offline.');
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
  function renderInstallInto(el, compact) {
    if (!el) return;
    if (isStandalone()) { el.innerHTML = compact ? '' : '<p>Installed. Open the manual from its home screen icon.</p>'; return; }
    if (installEvt) {
      el.innerHTML = `${compact ? '' : '<p>Add the manual to your home screen so it opens like an app, full screen and without a connection.</p>'}<div class="btns"><button class="btn${compact ? ' ghost' : ''}" type="button" data-install>${icon('smartphone')}Install the app</button></div>`;
      el.querySelector('[data-install]').addEventListener('click', async () => { installEvt.prompt(); try { await installEvt.userChoice; } catch (e) { /* ignore */ } installEvt = null; renderInstallInto(el, compact); });
      return;
    }
    if (compact) { el.innerHTML = ''; return; }
    el.innerHTML = isIOS()
      ? '<ol class="steps"><li>Open this page in Safari.</li><li>Tap the Share button.</li><li>Tap <b>Add to Home Screen</b>, then <b>Add</b>.</li></ol><p class="note">Then open the manual from the new home screen icon and download it for offline use.</p>'
      : '<ol class="steps"><li>Open this page in Chrome.</li><li>Tap the menu (three dots).</li><li>Tap <b>Install app</b> or <b>Add to Home screen</b>.</li></ol><p class="note">Then open the manual from the new home screen icon and download it for offline use.</p>';
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
      <p>It is not an official LADOTD publication. Where this app and the official manual differ, the official manual governs. Every section links to its original pages so the exact wording is one tap away.</p>
      <dl class="kvs"><dt>Manual edition</dt><dd>${esc(C.meta.edition)}</dd><dt>App version</dt><dd>${esc(APP_VERSION)}</dd><dt>Content converted</dt><dd>${esc(C.meta.built)}</dd></dl>
      ${notes ? `<h2>Notes on the source document</h2><ul class="steps">${notes}</ul>` : ''}
    </div>`;
    renderOfflineInto($('#off'), true);
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
    const foot = `<p>${esc(f.cap)}</p><div class="btns"><a class="btn ghost small" href="#/s/${t.id}">${esc(t.num ? t.num + ' ' + t.title : t.title)}</a><a class="btn ghost small" href="#/p/${f.page}" data-replace>${icon('file-text')}Original page ${f.page}</a></div>`;
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
    const foot = sec ? `<div class="btns"><a class="btn ghost small" href="#/s/${sec.id}">${esc(fullLabel(sec))}</a></div>` : '';
    overlayShell(`Original page ${n} of ${C.meta.pages}`, '<div class="msg" id="pg-msg">Opening the original page…</div>', foot, nav, 'page');
    wireOverlayNav(n > 1 && '#/p/' + (n - 1), n < C.meta.pages && '#/p/' + (n + 1));
    pdfProg = (got, total) => {
      const m = $('#pg-msg');
      if (m && seq === ovSeq) m.innerHTML = `Loading the original manual (${mb(got)} of ${mb(total)})…<div class="bar-prog"><i style="width:${Math.min(100, (got / total) * 100)}%"></i></div>`;
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
      canvas.setAttribute('aria-label', `Original manual page ${n}`);
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
      if (m) m.innerHTML = navigator.onLine ? 'The original page couldn\'t open. Try again in a moment.' : 'The original pages aren\'t saved on this device yet. Download the manual in Settings, or connect to the internet.';
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
  }
  boot();
})();
