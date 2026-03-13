/* ================================================
   INOVA PALAVRA — script.js
   Tradução bilingue, menu mobile corrigido,
   data de modificação e copyright dinâmico
   ================================================ */

const translations = {
  en: {
    "nav-home": "Home",
    "nav-about": "About",
    "nav-categories": "Categories",
    "nav-contact": "Contact",
    "art-author": "By Cardeal Felisberto",
    "footer-copy": "© 2026 Inova Palavra. All rights reserved.",
    "last-mod": "Last updated: ",
    "read-more": "Read More",
    "page-title": "Inova Palavra | Critical & Creative Writing",
    "hero-title": "Where Ideas Become Powerful Words",
    "hero-desc": "Critical essays, reflective chronicles, and thought-provoking content designed to inspire students, leaders, professionals, and communities.",
    "hero-btn": "Explore Articles",
    "recent-title": "Recent Chronicles",
    "about-page-title": "About | Inova Palavra",
    "about-title": "About Inova Palavra",
    "about-tagline": "\"Words as resistance, chronicles as mirrors of society.\"",
    "story-title": "Our Story",
    "story-text": "Inova Palavra was born from the desire to transform writing into a tool of justice and reflection. Created by Cardeal Felisberto, it is a platform where critical essays and chronicles confront silence and expose social realities in Mozambique.",
    "mission-title": "Mission",
    "mission-text": "To give voice to the marginalized, to question injustice, and to inspire change through words that carry both critique and hope.",
    "val1": "Clarity", "val1-desc": "Accessible language for all readers.",
    "val2": "Justice", "val2-desc": "Commitment to truth and fairness.",
    "val3": "Courage", "val3-desc": "Facing social issues with honesty.",
    "cat-page-title": "Categories | Inova Palavra",
    "cat-title": "Content Categories",
    "cat-society": "Society & Poverty",
    "cat-justice": "Justice & Inequality",
    "cat-youth": "Youth & Future",
    "cat-family": "Family & Conscience",
    "contact-page-title": "Contact | Inova Palavra",
    "contact-title": "Contact Us",
    "contact-desc": "We would love to hear your thoughts, feedback, or collaboration ideas.",
    "label-name": "Name",
    "label-email": "Email",
    "label-message": "Message",
    "send-btn": "Send Message",
    "art1-title": "The Market of Donations",
    "art2-title": "Justice Without Defense",
    "art3-title": "Youth Without Future",
    "art4-title": "How to Tell the Truth to a Child",
    "card1-title": "The Market of Donations",
    "card1-desc": "A critical reflection on how donated clothes turn into business, questioning dignity and solidarity.",
    "art1-p1": "Across Mozambique — from Maputo to Nampula — markets overflow with second-hand clothes imported from Europe and America. What should symbolize solidarity has been transformed into a business model. Donations meant to alleviate poverty have become the raw material of a trade that profits from the desperation of the poor.",
    "art1-p2": "This reality is not confined to one city. It is a national wound. In every Mozambican market, the same paradox unfolds: the poor buy because they have no alternative, while traders see opportunity in every bundle of discarded clothing.",
    "art1-p3": "This trade exposes the cruel logic of global inequality. Poverty itself becomes a market. Dignity is negotiated at the lowest possible price.",
    "art1-quote": "\"Charity that becomes business ceases to be charity. The true gesture of solidarity is the one that liberates, not the one that imprisons in dependence.\"",
    "art1-p4": "The real critique is against the global machinery that turns charity into commerce. Mozambique has become the final destination of a cycle where generosity is corrupted.",
    "card2-title": "Justice Without Defense",
    "card2-desc": "Exploring how poverty and lack of legal support lead innocent people to accept guilt in court.",
    "art2-p1": "In Mozambique, justice often arrives without defense. In courtrooms from Maputo to provincial towns, the poor stand accused with no lawyer by their side.",
    "art2-p2": "It is a cruel paradox: the Constitution promises equality before the law, yet in practice, justice is a privilege reserved for those who can afford it.",
    "art2-quote": "\"A justice system that condemns without defense is not justice. It is violence carried out in the name of law.\"",
    "art2-p3": "Every day, men and women are condemned not because of what they did, but because of what they lacked: a lawyer, a voice, a chance. The justice system, instead of protecting the vulnerable, becomes a machine that crushes them.",
    "art2-p4": "The courtroom becomes a theater where guilt is scripted in advance. This is not justice — it is survival. For the poor, the choice is between fighting a battle they cannot win or accepting guilt to shorten their suffering.",
    "art2-p5": "Justice without defense is not justice at all. It is punishment disguised as law. It is oppression disguised as order. In Mozambique, the poor are not only economically excluded — they are legally abandoned.",
    "card3-title": "Youth Without Future",
    "card3-desc": "A reflection on the frustration of young graduates facing unemployment and closed opportunities.",
    "art3-p1": "In Mozambique, the youth carry diplomas but no future. Thousands of young graduates wander the streets with degrees in hand, searching for jobs that do not exist.",
    "art3-p2": "Families sacrifice everything to send their children to school, believing education will break the cycle of poverty.",
    "art3-p3": "Everywhere, the signs of despair are visible. Young graduates sell phone credit on the streets or remain idle at home. Their knowledge is wasted, their energy suffocated, and their dignity eroded. Mozambique's youth are not without talent — they are without opportunity.",
    "art3-quote": "\"A nation that abandons its youth abandons its future. Education without opportunity is not hope — it is betrayal.\"",
    "art3-p4": "This is not just an economic failure; it is a moral betrayal. A country that educates its youth but refuses to employ them is a country that kills its own future.",
    "art3-p5": "Mozambique must decide whether to invest in its young or to bury its future under the rubble of neglect. A system that allows corruption to dictate opportunity while talent is ignored is a system that has already failed.",
    "card4-title": "How to Tell the Truth to a Child",
    "card4-desc": "A mother's hidden secret becomes a moral trial between silence and redemption, showing that love survives.",
    "art4-p1": "There are secrets that mothers carry in silence, secrets so heavy that they bend the soul. Among them lies one of the most painful confessions: that at some moment of despair, she attempted to end the life of the very child she now embraces.",
    "art4-p2": "This dilemma is the battlefield between conscience and silence. For years, the mother lives with this secret chained within her. Each smile, each achievement of the child carries not only pride, but also the haunting echo of a past decision.",
    "art4-p3": "Why do women find themselves in such places? Often, it is not out of hatred, but fear, poverty, or loneliness. A pregnancy can arrive like a storm, and in that fragile moment, a woman may believe that ending it is her only escape.",
    "art4-quote": "\"Truth is not only a burden to be carried but also a bridge to healing. When a mother finds the courage to reveal the truth, space opens for reconciliation.\"",
    "art4-p4": "Should the truth be told? Speaking means risking rejection, but silence is its own prison. To confess requires rare courage — the courage to be misunderstood in the name of truth. But truth, when spoken with love, has the power to heal.",
    "art4-p5": "In the end, what matters most is that love triumphed over despair. The child is here, alive and loved. Telling the truth is not about reliving shame, but transforming guilt into a testimony of resilience and grace."
  },
  pt: {
    "nav-home": "Início",
    "nav-about": "Sobre",
    "nav-categories": "Categorias",
    "nav-contact": "Contacto",
    "art-author": "Por Cardeal Felisberto",
    "footer-copy": "© 2026 Inova Palavra. Todos os direitos reservados.",
    "last-mod": "Última atualização: ",
    "read-more": "Ler Mais",
    "page-title": "Inova Palavra | Plataforma de Escrita Crítica",
    "hero-title": "Onde Ideias se Tornam Palavras Poderosas",
    "hero-desc": "Ensaios críticos, crónicas reflexivas e conteúdos instigantes desenhados para inspirar estudantes, líderes, profissionais e comunidades.",
    "hero-btn": "Explorar Artigos",
    "recent-title": "Crónicas Recentes",
    "about-page-title": "Sobre | Inova Palavra",
    "about-title": "Sobre a Inova Palavra",
    "about-tagline": "\"Palavras como resistência, crónicas como espelhos da sociedade.\"",
    "story-title": "A Nossa História",
    "story-text": "A Inova Palavra nasceu do desejo de transformar a escrita numa ferramenta de justiça e reflexão. Criada por Cardeal Felisberto, é uma plataforma onde ensaios críticos e crónicas confrontam o silêncio e expõem as realidades sociais em Moçambique.",
    "mission-title": "Missão",
    "mission-text": "Dar voz aos marginalizados, questionar a injustiça e inspirar a mudança através de palavras que carregam tanto a crítica como a esperança.",
    "val1": "Clareza", "val1-desc": "Linguagem acessível para todos os leitores.",
    "val2": "Justiça", "val2-desc": "Compromisso com a verdade e a equidade.",
    "val3": "Coragem", "val3-desc": "Enfrentar questões sociais com honestidade.",
    "cat-page-title": "Categorias | Inova Palavra",
    "cat-title": "Categorias de Conteúdo",
    "cat-society": "Sociedade & Pobreza",
    "cat-justice": "Justiça & Desigualdade",
    "cat-youth": "Juventude & Futuro",
    "cat-family": "Família & Consciência",
    "contact-page-title": "Contacto | Inova Palavra",
    "contact-title": "Contacte-nos",
    "contact-desc": "Gostaríamos de ouvir as suas opiniões, comentários ou ideias de colaboração.",
    "label-name": "Nome",
    "label-email": "E-mail",
    "label-message": "Mensagem",
    "send-btn": "Enviar Mensagem",
    "art1-title": "O Mercado das Doações",
    "art2-title": "Justiça Sem Defesa",
    "art3-title": "Juventude Sem Futuro",
    "art4-title": "Como Dizer a Verdade a uma Criança",
    "card1-title": "O Mercado das Doações",
    "card1-desc": "Uma reflexão crítica sobre como roupas doadas se transformam em negócio, questionando a dignidade e a solidariedade.",
    "art1-p1": "Por todo o Moçambique — de Maputo a Nampula — os mercados transbordam de roupa em segunda mão importada da Europa e América. O que deveria simbolizar solidariedade transformou-se num modelo de negócio.",
    "art1-p2": "Esta realidade não se limita a uma cidade; é uma ferida nacional. Em cada mercado moçambicano, o mesmo paradoxo: o pobre compra porque não tem alternativa.",
    "art1-p3": "Este comércio expõe a lógica cruel da desigualdade global. A própria pobreza torna-se um mercado. A dignidade é negociada ao preço mais baixo possível.",
    "art1-quote": "\"A caridade que se torna negócio deixa de ser caridade. O verdadeiro gesto de solidariedade é aquele que liberta, não o que aprisiona na dependência.\"",
    "art1-p4": "A crítica real é contra a maquinaria global que transforma caridade em comércio. Moçambique tornou-se o destino final de um ciclo onde a generosidade é corrompida.",
    "card2-title": "Justiça Sem Defesa",
    "card2-desc": "Explorando como a pobreza e a falta de apoio jurídico levam pessoas inocentes a aceitarem a culpa em tribunal.",
    "art2-p1": "Em Moçambique, a justiça chega muitas vezes sem defesa. Nos tribunais, de Maputo às cidades provinciais, os pobres sentam-se no banco dos réus sem um advogado ao seu lado.",
    "art2-p2": "É um paradoxo cruel: a Constituição promete igualdade perante a lei, mas a justiça é um privilégio reservado aos que podem pagar.",
    "art2-quote": "\"Um sistema de justiça que condena sem defesa não é justiça. É violência exercida em nome da lei.\"",
    "art2-p3": "Todos os dias, homens e mulheres são condenados não pelo que fizeram, mas pelo que lhes faltou: um advogado, uma voz, uma oportunidade. O sistema judicial, em vez de proteger os vulneráveis, torna-se numa máquina que os esmaga.",
    "art2-p4": "O tribunal torna-se um teatro onde a culpa é escrita com antecedência. Para os pobres, a escolha é entre travar uma batalha que não podem vencer ou aceitar a culpa para encurtar o sofrimento.",
    "art2-p5": "Justiça sem defesa não é justiça de todo. É castigo disfarçado de lei. É opressão disfarçada de ordem. Em Moçambique, os pobres não são apenas excluídos economicamente — são abandonados legalmente.",
    "card3-title": "Juventude Sem Futuro",
    "card3-desc": "Uma reflexão sobre a frustração de jovens licenciados que enfrentam o desemprego e a falta de oportunidades.",
    "art3-p1": "Em Moçambique, os jovens carregam diplomas, mas não têm futuro. Milhares de graduados vagueiam pelas ruas com certificados na mão, à procura de empregos que não existem.",
    "art3-p2": "As famílias sacrificam tudo para educar os filhos, acreditando que a escola quebrará o ciclo da pobreza.",
    "art3-p3": "Em todo o lado, os sinais do desespero são visíveis. Jovens licenciados vendem crédito de telemóvel nas ruas ou permanecem ociosos em casa. O seu conhecimento é desperdiçado, a sua energia sufocada e a sua dignidade erodida. A juventude de Moçambique não é sem talento — é sem oportunidade.",
    "art3-quote": "\"Uma nação que abandona a sua juventude abandona o seu futuro. Educação sem oportunidade não é esperança — é traição.\"",
    "art3-p4": "Não é apenas um fracasso económico; é uma traição moral. Um país que educa os seus jovens mas se recusa a empregá-los é um país que mata o seu próprio futuro.",
    "art3-p5": "Moçambique deve decidir se investe nos seus jovens ou enterra o seu futuro. Um sistema que permite que a corrupção dite a oportunidade enquanto o talento é ignorado é um sistema que já falhou.",
    "card4-title": "Como Dizer a Verdade a uma Criança",
    "card4-desc": "O segredo escondido de uma mãe torna-se um julgamento moral entre o silêncio e a redenção, mostrando que o amor sobrevive.",
    "art4-p1": "Há segredos que as mães carregam em silêncio, segredos tão pesados que curvam a alma. Entre eles está uma das confissões mais dolorosas: que em algum momento de desespero, ela tentou acabar com a vida do próprio filho que agora abraça.",
    "art4-p2": "Este dilema é o campo de batalha entre a consciência e o silêncio. Durante anos, a mãe vive com este segredo acorrentado dentro de si. Cada sorriso, cada conquista do filho carrega não só orgulho, mas também o eco assombroso de uma decisão passada.",
    "art4-p3": "Por que razão as mulheres se encontram em tais lugares? Muitas vezes, não é por ódio, mas por medo, pobreza ou solidão. Uma gravidez pode chegar como uma tempestade e, nesse momento frágil, uma mulher pode acreditar que acabar com ela é a sua única saída.",
    "art4-quote": "\"A verdade não é apenas um fardo, mas também uma ponte para a cura. Quando uma mãe encontra coragem para revelar a verdade, abre-se espaço para a reconciliação.\"",
    "art4-p4": "No final, o que importa é que o amor triunfou sobre o desespero. A criança está viva e é amada."
  }
};

