document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

// mobile menu toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
if (burger && navLinks) {
  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// light 3D tilt on cards
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.card, .highlight-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(600px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-2px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = 'none'; });
  });
}

// contact form (Web3Forms)
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const status = form.querySelector('.form-status');
  const btn = form.querySelector('.btn-send');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    if (fd.get('botcheck')) return; // bot
    fd.set('name', (fd.get('first_name') + ' ' + fd.get('last_name')).trim());
    btn.disabled = true;
    status.className = 'form-status';
    status.textContent = form.dataset.sending;
    try {
      const r = await fetch(form.action, { method: 'POST', headers: { Accept: 'application/json' }, body: fd });
      const j = await r.json();
      if (r.ok && j.success) {
        status.className = 'form-status ok';
        status.textContent = form.dataset.ok;
        form.reset();
      } else { throw new Error(j.message || 'error'); }
    } catch (err) {
      status.className = 'form-status err';
      status.textContent = form.dataset.err;
    }
    btn.disabled = false;
  });
})();

// site search (client-side, no server needed)
(function () {
  var lang = (document.documentElement.lang || 'en').slice(0, 2);
  var L = {
    en: { btn: 'Search', ph: 'Search: Amazon PPC, router, CCTV, AI...', close: 'Close', none: 'Nothing found. Try another word, or ask me directly on WhatsApp.', wa: 'Ask on WhatsApp', hint: 'Popular searches', page: 'Page', amazon: 'Amazon', it: 'IT & Networking',
      chips: [['Amazon PPC', 'ppc'], ['Private Label', 'private label'], ['IT & Networking', 'network'], ['WiFi & Router', 'wifi'], ['CCTV', 'cctv'], ['AI', 'ai']], msg: 'Hi Danish, I searched your website and could not find what I need.' },
    ur: { btn: 'تلاش', ph: 'تلاش کریں: Amazon PPC، راؤٹر، CCTV، AI...', close: 'بند کریں', none: 'کچھ نہیں ملا۔ کوئی اور لفظ لکھ کر دیکھیں، یا مجھ سے سیدھا واٹس ایپ پر پوچھ لیں۔', wa: 'واٹس ایپ پر پوچھیں', hint: 'عام تلاشیں', page: 'صفحہ', amazon: 'ایمازون', it: 'آئی ٹی اور نیٹ ورکنگ',
      chips: [['ایمازون PPC', 'ppc'], ['پرائیویٹ لیبل', 'private label'], ['آئی ٹی اور نیٹ ورکنگ', 'network'], ['وائی فائی اور راؤٹر', 'wifi'], ['CCTV', 'cctv'], ['AI', 'ai']], msg: 'السلام علیکم دانش، میں نے آپ کی ویب سائٹ پر تلاش کی لیکن مجھے جو چاہیے تھا نہیں ملا۔' },
    es: { btn: 'Buscar', ph: 'Buscar: Amazon PPC, router, CCTV, IA...', close: 'Cerrar', none: 'No se encontró nada. Prueba otra palabra o pregúntame directamente por WhatsApp.', wa: 'Preguntar por WhatsApp', hint: 'Búsquedas populares', page: 'Página', amazon: 'Amazon', it: 'IT y redes',
      chips: [['Amazon PPC', 'ppc'], ['Private Label', 'private label'], ['IT y redes', 'network'], ['WiFi y router', 'wifi'], ['CCTV', 'cctv'], ['IA', 'ai']], msg: 'Hola Danish, busqué en tu sitio web y no encontré lo que necesito.' }
  };
  var T = L[lang] || L.en;
  var me = document.querySelector('script[src*="script.js"]');
  var base = me ? me.getAttribute('src').replace(/script\.js.*$/, '') : '';
  // ek lafz ke saath milte julte lafz
  var SYN = {
    ppc: ['ppc', 'acos', 'tacos', 'advertising', 'ads'], ads: ['ads', 'ppc', 'acos', 'advertising'], acos: ['acos', 'ppc', 'tacos'],
    it: ['it', 'network', 'networking', 'router', 'wifi', 'lan', 'cctv', 'backup', 'security', 'pc'],
    network: ['network', 'networking', 'router', 'wifi', 'lan', 'wan'], wifi: ['wifi', 'wi-fi', 'router', 'wireless'], router: ['router', 'wifi', 'wan', 'lan'],
    internet: ['internet', 'wifi', 'router', 'wan'], camera: ['camera', 'cctv', 'dvr', 'nvr'], cctv: ['cctv', 'camera', 'dvr', 'nvr'],
    pl: ['private label'], fba: ['fba', 'private label', 'amazon'], seller: ['seller', 'amazon'], product: ['product', 'research'],
    ai: ['ai', 'chatgpt', 'claude', 'gemini', 'automation'], chatgpt: ['chatgpt', 'ai'], va: ['virtual assistant', 'va'], phone: ['phone', 'mobile'], mobile: ['mobile', 'phone'],
    email: ['email', 'mail', 'google workspace', 'microsoft 365'], computer: ['pc', 'computer', 'laptop'],
    '\u0631\u0627\u0624\u0679\u0631': ['router', '\u0631\u0627\u0624\u0679\u0631', '\u0631\u0648\u0679\u0631'], '\u0631\u0648\u0679\u0631': ['router', '\u0631\u0627\u0624\u0679\u0631', '\u0631\u0648\u0679\u0631'],
    '\u0648\u0627\u0626\u06CC \u0641\u0627\u0626\u06CC': ['wifi'], '\u0648\u0627\u0626\u06CC': ['wifi', '\u0648\u0627\u0626\u06CC'], '\u0641\u0627\u0626\u06CC': ['wifi'], '\u0646\u06CC\u0679': ['network', '\u0646\u06CC\u0679 \u0648\u0631\u06A9'], '\u0627\u0646\u0679\u0631\u0646\u06CC\u0679': ['internet', '\u0627\u0646\u0679\u0631\u0646\u06CC\u0679'], '\u06A9\u06CC\u0645\u0631\u0627': ['camera', 'cctv', '\u06A9\u06CC\u0645\u0631\u0627', '\u06A9\u06CC\u0645\u0631\u06D2'], '\u067E\u0631\u0646\u0679\u0631': ['printer', '\u067E\u0631\u0646\u0679\u0631'],
    'c\u00e1mara': ['camera', 'cctv'], impresora: ['print', 'printer', 'impres'], red: ['network', 'redes'], redes: ['network', 'redes'], pc: ['pc', 'computer'], printer: ['print', 'printer', 'printing'], print: ['print', 'printer']
  };
  var UR = { '\u0631\u0627\u0624\u0679\u0631': 'router', '\u0631\u0648\u0679\u0631': 'router', '\u0648\u0627\u0626\u06CC': 'wifi', '\u0641\u0627\u0626\u06CC': 'wifi', '\u0646\u06CC\u0679': 'network', '\u0627\u0646\u0679\u0631\u0646\u06CC\u0679': 'internet', '\u06A9\u06CC\u0645\u0631\u0627': 'camera', '\u067E\u0631\u0646\u0679\u0631': 'printer', '\u0627\u06CC\u0645\u0627\u0632\u0648\u0646': 'amazon', '\u0646\u06CC\u0679\u0648\u0631\u06A9': 'network' };
  var data = null, loading = false, box, input, list, hint;
  function norm(s) { return (s || '').toLowerCase().replace(/[ً-ٰٟ]/g, ''); }
  function hay(e, w) {
    if (w.length < 3) return new RegExp('(^|[^a-z0-9])' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '([^a-z0-9]|$)').test(e.h);
    return e.h.indexOf(w) !== -1;
  }
  function search(q) {
    var toks = norm(q).split(/[\s,]+/).filter(Boolean).slice(0, 6);
    if (!toks.length) return [];
    var pool = data.filter(function (e) { return lang === 'en' ? e.u.indexOf('/') === -1 : e.u.indexOf(lang + '/') === 0; });
    var res = [];
    pool.forEach(function (e) {
      var score = 0, ok = true, tl = norm(e.t);
      toks.forEach(function (t) {
        var alts = UR[t] ? (SYN[UR[t]] || [UR[t]]).concat([t]) : (SYN[t] || [t]);
        var hit = false;
        alts.forEach(function (a, i) { if (hay(e, a)) { hit = true; score += (i === 0 ? 3 : 1) + (tl.indexOf(a) !== -1 ? 4 : 0); } });
        if (!hit) ok = false;
      });
      if (ok) res.push([score + (e.g !== 'page' ? 0.5 : 0) - (/(^|\/)(index|about)\.html$/.test(e.u) ? 12 : 0), e]);
    });
    res.sort(function (a, b) { return b[0] - a[0]; });
    return res.slice(0, 8).map(function (r) { return r[1]; });
  }
  function el(tag, cls, txt) { var n = document.createElement(tag); if (cls) n.className = cls; if (txt) n.textContent = txt; return n; }
  function render() {
    var q = input.value.trim();
    list.textContent = '';
    hint.style.display = q ? 'none' : '';
    if (!q || !data) return;
    var r = search(q);
    if (!r.length) {
      var p = el('p', 'ds-none', T.none); list.appendChild(p);
      var a = el('a', 'ds-wa', T.wa); a.href = 'https://wa.me/923213434423?text=' + encodeURIComponent(T.msg); a.target = '_blank'; a.rel = 'noopener'; list.appendChild(a);
      return;
    }
    r.forEach(function (e) {
      var a = el('a', 'ds-item'); a.href = base + e.u;
      var tag = el('span', 'ds-tag', e.g === 'amazon' ? T.amazon : e.g === 'it' ? T.it : T.page);
      a.appendChild(tag); a.appendChild(el('strong', '', e.t)); a.appendChild(el('span', 'ds-desc', e.d.length > 110 ? e.d.slice(0, 107) + '...' : e.d));
      list.appendChild(a);
    });
  }
  function load(cb) {
    if (window.DTS_SEARCH) { data = window.DTS_SEARCH; return cb(); }
    if (loading) return; loading = true;
    var s = document.createElement('script'); s.src = base + 'search-index.js?v=20261127';
    s.onload = function () { data = window.DTS_SEARCH; cb(); }; document.head.appendChild(s);
  }
  function build() {
    box = el('div', 'ds-overlay'); box.hidden = true; box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true'); box.setAttribute('aria-label', T.btn);
    var panel = el('div', 'ds-panel');
    var row = el('div', 'ds-row');
    input = el('input', 'ds-input'); input.type = 'search'; input.placeholder = T.ph; input.setAttribute('aria-label', T.btn); input.autocomplete = 'off'; input.enterKeyHint = 'search';
    var close = el('button', 'ds-close', '×'); close.type = 'button'; close.setAttribute('aria-label', T.close);
    row.appendChild(input); row.appendChild(close);
    hint = el('div', 'ds-hint'); hint.appendChild(el('span', 'ds-hint-t', T.hint));
    T.chips.forEach(function (c) { var b = el('button', 'ds-chip', c[0]); b.type = 'button'; b.addEventListener('click', function () { input.value = c[1]; render(); input.focus(); }); hint.appendChild(b); });
    list = el('div', 'ds-list');
    panel.appendChild(row); panel.appendChild(hint); panel.appendChild(list); box.appendChild(panel); document.body.appendChild(box);
    input.addEventListener('input', render);
    close.addEventListener('click', hide);
    box.addEventListener('click', function (e) { if (e.target === box) hide(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !box.hidden) hide(); });
  }
  function show() {
    if (!box) build();
    box.hidden = false; document.body.classList.add('ds-open');
    load(render); setTimeout(function () { input.focus(); }, 30);
  }
  function hide() { box.hidden = true; document.body.classList.remove('ds-open'); }
  var ico = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>';
  var nav = document.querySelector('header nav');
  if (nav) {
    var ul = document.getElementById('navLinks');
    if (ul) {
      var li = document.createElement('li'); li.className = 'nav-search-li';
      var b1 = el('button', 'nav-search'); b1.type = 'button'; b1.setAttribute('aria-label', T.btn); b1.title = T.btn; b1.innerHTML = ico;
      b1.addEventListener('click', show); li.appendChild(b1);
      ul.insertBefore(li, ul.firstChild);
    }
    var burger = document.getElementById('burger');
    var b2 = el('button', 'nav-search nav-search-m'); b2.type = 'button'; b2.setAttribute('aria-label', T.btn); b2.innerHTML = ico;
    b2.addEventListener('click', show);
    nav.insertBefore(b2, burger || null);
  }
})();
