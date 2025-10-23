// theme toggle (dark default)
(function(){
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');

  // default dark
  const saved = localStorage.getItem('site-theme');
  if(saved){
    root.setAttribute('data-theme', saved);
    btn.textContent = saved === 'light' ? '🌙' : '☀️';
  } else {
    root.setAttribute('data-theme','dark');
    btn.textContent = '🌙';
  }

  btn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('site-theme', next);
    btn.textContent = next === 'light' ? '🌙' : '☀️';
  });
})();