let currentLang = 'en';

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'pt' : 'en';
  document.body.style.opacity = 0.5;
  setTimeout(() => {
    updateContent();
    document.body.style.opacity = 1;
  }, 150);
}

function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      if (el.tagName === 'TITLE') {
        document.title = translations[currentLang][key];
      } else {
        el.innerText = translations[currentLang][key];
      }
    }
  });

  const langBtn = document.getElementById('lang-btn');
  if (langBtn) {
    langBtn.innerText = currentLang === 'en' ? 'EN | PT' : 'PT | EN';
  }
  updateFooter();
}

function updateFooter() {
  const copyEl = document.getElementById('copyright-text');
  const modEl = document.getElementById('last-modified');
  const currentYear = new Date().getFullYear();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const lastModDate = new Date(document.lastModified).toLocaleDateString(
    currentLang === 'en' ? 'en-GB' : 'pt-PT', options
  );
  if (copyEl) copyEl.innerText = translations[currentLang]['footer-copy'].replace('2026', currentYear);
  if (modEl) modEl.innerText = translations[currentLang]['last-mod'] + lastModDate;
}

/* ================================================
   MENU HAMBÚRGUER — CORRIGIDO
   
   Problemas anteriores:
   1. O overlay usava 'click' que disparava antes da
      navegação do link (3 cliques necessários)
   2. O lang-btn dentro do nav fechava o menu ao clicar
   
   Solução:
   - Overlay usa 'mousedown'/'touchstart' para fechar
     APENAS quando o clique é no overlay em si
   - Links usam navegação directa sem preventDefault
   - Lang-btn tem stopPropagation para não fechar o menu
   ================================================ */
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('nav');
  const overlay = document.getElementById('nav-overlay');

  if (!hamburger || !nav) return;

  // O botão X já existe no HTML — apenas seleccionamos
  const closeBtn = nav.querySelector('.nav-close');

  function openMenu() {
    nav.classList.add('open');
    hamburger.classList.add('open');
    if (overlay) overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    nav.classList.remove('open');
    hamburger.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Abrir com o hambúrguer
  hamburger.addEventListener('click', function (e) {
    e.stopPropagation();
    if (nav.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Fechar com o botão X
  closeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    closeMenu();
  });

  // Fechar ao clicar no overlay
  // Usamos 'mousedown' e 'touchstart' para antecipar o 'click'
  // e evitar que o overlay interfira com os links
  if (overlay) {
    overlay.addEventListener('mousedown', function (e) {
      if (e.target === overlay) closeMenu();
    });
    overlay.addEventListener('touchstart', function (e) {
      if (e.target === overlay) closeMenu();
    }, { passive: true });
  }

  // FIX PRINCIPAL: Links de navegação
  // O problema dos 3 cliques era causado pelo overlay absorver
  // o primeiro clique. Agora o overlay fecha no mousedown,
  // e o link recebe o click normalmente.
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
      // Apenas fechar o menu; NÃO preventDefault
      // Assim a navegação acontece normalmente
      closeMenu();
      // A navegação para href acontece sem necessidade
      // de cliques extra
    });
  });

  // FIX: Botão de língua — não fechar o menu ao traduzir
  const langBtn = nav.querySelector('#lang-btn');
  if (langBtn) {
    langBtn.addEventListener('click', function (e) {
      e.stopPropagation(); // Não deixa o clique chegar ao overlay
      toggleLanguage();
    });
  }

  // Fechar com tecla Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      closeMenu();
    }
  });
}

/* ================================
   INICIALIZAÇÃO
   ================================ */
document.addEventListener('DOMContentLoaded', () => {
  updateContent();
  initHamburger();
  // NOTE: lang-btn listener is handled inside initHamburger()
  // Do NOT add another listener here — it would fire toggleLanguage TWICE
  // (once to PT, immediately back to EN = appears to do nothing)
});
