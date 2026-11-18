/* Blog posts ki list. Nayi post aaye to yahan sab se UPAR ek entry jod do (date aur group ke saath), baaqi sab auto hota hai:
   - post page ka sidebar, blog page ka filter, home page ke blog cards.
   group: 'it' ya 'amazon'. Visitor ki pasand sirf us ke apne browser mein yaad rehti hai (localStorage). */
const BLOG_POSTS = [
  { url: 'small-office-pc-security-and-backup.html', date: '2026-11-18', group: 'it', title: "Small Office? Protect Your PCs and Your Data", img: 'assets/small-office-pc-security-and-backup.jpg' },
  { url: 'acos-vs-tacos-amazon.html', date: '2026-11-18', group: 'amazon', title: "ACoS vs TACoS: What's the Difference?", img: 'assets/acos-vs-tacos-amazon.jpg' },
  { url: 'is-your-cctv-safe-from-hackers.html', date: '2026-11-17', group: 'it', title: "Is Your CCTV Safe from Hackers?", img: 'assets/is-your-cctv-safe-from-hackers.jpg' },
  { url: 'cctv-dvr-vs-nvr-vs-ip-camera.html', date: '2026-11-17', group: 'it', title: "CCTV: DVR vs NVR vs IP Camera", img: 'assets/cctv-dvr-vs-nvr-vs-ip-camera.jpg' },
  { url: 'amazon-ppc-cost-that-feels-blind.html', date: '2026-11-17', group: 'amazon', title: "Amazon PPC: The Cost That Feels Blind", img: 'assets/amazon-ppc-cost-that-feels-blind.jpg' },
  { url: 'business-email-google-workspace-vs-microsoft-365-vs-cpanel.html', date: '2026-11-16', group: 'it', title: "Business Email: Google Workspace vs Microsoft 365 vs cPanel", img: 'assets/business-email-google-workspace-vs-microsoft-365-vs-cpanel.jpg' },
  { url: 'amazon-listing-images-requirements.html', date: '2026-11-16', group: 'amazon', title: "How to Prepare Your Amazon Listing Images", img: 'assets/amazon-listing-images-requirements.jpg' },
  { url: 'why-amazon-products-fail-in-research.html', date: '2026-11-16', group: 'amazon', title: "Why Some Amazon Products Fail in Research", img: 'assets/why-amazon-products-fail-in-research.jpg' },
  { url: 'slow-pc-not-always-internet.html', date: '2026-11-13', group: 'it', title: "Slow PC? Not Always the Internet", img: 'assets/slow-pc-not-always-internet.jpg' },
  { url: 'office-network-security-checklist.html', date: '2026-11-13', group: 'it', title: "What Makes an Office Network Secure? 6 IT Rules", img: 'assets/office-network-security-checklist.jpg' },
  { url: 'wifi-users-cannot-print.html', date: '2026-11-13', group: 'it', title: "Internet Works, But WiFi Users Can't Print", img: 'assets/wifi-users-cannot-print.jpg' },
  { url: 'lan-vs-wifi-office.html', date: '2026-11-13', group: 'it', title: "LAN vs WiFi in the Office: What Should Stay Wired?", img: 'assets/lan-vs-wifi-office.jpg' },
  { url: 'amazon-product-research-to-launch.html', date: '2026-11-13', group: 'amazon', title: "What Makes an Amazon Product Final? 7 Steps", img: 'assets/amazon-product-research-to-launch.jpg' },
  { url: 'amazon-supplier-negotiation.html', date: '2026-11-13', group: 'amazon', title: "Amazon Supplier Negotiation: Talk to 5 to 8 Suppliers", img: 'assets/amazon-supplier-negotiation.jpg' },
  { url: 'amazon-ppc-launch-plan.html', date: '2026-11-13', group: 'amazon', title: "Amazon PPC: Why Every New Launch Needs a Plan", img: 'assets/amazon-ppc-launch-plan.jpg' }
];

