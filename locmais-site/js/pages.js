const pages = {
  home: () => `
    <section class="hero">
      <div class="container hero-content fade-in">
        <span class="hero-badge">${icon('scaffold', 'icon-sm')} Locacao de Andaimes Tubulares e Fachadeiros</span>
        <h1>Seguranca e qualidade para a sua <span>obra</span></h1>
        <p>A LOCMAIS e especializada em locacao de andaimes tubulares e fachadeiros, com equipamentos certificados, entrega rapida e suporte tecnico especializado.</p>
        <div class="hero-buttons">
          <a href="#/contato" class="btn btn-primary">Solicitar Orcamento</a>
          <a href="#/sobre" class="btn btn-outline">Conheca a LOCMAIS</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Nossos Servicos</span>
          <h2>Especialistas em andaimes tubulares e fachadeiros</h2>
          <p>Locacao de andaimes para obras de todos os portes, com montagem, entrega e retirada.</p>
        </div>
        <div class="cards-grid cards-grid-3">
          <div class="card">
            <div class="card-icon">${icon('scaffold')}</div>
            <h3>Andaimes Tubulares</h3>
            <p>Andaimes metalicos tubulares para fachadas, reformas e construcoes em geral. Montagem e desmontagem inclusas.</p>
          </div>
          <div class="card">
            <div class="card-icon">${icon('wrench')}</div>
            <h3>Andaimes Fachadeiros</h3>
            <p>Sistemas modulares fachadeiros para trabalhos em altura com maxima seguranca e estabilidade.</p>
          </div>
          <div class="card">
            <div class="card-icon">${icon('truck')}</div>
            <h3>Entrega e Montagem</h3>
            <p>Logistica completa com entrega no local, montagem por equipe treinada e retirada apos a obra.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Numeros que Impressionam</span>
          <h2>Experiencia que gera confianca</h2>
          <p>Anos de dedicacao ao setor da construcao civil com resultados comprovados.</p>
        </div>
        <div class="stats-grid">
          <div class="stat-item">
            <h3>15+</h3>
            <p>Anos de experiencia</p>
          </div>
          <div class="stat-item">
            <h3>500+</h3>
            <p>Obras atendidas</p>
          </div>
          <div class="stat-item">
            <h3>100%</h3>
            <p>Equipamentos certificados</p>
          </div>
          <div class="stat-item">
            <h3>24h</h3>
            <p>Atendimento emergencial</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-gray">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Depoimentos</span>
          <h2>O que nossos clientes dizem</h2>
          <p>Veja as opiniões de quem ja confiou na LOCMAIS.</p>
        </div>
        <div class="cards-grid" id="homeTestimonials"></div>
        <div style="text-align: center; margin-top: 40px;">
          <a href="#/blog" class="btn btn-primary">Ver todos os depoimentos</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="cta-banner">
          <h2>Precisa de andaimes para sua obra?</h2>
          <p>Solicite um orcamento gratuito e receba atendimento em ate 24 horas.</p>
          <a href="#/contato" class="btn btn-primary">Falar com um especialista</a>
        </div>
      </div>
    </section>
  `,

  blog: () => `
    <div class="page-header">
      <div class="container">
        <h1>Blog & Opinioes</h1>
        <p>Compartilhe sua experiencia com a LOCMAIS e veja o que outros clientes estao dizendo.</p>
      </div>
    </div>

    <section class="section">
      <div class="container blog-layout">
        <div class="blog-posts" id="blogPosts"></div>
        <aside class="blog-form-card">
          <h3>Deixe sua opiniao</h3>
          <p>Sua avaliacao ajuda outros clientes e nos permite melhorar continuamente.</p>
          <div class="form-success" id="blogSuccess">
            ${icon('checkCircle', 'icon-success')} Obrigado! Sua opiniao foi publicada com sucesso.
          </div>
          <form id="blogForm">
            <div class="form-group">
              <label for="blogName">Seu nome</label>
              <input type="text" id="blogName" placeholder="Ex: Joao Silva" required>
            </div>
            <div class="form-group">
              <label for="blogCompany">Empresa / Obra (opcional)</label>
              <input type="text" id="blogCompany" placeholder="Ex: Construtora ABC">
            </div>
            <div class="form-group">
              <label>Avaliacao</label>
              <div class="star-rating">
                <input type="radio" name="rating" value="5" id="star5" required>
                <label for="star5" title="5 estrelas"></label>
                <input type="radio" name="rating" value="4" id="star4">
                <label for="star4" title="4 estrelas"></label>
                <input type="radio" name="rating" value="3" id="star3">
                <label for="star3" title="3 estrelas"></label>
                <input type="radio" name="rating" value="2" id="star2">
                <label for="star2" title="2 estrelas"></label>
                <input type="radio" name="rating" value="1" id="star1">
                <label for="star1" title="1 estrela"></label>
              </div>
            </div>
            <div class="form-group">
              <label for="blogMessage">Sua opiniao</label>
              <textarea id="blogMessage" placeholder="Conte como foi sua experiencia com a LOCMAIS..." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%;">Publicar opiniao</button>
          </form>
        </aside>
      </div>
    </section>
  `,

  videos: () => `
    <div class="page-header">
      <div class="container">
        <h1>Videos</h1>
        <p>Assista aos nossos videos de divulgacao, tutoriais de seguranca e cases de obras realizadas.</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="videos-grid" id="videosGrid"></div>
      </div>
    </section>

    <div class="video-modal" id="videoModal">
      <div class="video-modal-content">
        <button class="video-modal-close" id="videoModalClose" aria-label="Fechar video">&times;</button>
        <iframe id="videoIframe" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
    </div>
  `,

  sobre: () => `
    <div class="page-header">
      <div class="container">
        <h1>Sobre Nos</h1>
        <p>Conheca a historia, missao e valores da LOCMAIS — referencia em locacao de andaimes tubulares e fachadeiros.</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="about-grid">
          <div class="about-image">
            <div class="about-image-placeholder">
              <span class="icon icon-xl icon-light">${ICONS.scaffold}</span>
              <p>LOCMAIS — Desde 2010</p>
            </div>
          </div>
          <div class="about-content">
            <h2>Nossa Historia</h2>
            <p>A LOCMAIS nasceu da paixao por construir com seguranca. Fundada em 2010, comecamos como uma pequena empresa familiar e hoje somos referencia em locacao de andaimes tubulares e fachadeiros na regiao de Sao Paulo.</p>
            <p>Ao longo de mais de 15 anos, atendemos centenas de obras — desde pequenas reformas residenciais ate grandes empreendimentos comerciais — sempre com o compromisso de entregar equipamentos de qualidade e um servico excepcional.</p>
            <p>Nossa equipe e formada por profissionais experientes e certificados, prontos para oferecer consultoria tecnica e garantir que sua obra aconteca com total seguranca.</p>
          </div>
        </div>

        <div class="about-values">
          <div class="value-card">
            <div class="value-icon">${icon('target')}</div>
            <h4>Missao</h4>
            <p>Prover solucoes seguras e eficientes em locacao de andaimes tubulares e fachadeiros, contribuindo para o sucesso de cada obra.</p>
          </div>
          <div class="value-card">
            <div class="value-icon">${icon('eye')}</div>
            <h4>Visao</h4>
            <p>Ser a empresa lider em locacao de andaimes, reconhecida pela excelencia e compromisso com a seguranca.</p>
          </div>
          <div class="value-card">
            <div class="value-icon">${icon('diamond')}</div>
            <h4>Valores</h4>
            <p>Seguranca, qualidade, pontualidade, transparencia e respeito ao cliente e colaboradores.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-gray">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Diferenciais</span>
          <h2>Por que escolher a LOCMAIS?</h2>
        </div>
        <div class="cards-grid">
          <div class="card">
            <div class="card-icon">${icon('check')}</div>
            <h3>Equipamentos Certificados</h3>
            <p>Todos os nossos andaimes possuem certificacao e passam por inspecao rigorosa antes de cada locacao.</p>
          </div>
          <div class="card">
            <div class="card-icon">${icon('zap')}</div>
            <h3>Agilidade na Entrega</h3>
            <p>Entrega em ate 24 horas na regiao metropolitana de Sao Paulo para obras urgentes.</p>
          </div>
          <div class="card">
            <div class="card-icon">${icon('hardHat')}</div>
            <h3>Equipe Especializada</h3>
            <p>Montadores treinados e certificados em NR-35 para trabalho em altura.</p>
          </div>
        </div>
      </div>
    </section>
  `,

  contato: () => `
    <div class="page-header">
      <div class="container">
        <h1>Solicite um Orcamento</h1>
        <p>Preencha o formulario e voce sera direcionado para o WhatsApp da nossa equipe comercial.</p>
      </div>
    </div>

    <section class="section">
      <div class="container contact-grid">
        <div class="contact-info">
          <h3>Fale Conosco</h3>
          <div class="contact-item">
            <div class="contact-item-icon">${icon('phone')}</div>
            <div>
              <h4>Telefone / WhatsApp</h4>
              <p><a href="${getWhatsAppLink()}" target="_blank" rel="noopener">${CONFIG.whatsappDisplay}</a></p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-item-icon">${icon('mail')}</div>
            <div>
              <h4>E-mail</h4>
              <p><a href="mailto:${CONFIG.email}">${CONFIG.email}</a></p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-item-icon">${icon('mapPin')}</div>
            <div>
              <h4>Endereco</h4>
              <p>Rua das Construcoes, 123<br>Sao Paulo, SP — CEP 01234-567</p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-item-icon">${icon('clock')}</div>
            <div>
              <h4>Horario de Atendimento</h4>
              <p>Seg a Sex: 7h as 18h<br>Sab: 7h as 12h</p>
            </div>
          </div>
          <div class="contact-note">
            ${icon('whatsapp', 'icon-whatsapp-note')}
            <p><strong>Como funciona o orcamento?</strong> Ao enviar o formulario, voce sera redirecionado para o WhatsApp da LOCMAIS com todos os dados preenchidos. Nossa equipe comercial responde por la.</p>
          </div>
        </div>
        <div class="contact-form">
          <div class="form-success" id="contactSuccess">
            ${icon('checkCircle', 'icon-success')} Redirecionando para o WhatsApp da LOCMAIS...
          </div>
          <form id="contactForm">
            <div class="form-group">
              <label for="contactName">Nome completo</label>
              <input type="text" id="contactName" required placeholder="Seu nome">
            </div>
            <div class="form-group">
              <label for="contactPhone">Telefone</label>
              <input type="tel" id="contactPhone" required placeholder="${CONFIG.whatsappDisplay}">
            </div>
            <div class="form-group">
              <label for="contactEmail">E-mail</label>
              <input type="email" id="contactEmail" required placeholder="seu@email.com">
            </div>
            <div class="form-group">
              <label for="contactService">Tipo de andaime</label>
              <select id="contactService" required>
                <option value="">Selecione...</option>
                <option value="tubular">Andaime Tubular</option>
                <option value="fachadeiro">Andaime Fachadeiro</option>
              </select>
            </div>
            <div class="form-group">
              <label for="contactMessage">Descreva sua necessidade</label>
              <textarea id="contactMessage" required placeholder="Tipo de obra, altura necessaria, prazo..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-whatsapp" style="width: 100%;">
              ${icon('whatsapp', 'icon-btn')} Enviar via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  `,

  notFound: () => `
    <section class="section" style="text-align: center; padding: 120px 0;">
      <div class="container">
        <h1 style="font-size: 4rem; color: var(--burgundy);">404</h1>
        <h2 style="margin: 16px 0; color: var(--gray-900);">Pagina nao encontrada</h2>
        <p style="color: var(--gray-600); margin-bottom: 32px;">A pagina que voce procura nao existe.</p>
        <a href="#/" class="btn btn-primary">Voltar para Home</a>
      </div>
    </section>
  `
};

