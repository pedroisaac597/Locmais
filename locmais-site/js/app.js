const videos = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'LOCMAIS — Apresentação Institucional',
    description: 'Conheça a LOCMAIS, nossa estrutura e compromisso com a segurança.',
    thumb: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
  },
  {
    id: 'ysz5S6PUM-U',
    title: 'Montagem de Andaimes — Tutorial de Segurança',
    description: 'Boas práticas na montagem e uso seguro de andaimes.',
    thumb: 'https://img.youtube.com/vi/ysz5S6PUM-U/maxresdefault.jpg'
  },
  {
    id: 'ScMzIvxBSi4',
    title: 'Case: Reforma de Fachada Comercial',
    description: 'Veja como a LOCMAIS atendeu uma grande reforma de fachada.',
    thumb: 'https://img.youtube.com/vi/ScMzIvxBSi4/maxresdefault.jpg'
  },
  {
    id: 'jNQXAC9IVRw',
    title: 'Equipamentos Certificados INMETRO',
    description: 'Por que a certificação dos equipamentos é fundamental.',
    thumb: 'https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg'
  },
  {
    id: '9bZkp7q19f0',
    title: 'Entrega Rápida — Logística LOCMAIS',
    description: 'Entrega ágil e montagem profissional no local.',
    thumb: 'https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg'
  },
  {
    id: 'L_jWHffIx5E',
    title: 'Depoimento de Cliente',
    description: 'Experiência de quem já contratou a LOCMAIS.',
    thumb: 'https://img.youtube.com/vi/L_jWHffIx5E/maxresdefault.jpg'
  }
];

function initIcons() {
  document.querySelectorAll('[data-icon]').forEach(el => {
    const name = el.getAttribute('data-icon');
    if (ICONS[name]) {
      el.innerHTML = ICONS[name];
      el.classList.add('icon');
    }
  });
}

function renderVideos() {
  const grid = document.getElementById('videosGrid');
  if (!grid) return;

  grid.innerHTML = videos.map((video) => `
    <article class="video-card reveal" data-video-id="${video.id}">
      <div class="video-thumbnail" onclick="openVideo('${video.id}')">
        <img src="${video.thumb}" alt="${video.title}" loading="lazy" onerror="this.style.display='none'">
        <div class="play-btn">${icon('play')}</div>
      </div>
      <div class="video-info">
        <h3>${video.title}</h3>
        <p>${video.description}</p>
      </div>
    </article>
  `).join('');
}

function openVideo(videoId) {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoIframe');
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeVideo() {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoIframe');
  modal.classList.remove('open');
  iframe.src = '';
  document.body.style.overflow = '';
}

function initVideoModal() {
  document.getElementById('videoModalClose')?.addEventListener('click', closeVideo);
  document.getElementById('videoModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'videoModal') closeVideo();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeVideo();
  });
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      name: document.getElementById('contactName').value.trim(),
      phone: document.getElementById('contactPhone').value.trim(),
      email: document.getElementById('contactEmail').value.trim(),
      service: document.getElementById('contactService').value,
      message: document.getElementById('contactMessage').value.trim()
    };

    document.getElementById('contactSuccess').classList.add('show');
    setTimeout(() => {
      window.open(getWhatsAppLink(buildOrcamentoMessage(data)), '_blank');
      form.reset();
      setTimeout(() => document.getElementById('contactSuccess').classList.remove('show'), 3000);
    }, 800);
  });
}

function initContactInfo() {
  const phoneLink = document.getElementById('contactPhoneLink');
  const emailLink = document.getElementById('contactEmailLink');
  const address = document.getElementById('contactAddress');
  const topPhone = document.getElementById('topBarPhone');
  const topEmail = document.getElementById('topBarEmail');
  const phoneInput = document.getElementById('contactPhone');

  if (phoneLink) {
    phoneLink.href = getWhatsAppLink();
    phoneLink.textContent = CONFIG.whatsappDisplay;
    phoneLink.target = '_blank';
    phoneLink.rel = 'noopener';
  }
  if (emailLink) {
    emailLink.href = `mailto:${CONFIG.email}`;
    emailLink.textContent = CONFIG.email;
  }
  if (address) address.textContent = CONFIG.address;
  if (topPhone) {
    topPhone.href = getWhatsAppLink();
    topPhone.innerHTML = `${icon('phone', 'icon-sm')} ${CONFIG.whatsappDisplay}`;
  }
  if (topEmail) {
    topEmail.href = `mailto:${CONFIG.email}`;
    topEmail.innerHTML = `${icon('mail', 'icon-sm')} ${CONFIG.email}`;
  }
  if (phoneInput) phoneInput.placeholder = CONFIG.whatsappDisplay;
}

function initWhatsAppFloat() {
  const btn = document.getElementById('whatsappFloat');
  if (!btn) return;
  btn.href = getWhatsAppLink();
  btn.querySelector('.icon-whatsapp-float').innerHTML = ICONS.whatsapp;
}

function initFooterContact() {
  const footer = document.getElementById('footerContact');
  if (!footer) return;
  footer.innerHTML = `
    <h4>Contato</h4>
    <p class="footer-contact-item">${icon('phone', 'icon-footer')} <a href="${getWhatsAppLink()}" target="_blank" rel="noopener">${CONFIG.whatsappDisplay}</a></p>
    <p class="footer-contact-item">${icon('mail', 'icon-footer')} <a href="mailto:${CONFIG.email}">${CONFIG.email}</a></p>
    <p class="footer-contact-item">${icon('mapPin', 'icon-footer')} ${CONFIG.address}</p>
  `;
}

function initHeroBadge() {
  const badge = document.getElementById('heroBadge');
  const cardIcon = document.getElementById('heroCardIcon');
  if (badge) badge.innerHTML = `${icon('scaffold', 'icon-sm')} Locação de Andaimes Tubulares e Fachadeiros`;
  if (cardIcon) cardIcon.innerHTML = icon('scaffold');
}

function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = docHeight > 0 ? `${(scrollTop / docHeight) * 100}%` : '0%';
  });
}

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('[data-section]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.section === id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

  sections.forEach(s => observer.observe(s));
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  initIcons();
  initHeroBadge();
  initContactInfo();
  initWhatsAppFloat();
  initFooterContact();
  renderVideos();
  initVideoModal();
  initContactForm();
  renderBlogPosts('blogPosts');
  initBlogForm();
  initScrollProgress();
  initScrollSpy();
  initReveal();
  initNav();
});