/*I18N-START*/
const BLOG_I18N = {
 "es": {
  "titles": {
   "lan-vs-wifi-office.html": "LAN vs WiFi en la oficina: ¿qué debe ir por cable?",
   "wifi-users-cannot-print.html": "Hay internet, pero los usuarios de WiFi no pueden imprimir",
   "office-network-security-checklist.html": "¿Qué hace segura una red de oficina? 6 reglas de IT",
   "slow-pc-not-always-internet.html": "¿PC lenta? No siempre es el internet",
   "business-email-google-workspace-vs-microsoft-365-vs-cpanel.html": "Correo empresarial: Google Workspace vs Microsoft 365 vs cPanel",
   "amazon-product-research-to-launch.html": "¿Qué hace que un producto de Amazon sea el definitivo? 7 pasos",
   "amazon-supplier-negotiation.html": "Negociación con proveedores de Amazon: habla con 5 a 8 proveedores",
   "amazon-ppc-launch-plan.html": "Amazon PPC: por qué todo lanzamiento nuevo necesita un plan",
   "why-amazon-products-fail-in-research.html": "Por qué algunos productos de Amazon fallan en la investigación",
   "amazon-listing-images-requirements.html": "Cómo preparar las imágenes de tu listado de Amazon",
   "cctv-dvr-vs-nvr-vs-ip-camera.html": "CCTV: DVR vs NVR vs cámara IP",
   "is-your-cctv-safe-from-hackers.html": "¿Tu CCTV está a salvo de hackers?",
   "amazon-ppc-cost-that-feels-blind.html": "Amazon PPC: el costo que se siente a ciegas",
   "small-office-pc-security-and-backup.html": "¿Oficina pequeña? Protege tus PC y tus datos",
   "acos-vs-tacos-amazon.html": "ACoS vs TACoS: ¿cuál es la diferencia?"
  },
  "more": "Más del blog",
  "all": "Todas las publicaciones →",
  "aria": "Más publicaciones del blog",
  "tags": {
   "it": "IT y redes",
   "amazon": "Amazon Private Label"
  },
  "filterLabel": "Filtrar por tema",
  "filterAll": "Todos",
  "filterIt": "IT y redes",
  "filterAmazon": "Amazon Private Label"
 },
 "ur": {
  "titles": {
   "lan-vs-wifi-office.html": "دفتر میں LAN بمقابلہ WiFi: کیا کیبل پر رہنا چاہیے؟",
   "wifi-users-cannot-print.html": "انٹرنیٹ چلتا ہے، مگر WiFi والے پرنٹ نہیں کر پاتے",
   "office-network-security-checklist.html": "دفتری نیٹ ورک کو محفوظ کیا بناتا ہے؟ 6 آئی ٹی اصول",
   "slow-pc-not-always-internet.html": "پی سی سست ہے؟ ہمیشہ انٹرنیٹ قصوروار نہیں ہوتا",
   "business-email-google-workspace-vs-microsoft-365-vs-cpanel.html": "بزنس ای میل: Google Workspace بمقابلہ Microsoft 365 بمقابلہ cPanel",
   "amazon-product-research-to-launch.html": "ایمازون پروڈکٹ فائنل کب ہوتی ہے؟ 7 مراحل",
   "amazon-supplier-negotiation.html": "ایمازون سپلائر سے بات چیت: 5 سے 8 سپلائرز سے بات کریں",
   "amazon-ppc-launch-plan.html": "ایمازون PPC: ہر نئی لانچ کو پلان کی ضرورت کیوں ہے",
   "why-amazon-products-fail-in-research.html": "ایمازون کی کچھ پروڈکٹس ریسرچ میں کیوں ناکام ہوتی ہیں",
   "amazon-listing-images-requirements.html": "اپنی ایمازون لسٹنگ کی تصاویر کیسے تیار کریں",
   "cctv-dvr-vs-nvr-vs-ip-camera.html": "CCTV: DVR بمقابلہ NVR بمقابلہ IP کیمرہ",
   "is-your-cctv-safe-from-hackers.html": "کیا آپ کا CCTV ہیکرز سے محفوظ ہے؟",
   "amazon-ppc-cost-that-feels-blind.html": "ایمازون PPC: وہ خرچ جو اندھا لگتا ہے",
   "small-office-pc-security-and-backup.html": "چھوٹا دفتر ہے؟ اپنے پی سی اور ڈیٹا کی حفاظت کریں",
   "acos-vs-tacos-amazon.html": "ACoS بمقابلہ TACoS: فرق کیا ہے؟"
  },
  "more": "بلاگ سے مزید",
  "all": "تمام پوسٹس ←",
  "aria": "مزید بلاگ پوسٹس",
  "tags": {
   "it": "آئی ٹی اور نیٹ ورکنگ",
   "amazon": "ایمازون پرائیویٹ لیبل"
  },
  "filterLabel": "موضوع کے مطابق چھانٹیں",
  "filterAll": "سب",
  "filterIt": "آئی ٹی اور نیٹ ورکنگ",
  "filterAmazon": "ایمازون پرائیویٹ لیبل"
 }
};
/*I18N-END*/