const videos = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'LOCMAIS — Apresentacao Institucional',
    description: 'Conheca a LOCMAIS, nossa estrutura e compromisso com a seguranca.',
    thumb: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
  },
  {
    id: 'ysz5S6PUM-U',
    title: 'Montagem de Andaimes — Tutorial de Seguranca',
    description: 'Aprenda as boas praticas na montagem e uso seguro de andaimes.',
    thumb: 'https://img.youtube.com/vi/ysz5S6PUM-U/maxresdefault.jpg'
  },
  {
    id: 'ScMzIvxBSi4',
    title: 'Case: Reforma de Fachada Comercial',
    description: 'Veja como a LOCMAIS atendeu uma grande reforma de fachada em Sao Paulo.',
    thumb: 'https://img.youtube.com/vi/ScMzIvxBSi4/maxresdefault.jpg'
  },
  {
    id: 'jNQXAC9IVRw',
    title: 'Equipamentos Certificados INMETRO',
    description: 'Saiba por que a certificacao dos equipamentos e fundamental para sua obra.',
    thumb: 'https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg'
  },
  {
    id: '9bZkp7q19f0',
    title: 'Entrega Rapida — Logistica LOCMAIS',
    description: 'Nossa logistica garante entrega agil e montagem profissional no local.',
    thumb: 'https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg'
  },
  {
    id: 'L_jWHffIx5E',
    title: 'Depoimento de Cliente — Construtora Alpha',
    description: 'O engenheiro responsavel pela Construtora Alpha conta sua experiencia.',
    thumb: 'https://img.youtube.com/vi/L_jWHffIx5E/maxresdefault.jpg'
  }
];
