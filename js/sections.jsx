/* Page sections for the clinic home. Components come from the design system (window.ClinicaDental). */
const ds = () => window.ClinicaDental;

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Dentista Thais Gallina, R. Osvaldo Aranha, 470 - Centro, Venâncio Aires - RS, 95800-000');
const WHATSAPP_URL = 'https://wa.me/5551992599231';
const INSTAGRAM_URL = 'https://www.instagram.com/drathaisgallina/';

const CONTACT = {
  phone: '(51) 99259-9231',
  address: 'R. Osvaldo Aranha, 470 · Centro · Venâncio Aires – RS',
  addressHref: MAPS_URL,
  socials: [{ network: 'instagram', href: INSTAGRAM_URL }, { network: 'whatsapp', href: WHATSAPP_URL }],
  ctaLabel: 'WhatsApp',
  ctaHref: WHATSAPP_URL,
};

// Index 0 = domingo.
const HOURS = [null, ['07:45', '19:00'], ['07:45', '18:00'], ['07:45', '19:00'], ['07:45', '18:00'], ['07:45', '18:00'], ['08:00', '12:00']];
const DAY_NAMES = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

// Google reviews, quoted word for word (emoji removed, surnames abbreviated).
const REVIEWS = [
  { name: 'Dany V.', quote: 'Me senti muito bem acolhida. Doutora Thaís muito atenciosa. Explicou todas as minhas dúvidas com muita paciência e profissionalismo.' },
  { name: 'Patricia H.', quote: 'A Thais é uma profissional maravilhosa, muito dedicada, atenciosa e querida. Sempre que vou ao consultório sou muito bem recebida.' },
  { name: 'Ruan M.', quote: 'Minha experiência nesse lugar foi ótima, atendimento excelente […] um lugar aconchegante onde vc é super bem atendido.' },
];

