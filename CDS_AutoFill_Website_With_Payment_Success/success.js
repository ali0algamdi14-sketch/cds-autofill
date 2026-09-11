(() => {
  const CLAIM_ENDPOINT = 'https://cds-autofill-license.ali0algamdi14.workers.dev/license/claim';
  const params = new URLSearchParams(location.search);
  const paymentId = params.get('payment_id') || params.get('id');

  const loading = document.getElementById('loadingState');
  const success = document.getElementById('successState');
  const error = document.getElementById('errorState');
  const keyEl = document.getElementById('licenseKey');
  const planEl = document.getElementById('plan');
  const devicesEl = document.getElementById('devices');
  const expiresEl = document.getElementById('expires');
  const testBadge = document.getElementById('testBadge');
  const errorMessage = document.getElementById('errorMessage');
  const copyBtn = document.getElementById('copyBtn');
  const retryBtn = document.getElementById('retryBtn');

  const lang = () => document.documentElement.lang === 'en' ? 'en' : 'ar';
  const t = (ar, en) => lang() === 'en' ? en : ar;

  function show(which) {
    loading.hidden = which !== 'loading';
    success.hidden = which !== 'success';
    error.hidden = which !== 'error';
  }

  function formatDate(value) {
    if (!value) return '—';
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return value;
    return new Intl.DateTimeFormat(lang() === 'en' ? 'en-GB' : 'ar-SA', {
      year: 'numeric', month: 'short', day: 'numeric'
    }).format(d);
  }

  async function claim(attempt = 0) {
    if (!paymentId) {
      show('error');
      errorMessage.textContent = t('رقم عملية الدفع غير موجود في الرابط.', 'Payment ID is missing from the URL.');
      return;
    }

    show('loading');
    try {
      const res = await fetch(`${CLAIM_ENDPOINT}?payment_id=${encodeURIComponent(paymentId)}`, { cache: 'no-store' });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        if ((data.error === 'PAYMENT_NOT_FOUND' || data.error === 'PAYMENT_NOT_CONFIRMED') && attempt < 4) {
          await new Promise(r => setTimeout(r, 1800));
          return claim(attempt + 1);
        }
        throw new Error(data.error || `HTTP_${res.status}`);
      }

      keyEl.textContent = data.license_key || '—';
      planEl.textContent = data.plan || '—';
      devicesEl.textContent = String(data.max_devices ?? '—');
      expiresEl.dataset.raw = data.expires_at || '';
      expiresEl.textContent = formatDate(data.expires_at);
      testBadge.textContent = data.test_mode ? t('وضع تجريبي', 'Test mode') : t('فعلي', 'Live');
      show('success');
    } catch (e) {
      show('error');
      errorMessage.textContent = `${t('الرمز:', 'Code:')} ${e.message || 'UNKNOWN_ERROR'}`;
    }
  }

  copyBtn?.addEventListener('click', async () => {
    const key = keyEl.textContent.trim();
    if (!key || key === '—') return;
    try {
      await navigator.clipboard.writeText(key);
      const oldAr = copyBtn.dataset.ar, oldEn = copyBtn.dataset.en;
      copyBtn.textContent = t('تم النسخ ✓', 'Copied ✓');
      setTimeout(() => {
        copyBtn.dataset.ar = oldAr; copyBtn.dataset.en = oldEn;
        copyBtn.textContent = t(oldAr, oldEn);
      }, 1400);
    } catch {
      window.prompt(t('انسخ مفتاح التفعيل:', 'Copy your license key:'), key);
    }
  });

  retryBtn?.addEventListener('click', () => claim(0));
  document.getElementById('langToggle')?.addEventListener('click', () => setTimeout(() => {
    if (!success.hidden && expiresEl.dataset.raw) expiresEl.textContent = formatDate(expiresEl.dataset.raw);
  }, 0));

  claim();
})();
