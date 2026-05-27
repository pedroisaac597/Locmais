const BLOG_STORAGE_KEY = 'locmais_blog_posts';

const defaultPosts = [
  {
    id: 1,
    name: 'Carlos Mendes',
    company: 'Construtora Horizonte',
    rating: 5,
    message: 'Excelente serviço! A equipe da LOCMAIS entregou os andaimes no prazo e a montagem foi impecável. Recomendo para qualquer obra.',
    date: '2026-04-15T10:00:00'
  },
  {
    id: 2,
    name: 'Ana Paula Ribeiro',
    company: 'Reforma Residencial',
    rating: 5,
    message: 'Precisei de andaimes com urgência para uma reforma e a LOCMAIS resolveu em menos de 24 horas. Profissionais muito competentes.',
    date: '2026-03-22T14:30:00'
  },
  {
    id: 3,
    name: 'Roberto Silva',
    company: 'Engenharia RS Ltda',
    rating: 4,
    message: 'Boa relação custo-benefício. Equipamentos em ótimo estado e equipe prestativa. Já é a terceira obra que contrato com eles.',
    date: '2026-02-10T09:15:00'
  }
];

function getPosts() {
  const stored = localStorage.getItem(BLOG_STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(defaultPosts));
  return defaultPosts;
}

function savePost(post) {
  const posts = getPosts();
  posts.unshift(post);
  localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(posts));
}

function renderStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += `<span class="star ${i <= rating ? 'star-filled' : 'star-empty'}"></span>`;
  }
  return html;
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
}

function getInitials(name) {
  return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
}

function renderBlogPosts(containerId, limit = null) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const posts = getPosts();
  const displayPosts = limit ? posts.slice(0, limit) : posts;

  if (displayPosts.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="icon icon-xl">${ICONS.message}</span>
        <p>Nenhuma opinião ainda. Seja o primeiro a compartilhar!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = displayPosts.map(post => `
    <article class="blog-card">
      <div class="blog-card-header">
        <div class="blog-avatar">${getInitials(post.name)}</div>
        <div class="blog-meta">
          <h4>${post.name}${post.company ? ` — ${post.company}` : ''}</h4>
          <span>${formatDate(post.date)}</span>
        </div>
        <div class="blog-stars">${renderStars(post.rating)}</div>
      </div>
      <p>${post.message}</p>
    </article>
  `).join('');
}

function initBlogForm() {
  const form = document.getElementById('blogForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('blogName').value.trim();
    const company = document.getElementById('blogCompany').value.trim();
    const rating = parseInt(document.querySelector('input[name="rating"]:checked').value);
    const message = document.getElementById('blogMessage').value.trim();

    savePost({
      id: Date.now(),
      name,
      company,
      rating,
      message,
      date: new Date().toISOString()
    });

    document.getElementById('blogSuccess').classList.add('show');
    form.reset();
    renderBlogPosts('blogPosts');

    setTimeout(() => {
      document.getElementById('blogSuccess').classList.remove('show');
    }, 4000);
  });
}

function initHomeTestimonials() {
  renderBlogPosts('homeTestimonials', 3);
}