(function () {
  const lang = (document.documentElement.lang || 'en').slice(0, 2);
  const I = (typeof BLOG_I18N !== 'undefined' && BLOG_I18N[lang]) || null;
  const KEY = 'dts_topic_views';

  // visitor ne kaun sa topic zyada dekha (sirf us ke apne browser mein)
  function readViews() {
    try {
      const v = JSON.parse(localStorage.getItem(KEY) || '{}');
      return { it: +v.it || 0, amazon: +v.amazon || 0 };
    } catch (e) { return { it: 0, amazon: 0 }; }
  }
  function addView(g) {
    try {
      const v = readViews();
      v[g] = (v[g] || 0) + 1;
      localStorage.setItem(KEY, JSON.stringify(v));
    } catch (e) { /* private mode: koi masla nahi */ }
  }
  function favorite() {
    const v = readViews();
    if (v.it > v.amazon) return 'it';
    if (v.amazon > v.it) return 'amazon';
    return null;
  }
  // nayi post pehle (date barabar ho to list ka order)
  const newestFirst = (a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0);

  // ---------- 1) post page: sidebar
  const layout = document.querySelector('.post-layout');
  if (layout) {
    const current = location.pathname.split('/').pop() || 'index.html';
    const me = BLOG_POSTS.find(p => p.url === current);
    if (me) {
      addView(me.group);
      const fav = favorite() || me.group;
      const others = BLOG_POSTS.filter(p => p.url !== current).sort(newestFirst);
      const list = others.filter(p => p.group === fav).concat(others.filter(p => p.group !== fav)).slice(0, 5);
      const pre = I ? '../' : '';

      const main = document.createElement('div');
      main.className = 'post-main';
      while (layout.firstChild) main.appendChild(layout.firstChild);

      const aside = document.createElement('aside');
      aside.className = 'post-side';
      aside.setAttribute('aria-label', I ? I.aria : 'More blog posts');
      const label = I ? I.tags : { it: 'IT & Networking', amazon: 'Amazon Private Label' };
      aside.innerHTML = '<h3>' + (I ? I.more : 'More from the blog') + '</h3>' + list.map(p =>
        '<a class="side-card" href="' + p.url + '">' +
        '<img src="' + pre + p.img + '" alt="" loading="lazy" width="132" height="74">' +
        '<span><span class="sc-title">' + (I ? I.titles[p.url] : p.title) + '</span>' +
        '<span class="sc-tag">' + (label[p.group] || 'Blog') + '</span></span></a>'
      ).join('') + '<a class="side-all" href="blog.html">' + (I ? I.all : 'All posts &rarr;') + '</a>';

      layout.classList.add('has-side');
      layout.appendChild(main);
      layout.appendChild(aside);

      // sidebar aa gaya to neeche ki purani "Related posts" list chhupa do
      const related = main.querySelector('.related');
      if (related) related.style.display = 'none';
    }
  }

  // ---------- 2) blog page: topic filter (default: sab mix, nayi post upar)
  const grid = document.getElementById('blogGrid');
  if (grid) {
    const cards = Array.prototype.slice.call(grid.querySelectorAll('.post-card'));
    const bar = document.createElement('div');
    bar.className = 'blog-filter';
    bar.setAttribute('role', 'group');
    bar.setAttribute('aria-label', I ? I.filterLabel : 'Filter by topic');
    const opts = [['all', I ? I.filterAll : 'All'], ['it', I ? I.filterIt : 'IT & Networking'], ['amazon', I ? I.filterAmazon : 'Amazon Private Label']];
    bar.innerHTML = opts.map(o => '<button type="button" class="chip" data-f="' + o[0] + '" aria-pressed="false">' + o[1] + '</button>').join('');
    grid.parentNode.insertBefore(bar, grid);
    const show = f => {
      cards.forEach(c => { c.hidden = f !== 'all' && c.getAttribute('data-group') !== f; });
      Array.prototype.forEach.call(bar.querySelectorAll('.chip'), b => {
        const on = b.getAttribute('data-f') === f;
        b.classList.toggle('on', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
    };
    bar.addEventListener('click', e => {
      const b = e.target.closest('.chip');
      if (!b) return;
      const f = b.getAttribute('data-f');
      show(f);
      if (f !== 'all') addView(f);
      try { history.replaceState(null, '', f === 'all' ? location.pathname + location.search : '#' + f); } catch (err) { /* ignore */ }
    });
    const h = (location.hash || '').slice(1);
    show(h === 'it' || h === 'amazon' ? h : 'all');
  }

  // ---------- 3) home page: visitor ka pasandida topic (warna sab se nayi 3 posts)
  const hg = document.getElementById('homeBlogGrid');
  if (hg) {
    const fav = favorite();
    if (fav) {
      let n = 0;
      Array.prototype.forEach.call(hg.querySelectorAll('.post-card'), c => {
        const ok = c.getAttribute('data-group') === fav && n < 3;
        if (ok) n++;
        c.hidden = !ok;
      });
    }
  }
})();
