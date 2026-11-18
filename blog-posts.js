/* Blog posts ki list. Nayi post aaye to yahan ek entry jod do, baaqi sab auto hota hai. */
const BLOG_POSTS = [
  { url: 'small-office-pc-security-and-backup.html', title: 'Small Office? Protect Your PCs and Your Data', group: 'it', img: 'assets/small-office-pc-security-and-backup.jpg' },
  { url: 'acos-vs-tacos-amazon.html', title: "ACoS vs TACoS: What's the Difference?", group: 'amazon', img: 'assets/acos-vs-tacos-amazon.jpg' },
  { url: 'cctv-dvr-vs-nvr-vs-ip-camera.html', title: 'CCTV: DVR vs NVR vs IP Camera', group: 'it', img: 'assets/cctv-dvr-vs-nvr-vs-ip-camera.jpg' },
  { url: 'is-your-cctv-safe-from-hackers.html', title: 'Is Your CCTV Safe from Hackers?', group: 'it', img: 'assets/is-your-cctv-safe-from-hackers.jpg' },
  { url: 'amazon-ppc-cost-that-feels-blind.html', title: 'Amazon PPC: The Cost That Feels Blind', group: 'amazon', img: 'assets/amazon-ppc-cost-that-feels-blind.jpg' },
  { url: 'why-amazon-products-fail-in-research.html', title: 'Why Some Amazon Products Fail in Research', group: 'amazon', img: 'assets/why-amazon-products-fail-in-research.jpg' },
  { url: 'business-email-google-workspace-vs-microsoft-365-vs-cpanel.html', title: 'Business Email: Google Workspace vs Microsoft 365 vs cPanel', group: 'it', img: 'assets/business-email-google-workspace-vs-microsoft-365-vs-cpanel.jpg' },
  { url: 'amazon-listing-images-requirements.html', title: 'How to Prepare Your Amazon Listing Images', group: 'amazon', img: 'assets/amazon-listing-images-requirements.jpg' },
  { url: 'lan-vs-wifi-office.html', title: 'LAN vs WiFi in the Office: What Should Stay Wired?', group: 'it', img: 'assets/lan-vs-wifi-office.jpg' },
  { url: 'wifi-users-cannot-print.html', title: "Internet Works, But WiFi Users Can't Print", group: 'it', img: 'assets/wifi-users-cannot-print.jpg' },
  { url: 'slow-pc-not-always-internet.html', title: 'Slow PC? Not Always the Internet', group: 'it', img: 'assets/slow-pc-not-always-internet.jpg' },
  { url: 'office-network-security-checklist.html', title: 'What Makes an Office Network Secure? 6 IT Rules', group: 'it', img: 'assets/office-network-security-checklist.jpg' },
  { url: 'amazon-product-research-to-launch.html', title: 'What Makes an Amazon Product Final? 7 Steps', group: 'amazon', img: 'assets/amazon-product-research-to-launch.jpg' },
  { url: 'amazon-supplier-negotiation.html', title: 'Amazon Supplier Negotiation: Talk to 5 to 8 Suppliers', group: 'amazon', img: 'assets/amazon-supplier-negotiation.jpg' },
  { url: 'amazon-ppc-launch-plan.html', title: 'Amazon PPC: Why Every New Launch Needs a Plan', group: 'amazon', img: 'assets/amazon-ppc-launch-plan.jpg' }
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
  }
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
  }
 }
};
/*I18N-END*/

(function () {
  const layout = document.querySelector('.post-layout');
  if (!layout) return;
  const current = location.pathname.split('/').pop() || 'index.html';
  const lang = (document.documentElement.lang || 'en').slice(0, 2);
  const I = BLOG_I18N[lang] || null;
  const pre = I ? '../' : '';
  const me = BLOG_POSTS.find(p => p.url === current);
  if (!me) return;

  // pehle usi topic ki posts, phir baaqi
  const others = BLOG_POSTS.filter(p => p.url !== current);
  const same = others.filter(p => p.group === me.group);
  const rest = others.filter(p => p.group !== me.group);
  const list = same.concat(rest).slice(0, 5);

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
})();
