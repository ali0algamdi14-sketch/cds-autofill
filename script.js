(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  let savedLang = 'ar';
  try { savedLang = sessionStorage.getItem('cds_site_lang') === 'en' ? 'en' : 'ar'; } catch (_) {}
  const state = {lang: savedLang};
  const locale = () => state.lang === 'ar' ? 'ar-SA' : 'en-US';

  function setLanguage(language) {
    state.lang = language === 'en' ? 'en' : 'ar';
    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
    $$('[data-ar][data-en]').forEach(el => {
      const value = el.getAttribute('data-' + state.lang);
      if (el.matches('h1,h2')) el.innerHTML = value.replace(/<\/?(?:br|em)>/gi, tag => tag);
      else el.textContent = value;
    });
    $$('[data-ar-placeholder][data-en-placeholder]').forEach(el => {
      el.placeholder = el.getAttribute('data-' + state.lang + '-placeholder');
    });
    const toggle = $('#languageToggle');
    if (toggle) toggle.innerHTML = state.lang === 'ar' ? 'EN <span aria-hidden="true">↗</span>' : 'عربي <span aria-hidden="true">↗</span>';
    document.title = state.lang === 'ar' ? 'CDS AutoFill — إدخال الوصفات بوضوح وسرعة' : 'CDS AutoFill — Prescription entry, simplified';
    try { sessionStorage.setItem('cds_site_lang', state.lang); } catch (_) { /* private browsing fallback */ }
    updateDemo();
  }

  function updateDemo() {
    const a = $('#demoRow1'), b = $('#demoRow2');
    if (!a || !b) return;
    const count = Number(a.checked) + Number(b.checked);
    $$('.demo-med-row').forEach(row => row.classList.toggle('selected', $('input', row).checked));
    const total = count * 30;
    $('#demoQuantity').innerHTML = total + ' <span>capsules</span>';
    $('#demoDuration').textContent = String(total / 2);
    const status = $('#demoDurationStatus');
    status.classList.toggle('ok', count === 2);
    if (count === 0) {
      status.textContent = state.lang === 'ar' ? 'حدد سطرًا حاليًا واحدًا على الأقل' : 'Choose at least one current row';
    } else if (count === 1) {
      status.textContent = state.lang === 'ar' ? 'اختلاف عن المدة المكتوبة: 30 يومًا' : 'Differs from written 30 days';
    } else {
      status.textContent = state.lang === 'ar' ? 'التغطية متوافقة مع المدة المكتوبة' : 'Matches the written duration';
    }
  }
  $('#demoRow1')?.addEventListener('change', updateDemo);
  $('#demoRow2')?.addEventListener('change', updateDemo);
  $('#demoSelectAll')?.addEventListener('click', () => { $('#demoRow1').checked = true; $('#demoRow2').checked = true; updateDemo(); });
  $('#demoLastOnly')?.addEventListener('click', () => { $('#demoRow1').checked = false; $('#demoRow2').checked = true; updateDemo(); });

  const nav = $('#mobileNav'), menuToggle = $('#mobileMenuToggle');
  menuToggle?.addEventListener('click', () => {
    const opening = nav.hidden;
    nav.hidden = !opening;
    menuToggle.setAttribute('aria-expanded', String(opening));
  });
  $$('#mobileNav a').forEach(a => a.addEventListener('click', () => {
    nav.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
  $('#languageToggle')?.addEventListener('click', () => setLanguage(state.lang === 'ar' ? 'en' : 'ar'));
  if ($('#year')) $('#year').textContent = String(new Date().getFullYear());

  const linkedin = 'https://sa.linkedin.com/in/ali-al-ghamdi-3a68271b6';
  const roles = {pharmacist:'Pharmacist',manager:'Pharmacy manager',operations:'Operations / IT',other:'Other'};
  const pilotForm = $('#pilotForm');
  pilotForm?.addEventListener('submit', event => {
    event.preventDefault();
    const fd = new FormData(pilotForm);
    const name = String(fd.get('name') || '').trim();
    const org = String(fd.get('organization') || '').trim();
    const role = String(fd.get('role') || '');
    const devices = String(fd.get('devices') || '1');
    const notes = String(fd.get('notes') || '').trim();
    if (!name || !org || !role) {
      const bad = !name ? $('[name=name]', pilotForm) : !org ? $('[name=organization]', pilotForm) : $('[name=role]', pilotForm);
      bad.focus();
      bad.reportValidity?.();
      return;
    }
    const msg = state.lang === 'ar' ? [
      'مرحبًا، أود طلب تجربة CDS AutoFill.',
      'الاسم: ' + name,
      'المنشأة: ' + org,
      'الصفة: ' + (roles[role] || role),
      'الأجهزة المتوقعة: ' + devices,
      notes ? 'ملاحظات: ' + notes : '',
      'أرغب بمعرفة شروط الوصول التجريبي وخطوات التفعيل.'
    ].filter(Boolean).join('\n') : [
      'Hello, I would like to request a CDS AutoFill pilot.',
      'Name: ' + name,
      'Organization: ' + org,
      'Role: ' + (roles[role] || role),
      'Expected devices: ' + devices,
      notes ? 'Notes: ' + notes : '',
      'Please share pilot access details and activation steps.'
    ].filter(Boolean).join('\n');
    $('#pilotMessage').value = msg;
    $('#pilotResponse').hidden = false;
    $('#pilotResponseStatus').textContent = state.lang === 'ar'
      ? 'تم تجهيز الرسالة محليًا. انسخها ثم أرسلها عبر LinkedIn؛ لم تُرسل تلقائيًا.'
      : 'Your message was prepared locally. Copy it and send it via LinkedIn; nothing was auto-submitted.';
    $('.pilot-actions a').href = linkedin;
    $('#pilotResponse').scrollIntoView({behavior:'smooth', block:'nearest'});
  });
  $('#copyRequest')?.addEventListener('click', async () => {
    const msg = $('#pilotMessage').value;
    try {
      if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(msg);
      else { $('#pilotMessage').select(); if (!document.execCommand('copy')) throw new Error('copy blocked'); }
      $('#pilotResponseStatus').textContent = state.lang === 'ar' ? '✓ تم نسخ الرسالة. افتح LinkedIn وأرسلها بنفسك.' : '✓ Copied. Open LinkedIn and send it yourself.';
    } catch (_) {
      $('#pilotMessage').focus(); $('#pilotMessage').select();
      $('#pilotResponseStatus').textContent = state.lang === 'ar' ? 'حددنا الرسالة؛ انسخها باستخدام Ctrl+C وأرسلها عبر LinkedIn.' : 'Message selected. Press Ctrl+C and send it through LinkedIn.';
    }
  });
  setLanguage(state.lang);
})();
