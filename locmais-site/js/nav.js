function setNavOpen(open) {
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const overlay = document.getElementById('navOverlay');
  if (!nav || !navToggle) return;

  nav.classList.toggle('open', open);
  navToggle.classList.toggle('active', open);
  overlay?.classList.toggle('visible', open);
  overlay?.setAttribute('aria-hidden', open ? 'false' : 'true');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  navToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  document.body.classList.toggle('nav-open', open);
}

function initNav() {
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  const overlay = document.getElementById('navOverlay');
  const header = document.getElementById('header');

  const isMobileNav = () => window.matchMedia('(max-width: 1024px)').matches;

  navToggle?.addEventListener('click', () => {
    if (!isMobileNav()) return;
    setNavOpen(!nav.classList.contains('open'));
  });

  overlay?.addEventListener('click', () => {
    setNavOpen(false);
  });

  /* Fecha menu mobile ao clicar em link — scroll nativo do navegador */
  nav?.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      if (isMobileNav()) {
        setTimeout(() => setNavOpen(false), 100);
      }
    });
  });

  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 20);
  });

  window.addEventListener('resize', () => {
    if (!isMobileNav()) setNavOpen(false);
  });
}
