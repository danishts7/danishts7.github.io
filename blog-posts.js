/* Blog posts ki list. Nayi post aaye to yahan ek entry jod do, baaqi sab auto hota hai. */
const BLOG_POSTS = [
  { url: 'lan-vs-wifi-office.html', title: 'LAN vs WiFi in the Office: What Should Stay Wired?', group: 'it', img: 'assets/lan-vs-wifi-office.jpg' },
  { url: 'wifi-users-cannot-print.html', title: "Internet Works, But WiFi Users Can't Print", group: 'it', img: 'assets/wifi-users-cannot-print.jpg' },
  { url: 'office-network-security-checklist.html', title: 'What Makes an Office Network Secure? 6 IT Rules', group: 'it', img: 'assets/office-network-security-checklist.jpg' },
  { url: 'amazon-product-research-to-launch.html', title: 'What Makes an Amazon Product Final? 7 Steps', group: 'amazon', img: 'assets/amazon-product-research-to-launch.jpg' },
  { url: 'amazon-supplier-negotiation.html', title: 'Amazon Supplier Negotiation: Talk to 5 to 8 Suppliers', group: 'amazon', img: 'assets/amazon-supplier-negotiation.jpg' },
  { url: 'amazon-ppc-launch-plan.html', title: 'Amazon PPC: Why Every New Launch Needs a Plan', group: 'amazon', img: 'assets/amazon-ppc-launch-plan.jpg' }
];

(function () {
  const layout = document.querySelector('.post-layout');
  if (!layout) return;
  const current = location.pathname.split('/').pop() || 'index.html';
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
  aside.setAttribute('aria-label', 'More blog posts');
  aside.innerHTML = '<h3>More from the blog</h3>' + list.map(p =>
    '<a class="side-card" href="' + p.url + '">' +
    '<img src="' + p.img + '" alt="" loading="lazy">' +
    '<span>' + p.title + '</span></a>'
  ).join('') + '<a class="side-all" href="blog.html">All posts &rarr;</a>';

  layout.classList.add('has-side');
  layout.appendChild(main);
  layout.appendChild(aside);

  // sidebar aa gaya to neeche ki purani "Related posts" list chhupa do
  const related = main.querySelector('.related');
  if (related) related.style.display = 'none';
})();
