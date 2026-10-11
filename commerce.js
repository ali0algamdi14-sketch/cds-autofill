'use strict';
(function (root) {
  function safeUrl(value) {
    try {
      const url = new URL(value);
      return url.protocol === 'https:' && !url.username && !url.password ? url.href : '';
    } catch { return ''; }
  }
  function checkoutReady(config) {
    return config.salesEnabled === true && Boolean(safeUrl(config.checkoutUrl));
  }
  const api = { safeUrl, checkoutReady };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (!root.document) return;
  const config = root.CDSCommerce || {};
  const $ = id => document.getElementById(id);
  const contact = safeUrl(config.contactUrl);
  document.querySelectorAll('[data-contact]').forEach(a => {
    if (contact) a.href = contact; else a.removeAttribute('href');
  });
  const ownerUrl = safeUrl(config.ownerAdminUrl);
  if (ownerUrl) $('ownerLink').href = ownerUrl;
  $('releaseLabel').textContent = config.releaseLabel || 'نسخة اختبار';
  if (checkoutReady(config)) {
    $('checkoutLink').href = safeUrl(config.checkoutUrl);
    $('checkoutLink').hidden = false;
    $('salesStatus').textContent = 'الشراء عبر المتجر — راجع تفاصيل الباقة والسعر قبل الدفع.';
  }
  const downloadUrl = safeUrl(config.commercialDownloadUrl);
  if (downloadUrl) {
    $('downloadLink').href = downloadUrl;
    $('downloadLink').hidden = false;
    $('downloadStatus').textContent = 'نزّل نسخة Commercial، ثم اتبع خطوات التثبيت أدناه.';
  }
  const labels = {pilot:'وصول تجريبي',single:'اشتراك فردي',facility:'ترخيص منشأة'};
  const periods = {monthly:'شهري',annual:'سنوي'};
  function updateRequest() {
    const plan = $('plan').value;
    $('periodRow').hidden = plan === 'pilot';
    const period = plan === 'pilot' ? '' : '، والمدة المفضلة ' + periods[$('period').value];
    $('requestText').value = 'السلام عليكم علي، أرغب بطلب ' + labels[plan] + ' لبرنامج CDS AutoFill' + period + '. ممكن تفاصيل السعر، عدد الأجهزة المسموح بها، وطريقة الحصول على النسخة والتفعيل؟';
    $('copyStatus').textContent = '';
  }
  document.querySelectorAll('[data-plan]').forEach(button => button.addEventListener('click', () => {
    $('plan').value = button.dataset.plan;
    updateRequest();
    $('request').scrollIntoView({behavior:'smooth',block:'start'});
    $('plan').focus({preventScroll:true});
  }));
  $('plan').addEventListener('change', updateRequest);
  $('period').addEventListener('change', updateRequest);
  $('copyRequest').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText($('requestText').value);
      $('copyStatus').textContent = 'تم النسخ. افتح صفحة التواصل وأرسل الطلب بنفسك.';
    } catch {
      $('requestText').focus(); $('requestText').select();
      $('copyStatus').textContent = 'حددنا النص لك؛ انسخه وأرسله من صفحة التواصل.';
    }
  });
  updateRequest();
})(typeof window !== 'undefined' ? window : globalThis);
