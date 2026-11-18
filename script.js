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