const NAV = [
  { label: 'Início', href: '#inicio', current: true },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

const STRIP = ['Ortodontia', 'Estética do sorriso', 'Restaurações', 'Harmonização orofacial', 'Preenchimento labial', 'Clínica geral', 'Prevenção'];

const PHOTOS = 'assets/photos/';

const SERVICES = [
  { id: 'svc-ortodontia', icon: 'dental', title: 'Ortodontia', image: PHOTOS + 'tratamento-ortodontia.jpg', alt: 'Ortodontista mostra um alinhador transparente a uma adolescente de aparelho fixo.', description: 'Aparelhos fixos e alinhadores com especialista em Ortodontia, do planejamento à contenção.' },
  { id: 'svc-estetica', icon: 'sparkles', title: 'Estética do sorriso', image: PHOTOS + 'tratamento-estetica.jpg', alt: 'Dentista compara a escala de cores com o sorriso de uma paciente que se olha no espelho.', description: 'Ajustes de cor e forma dos dentes, planejados para um sorriso natural e harmônico.' },
  { id: 'svc-restauracoes', icon: 'first-aid-kit', title: 'Restaurações', image: PHOTOS + 'tratamento-restauracoes.jpg', alt: 'Bandeja com resinas em tons de dente e instrumentos sobre campo verde-água.', description: 'Recuperação de dentes fraturados ou desgastados com resina na cor natural do dente.' },
  { id: 'svc-harmonizacao', icon: 'mood-smile', title: 'Harmonização orofacial', image: PHOTOS + 'tratamento-harmonizacao.jpg', alt: 'Dentista marca pontos de referência na linha da mandíbula de uma paciente.', description: 'Avaliação facial e procedimentos planejados para equilíbrio e naturalidade.' },
  { id: 'svc-preenchimento', icon: 'heart', title: 'Preenchimento labial', image: PHOTOS + 'tratamento-preenchimento-labial.jpg', alt: 'Close de um sorriso com lábios de contorno natural.', description: 'Contorno e volume dos lábios com resultado natural, definido junto com você.' },
  { id: 'svc-geral', icon: 'heart-handshake', title: 'Clínica geral', image: PHOTOS + 'tratamento-clinica-geral.jpg', alt: 'Dentista examina os dentes de um paciente com espelho clínico.', description: 'Avaliação, limpeza e tratamento de cáries para manter a saúde bucal em dia.' },
  { id: 'svc-prevencao', icon: 'shield-check', title: 'Prevenção', image: PHOTOS + 'tratamento-prevencao.jpg', alt: 'Dentista ensina escovação em um modelo de arcada para um pai e um filho.', description: 'Orientação de escovação e fio dental e consultas de rotina para toda a família.' },
];

const RESULTS = [
  { src: PHOTOS + 'antes-depois-ortodontia.jpg', label: 'Ortodontia', alt: 'Antes e depois: dentes desalinhados com aparelho e o sorriso alinhado ao final do tratamento.' },
  { src: PHOTOS + 'antes-depois-restauracao.jpg', label: 'Estética do sorriso', alt: 'Antes e depois: dente da frente fraturado e o sorriso recuperado.' },
  { src: PHOTOS + 'antes-depois-preenchimento-labial.jpg', label: 'Preenchimento labial', alt: 'Antes e depois de preenchimento labial com resultado natural.' },
  { src: PHOTOS + 'antes-depois-sorriso.jpg', label: 'Estética do sorriso', alt: 'Antes e depois de tratamento estético do sorriso.' },
];

function Hero() {
  const { Badge, SectionHeading, Button, Icon } = ds();
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <Badge size="lg" variant="outline" icon="dental">Atendimento para toda a família</Badge>
          <SectionHeading
            as="h1"
            id="hero-title"
            title="Seu *sorriso saudável* começa aqui"
            description="Ortodontia, estética do sorriso e harmonização orofacial, com um plano feito a partir da escuta atenta."
          />
          <div className="hero__actions">
            <Button size="lg" href="#servicos">Conheça os serviços</Button>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__arch" aria-hidden="true"></div>
          <span className="hero__spark hero__spark--lg" aria-hidden="true"><Icon name="sparkles" size={40} strokeWidth={1.5} /></span>
          <span className="hero__spark hero__spark--sm" aria-hidden="true"><Icon name="sparkles" size={22} strokeWidth={1.5} /></span>
          <img className="hero__portrait" src={PHOTOS + 'dra-thais-retrato.jpg'} alt="Dra. Thaís Gallina Frantz" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', clipPath: 'inset(0 round 50% 50% 18px 18px / 40% 40% 18px 18px)' }} />
          <div className="hero__credit">
            <span className="hero__credit-name">Dra. Thaís Gallina Frantz</span>
            <span className="hero__credit-meta">Especialista em Ortodontia · CRO 24969</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Seal({ onClick }) {
  const { Icon } = ds();
  return (
    <a className="seal" href="#agendar" aria-label="Agendar consulta" onClick={onClick}>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <defs><path id="seal-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"></path></defs>
        <text><textPath href="#seal-circle" textLength="230" lengthAdjust="spacing">AGENDE SUA CONSULTA • CONTATO • </textPath></text>
      </svg>
      <span className="seal__core"><Icon name="arrow-up-right" size={20} /></span>
    </a>
  );
}

function About({ onBook }) {
  const { SectionHeading, CheckList, Button, Icon } = ds();
  return (
    <section className="section about" id="sobre" aria-labelledby="about-title">
      <div className="container about__grid">
        <div className="about__media">
          <span className="about__spark about__spark--lg" aria-hidden="true"><Icon name="sparkles" size={44} strokeWidth={1.5} /></span>
          <span className="about__spark about__spark--sm" aria-hidden="true"><Icon name="sparkles" size={24} strokeWidth={1.5} /></span>
          <div className="about__main">
            <img src={PHOTOS + 'dra-thais-consulta.jpg'} alt="Dra. Thaís em atendimento no consultório" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', clipPath: 'inset(0 round 50% 50% 22px 22px / 34% 34% 22px 22px)' }} />
          </div>
          <Seal onClick={onBook} />
        </div>
        <div className="about__copy">
          <SectionHeading
            eyebrow="Sobre nós"
            id="about-title"
            title={'*Cuidado próximo*\nem cada etapa'}
            description="A Dra. Thaís Gallina Frantz, especialista em Ortodontia, atende toda a família e explica cada etapa do tratamento, da primeira consulta ao resultado."
          />
          <CheckList items={['Atendimento com hora marcada, sem pressa', 'Equipe que explica cada etapa do tratamento', 'Protocolos rigorosos de biossegurança']} />
          <Button href="#servicos">Conheça a clínica</Button>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { SectionHeading, ServiceCard, Button } = ds();
  return (
    <section className="section services" id="servicos" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading
          eyebrow="Nossos serviços"
          id="services-title"
          title={'*Tratamentos completos*\npara o seu sorriso'}
          actions={<Button href="#agendar">Agendar avaliação</Button>}
        />
        <div className="services__grid">
          {SERVICES.map((s) => (
            <ServiceCard
              key={s.id}
              title={s.title}
              description={s.description}
              icon={s.icon}
              href="#servicos"
              imageSrc={s.image}
              imageAlt={s.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  const { SectionHeading, Button, Badge, Modal } = ds();
  const [open, setOpen] = React.useState(null);
  return (
    <section className="section results" id="resultados" aria-labelledby="results-title">
      <div className="container">
        <SectionHeading
          eyebrow="Resultados"
          id="results-title"
          title={'*Sorrisos reais*\ntratados no consultório'}
          description="Antes e depois de pacientes da Dra. Thaís, publicados no Instagram @drathaisgallina."
          actions={<Button variant="secondary" icon="brand-instagram" iconPosition="start" href={INSTAGRAM_URL} target="_blank" rel="noopener">Seguir no Instagram</Button>}
        />
        <div className="results__grid">
          {RESULTS.map((r) => (
            <figure key={r.src} className="results__item">
              <button type="button" className="results__open" onClick={() => setOpen(r)} aria-label={'Ampliar: ' + r.alt}>
                <img src={r.src} alt="" loading="lazy" />
              </button>
              <figcaption className="results__caption"><Badge>{r.label}</Badge></figcaption>
            </figure>
          ))}
        </div>
      </div>
      <Modal open={!!open} onClose={() => setOpen(null)} title={open ? open.label : ''}>
        {open && <img className="results__full" src={open.src} alt={open.alt} />}
      </Modal>
    </section>
  );
}

function Testimonials() {
  const { SectionHeading, TestimonialCard, Button } = ds();
  return (
    <section className="section testimonials" id="depoimentos" aria-labelledby="testimonials-title">
      <div className="container">
        <SectionHeading
          eyebrow="Depoimentos"
          id="testimonials-title"
          title={'O que dizem\n*nossos pacientes*'}
          actions={<Button variant="secondary" icon="arrow-up-right" href={MAPS_URL} target="_blank" rel="noopener">Ver avaliações no Google</Button>}
        />
        <div className="testimonials__grid">
          {REVIEWS.map((r) => (
            <TestimonialCard key={r.name} quote={r.quote} name={r.name} detail="Avaliação no Google" rating={5} />
          ))}
        </div>
      </div>
    </section>
  );
}

function nowInClinic() {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Sao_Paulo', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(new Date());
  const get = (t) => (parts.find((p) => p.type === t) || {}).value;
  return { day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday')), time: get('hour') + ':' + get('minute') };
}

function OpeningHours() {
  const { Badge } = ds();
  const now = nowInClinic();
  const range = HOURS[now.day];
  const openNow = !!range && now.time >= range[0] && now.time < range[1];
  return (
    <div className="hours">
      <div className="hours__head">
        <h3 className="hours__title">Horário de atendimento</h3>
        <Badge tone={openNow ? 'primary' : 'neutral'} icon="clock">{openNow ? 'Aberto agora' : 'Fechado agora'}</Badge>
      </div>
      <dl className="hours__list">
        {[1, 2, 3, 4, 5, 6, 0].map((d) => (
          <div key={d} className={'hours__row' + (d === now.day ? ' hours__row--today' : '')}>
            <dt>{DAY_NAMES[d]}{d === now.day ? ' · hoje' : ''}</dt>
            <dd>{HOURS[d] ? HOURS[d][0] + ' – ' + HOURS[d][1] : 'Fechado'}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Contact({ onBook }) {
  const { SectionHeading, Button, Icon } = ds();
  return (
    <section className="section contact" id="contato" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div className="contact__info">
          <SectionHeading
            eyebrow="Contato"
            id="contact-title"
            title={'*Venha nos visitar*\nem Venâncio Aires'}
            description="Atendimento com hora marcada, de segunda a sábado."
          />
          <ul className="contact__list">
            <li><Icon name="map-pin" size={20} /><a href={MAPS_URL} target="_blank" rel="noopener">R. Osvaldo Aranha, 470 – Centro<br />Venâncio Aires – RS, 95800-000</a></li>
            <li><Icon name="phone" size={20} /><a href="tel:+5551992599231">(51) 99259-9231</a></li>
            <li><Icon name="brand-whatsapp" size={20} /><a href={WHATSAPP_URL} target="_blank" rel="noopener">Conversar no WhatsApp</a></li>
          </ul>
          <div className="contact__actions">
            <Button onClick={onBook}>Agendar consulta</Button>
            <Button variant="secondary" icon="map-pin" iconPosition="start" href={MAPS_URL} target="_blank" rel="noopener">Como chegar</Button>
          </div>
        </div>
        <OpeningHours />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <img className="footer__logo" src="assets/logo/thais-gallina-positivo-compacto.png" alt="Thais Gallina Consultório Odontológico" />
        <p className="footer__text">R. Osvaldo Aranha, 470 · Centro · Venâncio Aires – RS · (51) 99259-9231</p>
        <p className="footer__text">Responsável técnica: Dra. Thaís Gallina Frantz · CRO 24969</p>
        <p className="footer__text">© 2026 Thais Gallina Consultório Odontológico</p>
      </div>
    </footer>
  );
}
