class Router {
  constructor(routes) {
    this.routes = routes;
    this.currentRoute = null;
    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('load', () => this.handleRoute());
  }

  handleRoute() {
    const hash = window.location.hash.slice(1) || '/';
    const path = hash.split('?')[0];
    const route = this.routes[path] || this.routes['/404'];
    this.currentRoute = path;

    document.title = route.title + ' | LOCMAIS';
    const app = document.getElementById('app');
    app.innerHTML = route.render();
    app.classList.remove('fade-in');
    void app.offsetWidth;
    app.classList.add('fade-in');

    this.updateNav(path);
    route.afterRender?.();
    window.scrollTo(0, 0);
  }

  updateNav(path) {
    document.querySelectorAll('.nav-link').forEach(link => {
      const route = link.getAttribute('data-route');
      link.classList.toggle('active', 
        (route === 'home' && (path === '/' || path === '')) ||
        path.includes(route)
      );
    });
  }

  navigate(path) {
    window.location.hash = path;
  }
}
