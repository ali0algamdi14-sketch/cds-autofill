(function(){
  function apply(lang){
    document.documentElement.lang=lang;
    document.documentElement.dir=lang==='ar'?'rtl':'ltr';
    document.querySelectorAll('[data-ar][data-en]').forEach(el=>{el.textContent=el.dataset[lang];});
    const b=document.getElementById('langToggle');
    if(b) b.textContent=lang==='ar'?'English':'العربية';
    localStorage.setItem('cdsSiteLang',lang);
  }
  let lang=localStorage.getItem('cdsSiteLang')||'ar';
  apply(lang);
  const b=document.getElementById('langToggle');
  if(b)b.addEventListener('click',()=>{lang=lang==='ar'?'en':'ar';apply(lang);});
})();
