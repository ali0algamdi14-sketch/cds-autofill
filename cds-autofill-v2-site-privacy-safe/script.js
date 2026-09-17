const translations = {
  en: {
    brandTag: 'Smart Prescription Entry',
    navFeatures: 'Features', navHow: 'How it works', navPrivacy: 'Privacy', navCreator: 'Creator', navDemo: 'See workflow',
    eyebrow: 'Built for real pharmacy workflow',
    heroHeadline: 'Smart prescription entry for Saudi CDS workflow.',
    heroSubtitle: 'A local-first Chrome extension that helps pharmacists review prescription data and fill supported CDS fields faster — with the pharmacist always in control.',
    heroPrimary: 'See how it works', heroSecondary: 'Explore features',
    trustLocal: 'Local processing', trustReview: 'Pharmacist review first', trustIndependent: 'Independent software', heroPrivacyTitle: 'Privacy first', heroPrivacyBody: 'Prescription parsing stays on your device. Patient prescription content is not sent to an external service for parsing.', heroPrivacyLink: 'Privacy policy',
    mockStatus: 'Review mode', mockReady: 'Prescription detected', mockLocal: 'Local', mockDemoBadge: 'Synthetic demo data', mockPatient: 'Patient', mockPatientDemo: 'Synthetic demo patient', mockPhysician: 'Physician', mockPhysicianDemo: 'Synthetic demo physician', mockId: 'Prescription ID', mockGender: 'Gender', mockDrug: 'Medication', mockDrugDemo: 'Demo medication', mockDuration: 'Duration', mockEdit: 'Review fields', mockFill: 'Fill CDS fields', mockRecording: 'Recording session', mockRxCount: 'prescriptions', creatorChipLabel: 'Built by',
    principlesLabel: 'Designed around four principles', principle1: 'Speed', principle2: 'Accuracy', principle3: 'Privacy', principle4: 'Control',
    featuresKicker: 'What it does', featuresTitle: 'Less repetitive entry. More focused review.', featuresIntro: 'CDS AutoFill is designed to reduce repetitive prescription data entry while keeping review and submission with the pharmacist.',
    featureExtractTitle: 'Smart prescription extraction', featureExtractBody: 'Reads the copied prescription text, identifies supported fields, and presents them for review before filling.', featureExtractCode: 'Preserved in source order',
    featureLocalTitle: 'Local-first processing', featureLocalBody: "Prescription data is processed on the pharmacist's device. The patient-data workflow does not require external processing.",
    featureDurationTitle: 'Smart Duration', featureDurationBody: 'Uses current-prescription instructions as a local heuristic to help calculate duration for review.',
    featureLogTitle: 'Prescription session log', featureLogBody: 'Start a local counting session, track processed prescriptions, clear the log, and export supported records to CSV.',
    featureReviewTitle: 'Review before fill', featureReviewBody: 'Extracted values stay editable. The pharmacist reviews the prescription before supported CDS fields are filled.',
    featureWorkflowTitle: 'Built around CDS workflow', featureWorkflowBody: 'Focused on practical prescription-entry steps without turning the extension into an automated dispensing decision maker.',
    howKicker: 'Simple workflow', howTitle: 'From prescription to reviewed CDS fields in three steps.', howIntro: 'No complicated setup in the daily workflow. Copy, review, then fill supported fields.',
    step1Title: 'Copy the prescription', step1Body: 'Copy the prescription text from the supported prescription view.',
    step2Title: 'Review extracted fields', step2Body: 'Check names, prescription ID, medication details, gender, duration, and other supported values.',
    step3Title: 'Fill supported CDS fields', step3Body: 'After pharmacist confirmation, CDS AutoFill places the reviewed values into supported fields.',
    privacyCore: 'Local-first', privacyOrbit1: 'Prescription text', privacyOrbit2: 'Review', privacyOrbit3: 'CDS fields',
    privacyKicker: 'Privacy by design', privacyTitle: 'Patient-data processing stays on the device.', privacyIntro: 'The prescription parsing workflow is designed to run locally. CDS AutoFill does not need to send patient prescription content to an external service for parsing.',
    privacyPoint1Title: 'No name-based gender guessing', privacyPoint1Body: 'Gender is read from the prescription field when available.',
    privacyPoint2Title: 'No automated dispensing decision', privacyPoint2Body: 'The pharmacist remains responsible for review and submission.',
    privacyPoint3Title: 'No historical dispense checking', privacyPoint3Body: 'The extension does not query previous dispensing history or early-dispense eligibility.', privacyPolicyButton: 'Read the full privacy policy',
    creatorKicker: 'Creator', creatorTitlePrefix: 'Built by', creatorBody: 'CDS AutoFill was created from a pharmacy workflow perspective: reduce repetitive entry, preserve review, and make the process clearer without replacing professional judgment.', creatorRole: 'Pharmacist', creatorBuilder: 'Product builder', signatureLabel: 'Creator of CDS AutoFill',
    faqKicker: 'FAQ', faqTitle: 'Clear by design.', faqIntro: 'A few important points about what CDS AutoFill is — and what it is not.',
    faq1Q: 'Does CDS AutoFill submit prescriptions automatically?', faq1A: 'No. It assists with review and supported field entry. The pharmacist reviews the data and remains responsible for the workflow.',
    faq2Q: 'Does it send patient data to an external AI service?', faq2A: 'The patient prescription parsing workflow is designed to process data locally on the device.',
    faq3Q: 'Is CDS AutoFill an official SFDA, Raqeeb, or Ministry of Health product?', faq3A: 'No. CDS AutoFill is independent software and is not affiliated with or endorsed by SFDA, Raqeeb, the Ministry of Health, or any government entity.',
    ctaKicker: 'Faster • Safer • Smarter', ctaTitle: 'A cleaner prescription-entry workflow starts with better tools.', ctaBy: 'Built by', ctaButton: 'Back to top',
    footerBuilt: 'Built by', footerDisclaimer: 'Independent software. Not affiliated with SFDA, Raqeeb, the Ministry of Health, or any government entity.', footerPrivacy: 'Privacy Policy'
  },
  ar: {
    brandTag: 'إدخال ذكي لبيانات الوصفات',
    navFeatures: 'المميزات', navHow: 'كيف يعمل', navPrivacy: 'الخصوصية', navCreator: 'المطور', navDemo: 'شاهد سير العمل',
    eyebrow: 'مصمم لواقع العمل الصيدلي',
    heroHeadline: 'إدخال أذكى لبيانات الوصفات ضمن سير عمل CDS السعودي.',
    heroSubtitle: 'إضافة Chrome بمعالجة محلية تساعد الصيدلي على مراجعة بيانات الوصفة وتعبئة الحقول المدعومة في CDS بشكل أسرع — مع بقاء القرار والمراجعة بيد الصيدلي.',
    heroPrimary: 'شاهد كيف يعمل', heroSecondary: 'استكشف المميزات',
    trustLocal: 'معالجة محلية', trustReview: 'مراجعة الصيدلي أولًا', trustIndependent: 'برنامج مستقل', heroPrivacyTitle: 'الخصوصية أولًا', heroPrivacyBody: 'تحليل الوصفة يبقى على جهازك، ولا يتم إرسال محتوى وصفة المريض إلى خدمة خارجية للتحليل.', heroPrivacyLink: 'سياسة الخصوصية',
    mockStatus: 'وضع المراجعة', mockReady: 'تم اكتشاف الوصفة', mockLocal: 'محلي', mockDemoBadge: 'بيانات تجريبية مصطنعة', mockPatient: 'المريض', mockPatientDemo: 'مريض تجريبي غير حقيقي', mockPhysician: 'الطبيب', mockPhysicianDemo: 'طبيب تجريبي غير حقيقي', mockId: 'رقم الوصفة', mockGender: 'الجنس', mockDrug: 'الدواء', mockDrugDemo: 'دواء تجريبي', mockDuration: 'المدة', mockEdit: 'مراجعة الحقول', mockFill: 'تعبئة حقول CDS', mockRecording: 'جلسة التسجيل', mockRxCount: 'وصفة', creatorChipLabel: 'تطوير',
    principlesLabel: 'مصمم حول أربع مبادئ', principle1: 'السرعة', principle2: 'الدقة', principle3: 'الخصوصية', principle4: 'التحكم',
    featuresKicker: 'ماذا يقدم', featuresTitle: 'إدخال متكرر أقل. تركيز أكبر على المراجعة.', featuresIntro: 'صُمم CDS AutoFill لتقليل إدخال بيانات الوصفات المتكرر مع إبقاء المراجعة والإرسال النهائي بيد الصيدلي.',
    featureExtractTitle: 'استخراج ذكي لبيانات الوصفة', featureExtractBody: 'يقرأ نص الوصفة المنسوخ، ويحدد الحقول المدعومة، ثم يعرضها للمراجعة قبل التعبئة.', featureExtractCode: 'يحافظ على ترتيب المصدر',
    featureLocalTitle: 'معالجة محلية أولًا', featureLocalBody: 'تتم معالجة بيانات الوصفة على جهاز الصيدلي، ولا يحتاج مسار بيانات المريض إلى معالجة خارجية.',
    featureDurationTitle: 'Smart Duration', featureDurationBody: 'يستخدم تعليمات الوصفة الحالية محليًا للمساعدة في حساب مدة العلاج وعرضها للمراجعة.',
    featureLogTitle: 'سجل جلسة الوصفات', featureLogBody: 'ابدأ جلسة عد محلية، تابع عدد الوصفات المعالجة، احذف السجل، وصدّر السجلات المدعومة إلى CSV.',
    featureReviewTitle: 'مراجعة قبل التعبئة', featureReviewBody: 'تبقى القيم المستخرجة قابلة للتعديل، ويراجع الصيدلي الوصفة قبل تعبئة الحقول المدعومة في CDS.',
    featureWorkflowTitle: 'مصمم حول سير عمل CDS', featureWorkflowBody: 'يركز على خطوات إدخال الوصفة العملية دون تحويل الإضافة إلى نظام يتخذ قرار الصرف تلقائيًا.',
    howKicker: 'سير عمل بسيط', howTitle: 'من الوصفة إلى حقول CDS المراجعة في ثلاث خطوات.', howIntro: 'لا توجد خطوات يومية معقدة: انسخ، راجع، ثم عبّئ الحقول المدعومة.',
    step1Title: 'انسخ الوصفة', step1Body: 'انسخ نص الوصفة من شاشة الوصفة المدعومة.',
    step2Title: 'راجع الحقول المستخرجة', step2Body: 'تحقق من الأسماء، رقم الوصفة، تفاصيل الدواء، الجنس، المدة، وبقية القيم المدعومة.',
    step3Title: 'عبّئ حقول CDS المدعومة', step3Body: 'بعد تأكيد الصيدلي، تضع CDS AutoFill القيم المراجعة في الحقول المدعومة.',
    privacyCore: 'محلي أولًا', privacyOrbit1: 'نص الوصفة', privacyOrbit2: 'المراجعة', privacyOrbit3: 'حقول CDS',
    privacyKicker: 'الخصوصية ضمن التصميم', privacyTitle: 'معالجة بيانات المريض تبقى على الجهاز.', privacyIntro: 'تم تصميم مسار تحليل الوصفة ليعمل محليًا؛ ولا تحتاج CDS AutoFill إلى إرسال محتوى وصفة المريض إلى خدمة خارجية لتحليله.',
    privacyPoint1Title: 'لا يوجد تخمين للجنس من الاسم', privacyPoint1Body: 'يتم أخذ الجنس من حقل الوصفة نفسه عند توفره.',
    privacyPoint2Title: 'لا يوجد قرار صرف آلي', privacyPoint2Body: 'يبقى الصيدلي مسؤولًا عن المراجعة والإرسال.',
    privacyPoint3Title: 'لا يوجد فحص لسجل الصرف السابق', privacyPoint3Body: 'لا تستعلم الإضافة عن تاريخ الصرف السابق أو أهلية الصرف المبكر.', privacyPolicyButton: 'اقرأ سياسة الخصوصية كاملة',
    creatorKicker: 'المطور', creatorTitlePrefix: 'تطوير', creatorBody: 'تم بناء CDS AutoFill من منظور سير العمل الصيدلي: تقليل الإدخال المتكرر، الحفاظ على المراجعة، وجعل العملية أوضح دون استبدال الحكم المهني.', creatorRole: 'صيدلي', creatorBuilder: 'مطور المنتج', signatureLabel: 'مطور CDS AutoFill',
    faqKicker: 'الأسئلة الشائعة', faqTitle: 'وضوح من البداية.', faqIntro: 'نقاط مهمة توضح ما الذي تفعله CDS AutoFill وما الذي لا تفعله.',
    faq1Q: 'هل تقوم CDS AutoFill بإرسال الوصفة تلقائيًا؟', faq1A: 'لا. تساعد في المراجعة وإدخال الحقول المدعومة، بينما يراجع الصيدلي البيانات ويبقى مسؤولًا عن سير العمل.',
    faq2Q: 'هل ترسل بيانات المريض إلى خدمة ذكاء اصطناعي خارجية؟', faq2A: 'تم تصميم مسار تحليل بيانات الوصفة ليعمل محليًا على الجهاز.',
    faq3Q: 'هل CDS AutoFill منتج رسمي تابع لهيئة الغذاء والدواء أو رقيب أو وزارة الصحة؟', faq3A: 'لا. CDS AutoFill برنامج مستقل وغير تابع أو معتمد من هيئة الغذاء والدواء أو رقيب أو وزارة الصحة أو أي جهة حكومية.',
    ctaKicker: 'Faster • Safer • Smarter', ctaTitle: 'سير عمل أنظف للوصفات يبدأ بأداة أفضل.', ctaBy: 'تطوير', ctaButton: 'العودة للأعلى',
    footerBuilt: 'تطوير', footerDisclaimer: 'برنامج مستقل وغير تابع لهيئة الغذاء والدواء أو رقيب أو وزارة الصحة أو أي جهة حكومية.'
  }
};

const root = document.documentElement;
const languageToggle = document.getElementById('languageToggle');
const languageLabel = document.getElementById('languageLabel');
const year = document.getElementById('year');

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;
  root.lang = lang;
  root.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.setAttribute('dir', root.dir);
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) node.textContent = dict[key];
  });
  languageLabel.textContent = lang === 'ar' ? 'English' : 'العربية';
  languageToggle.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
  localStorage.setItem('cds-site-language', lang);
}

const savedLanguage = localStorage.getItem('cds-site-language');
const browserArabic = (navigator.language || '').toLowerCase().startsWith('ar');
applyLanguage(savedLanguage || (browserArabic ? 'ar' : 'en'));

languageToggle.addEventListener('click', () => {
  applyLanguage(root.lang === 'ar' ? 'en' : 'ar');
});

year.textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
