/* Zabardasti redirect nahi: sirf ek chhota banner jo Urdu, Spanish ya Arabic dekhne ka option deta hai. */
(function () {
  try {
    if (document.documentElement.lang !== 'en') return;
    var KEY = 'danishts_lang_banner_closed';
    try { if (localStorage.getItem(KEY)) return; } catch (e) {}

    var langs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || 'en'];
    var first = String(langs[0] || 'en').toLowerCase();
    var tz = '';
    try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) {}

    var target = null;
    if (first.indexOf('ar') === 0) target = 'ar';
    else if (first.indexOf('ur') === 0 || tz === 'Asia/Karachi') target = 'ur';
    else if (first.indexOf('es') === 0) target = 'es';
    if (!target) return;

    var page = (location.pathname.split('/').pop() || 'index.html');
    if (page.indexOf('.html') === -1) page = 'index.html';
    var text = {
      ur: { msg: 'کیا آپ یہ صفحہ اردو میں دیکھنا چاہتے ہیں؟', btn: 'اردو میں دیکھیں', dir: 'rtl', lang: 'ur' },
      es: { msg: '¿Quieres ver esta página en español?', btn: 'Ver en español', dir: 'ltr', lang: 'es' },
      ar: { msg: 'هل تريد عرض هذه الصفحة باللغة العربية؟', btn: 'العرض بالعربية', dir: 'rtl', lang: 'ar' }
    }[target];

    var bar = document.createElement('div');
    bar.className = 'lang-banner';
    bar.setAttribute('role', 'region');
    bar.setAttribute('aria-label', 'Language');
    bar.setAttribute('lang', text.lang);
    bar.setAttribute('dir', text.dir);
    var span = document.createElement('span'); span.textContent = text.msg;
    var a = document.createElement('a'); a.href = target + '/' + page; a.textContent = text.btn; a.setAttribute('hreflang', target);
    var x = document.createElement('button'); x.type = 'button'; x.setAttribute('aria-label', 'Close'); x.innerHTML = '&times;';
    x.addEventListener('click', function () {
      bar.remove();
      try { localStorage.setItem(KEY, '1'); } catch (e) {}
    });
    bar.appendChild(span); bar.appendChild(a); bar.appendChild(x);
    document.body.appendChild(bar);
  } catch (e) { /* kuch bhi ghalat ho to page ko na chhero */ }
})();
