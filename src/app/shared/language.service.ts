import { Injectable, signal } from '@angular/core';

export type Language = 'pt' | 'en' | 'es';

const STORAGE_KEY = 'portfolio_lang';
const SUPPORTED_LANGUAGES: Language[] = ['pt', 'en', 'es'];

const translations: Record<Language, Record<string, string>> = {
  pt: {
    'brand.role': 'Full stack',
    'nav.label': 'Navegação principal',
    'nav.skip': 'Pular para o conteúdo',
    'nav.projects': 'Projetos',
    'nav.experience': 'Experiência',
    'nav.contact': 'Contato',
    'hero.eyebrow': 'Desenvolvedor full stack',
    'hero.title': 'Sites, sistemas e integrações que funcionam no dia a dia do negócio.',
    'hero.lead':
      'Construo desde sites institucionais em Next.js até telas e APIs integradas ao ERP Protheus. Do layout ao deploy, com foco em código simples de manter.',
    'hero.projects': 'Ver projetos',
    'hero.cv': 'Baixar currículo',
    'hero.photoAlt': 'Foto de Michel Alves',
    'hero.language': 'Idioma',
    'hero.availableTitle': 'Disponível',
    'hero.available': 'Aberto a projetos freelance e a oportunidades CLT/PJ.',
    'hero.talk': 'Vamos conversar',
    'stack.title': 'Stack',
    'stack.front': 'Front-end',
    'stack.back': 'Back-end',
    'stack.erp': 'ERP',
    'projects.title': 'Projetos',
    'projects.lead': 'Uma seleção de trabalhos publicados: sites entregues para clientes e telas web ligadas ao Protheus.',
    'projects.group.client': 'Sites para clientes',
    'projects.group.erp': 'Sistemas e dashboards ERP',
    'projects.memorial':
      'Site institucional com planos, serviços, galeria do crematório e atendimento direto pelo WhatsApp.',
    'projects.santoanjo':
      'Site one-page com serviços, plano preventivo e canais de atendimento 24h, otimizado para busca local.',
    'projects.confianca':
      'Site institucional seguindo o mesmo modelo dos anteriores, adaptado à identidade da funerária.',
    'projects.mural':
      'Plataforma para funerárias publicarem memoriais online, com homenagens, velas virtuais, moderação e artes para impressão.',
    'projects.dashboardrh':
      'Painel de indicadores de RH em PO-UI, consumindo dados do Protheus via REST.',
    'projects.invoice':
      'Relatório de faturamento consolidado, com filtros e leitura facilitada para operação e gestão.',
    'projects.visit': 'Visitar site',
    'projects.demo': 'Demo',
    'projects.source': 'Código',
    'projects.newTab': 'abre em nova aba',
    'exp.title': 'Experiência',
    'exp.tcp.role': 'Programador ADVPL',
    'exp.tcp.period': 'Atual',
    'exp.tcp.desc':
      'Integrações do Protheus com APIs de terceiros, endpoints REST em TLPP, telas PO-UI, relatórios e manutenção evolutiva.',
    'exp.freela.company': 'Freelance',
    'exp.freela.role': 'Desenvolvedor web',
    'exp.freela.period': 'Atual',
    'exp.freela.desc':
      'Sites institucionais e sistemas web para pequenas empresas, do levantamento ao deploy e suporte.',
    'exp.elevacao.role': 'Analista de Suporte Protheus',
    'exp.elevacao.period': 'Anterior',
    'exp.elevacao.desc':
      'Suporte em processos fiscais e operacionais: emissão de nota, importação de XML e rotinas do ERP.',
    'exp.rdp.role': 'Programador PHP',
    'exp.rdp.period': 'Anterior',
    'exp.rdp.desc':
      'Desenvolvimento em PHP e JavaScript, manutenção de sistemas legados, suporte técnico e implantação TOTVS.',
    'exp.education': 'Formação',
    'exp.educationText': 'Análise e Desenvolvimento de Sistemas — Faculdade Camões (2020–2022)',
    'exp.howTitle': 'Como eu trabalho',
    'exp.how1': 'Entendo o processo do negócio antes de escrever código.',
    'exp.how2': 'Entrego em etapas curtas, com algo funcionando para validar.',
    'exp.how3': 'Deixo o projeto documentado e fácil de manter depois.',
    'contact.title': 'Tem um projeto ou uma vaga em mente?',
    'contact.lead': 'Conte em poucas linhas o que você precisa e eu retorno com os próximos passos.',
    'contact.whats': 'Chamar no WhatsApp',
    'contact.email': 'Enviar e-mail',
    'contact.whatsMessage': 'Olá Michel, vi seu portfólio e gostaria de conversar.',
    'contact.mailSubject': 'Contato pelo portfólio',
    'contact.mailBody': 'Olá Michel, vi seu portfólio e gostaria de conversar.',
    'footer.text': 'Feito com Angular.'
  },
  en: {
    'brand.role': 'Full stack',
    'nav.label': 'Main navigation',
    'nav.skip': 'Skip to content',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Full stack developer',
    'hero.title': 'Websites, systems and integrations that work in day-to-day business.',
    'hero.lead':
      'I build everything from Next.js business websites to screens and APIs integrated with the Protheus ERP. From layout to deploy, focused on code that is easy to maintain.',
    'hero.projects': 'View projects',
    'hero.cv': 'Download resume',
    'hero.photoAlt': 'Photo of Michel Alves',
    'hero.language': 'Language',
    'hero.availableTitle': 'Available',
    'hero.available': 'Open to freelance projects and full-time or contract roles.',
    'hero.talk': "Let's talk",
    'stack.title': 'Stack',
    'stack.front': 'Front-end',
    'stack.back': 'Back-end',
    'stack.erp': 'ERP',
    'projects.title': 'Projects',
    'projects.lead': 'A selection of published work: websites delivered to clients and web screens connected to Protheus.',
    'projects.group.client': 'Client websites',
    'projects.group.erp': 'ERP systems and dashboards',
    'projects.memorial':
      'Business website with plans, services, crematorium gallery and direct WhatsApp support.',
    'projects.santoanjo':
      'One-page website with services, pre-need plan and 24h support channels, optimized for local search.',
    'projects.confianca':
      'Business website following the same model as the previous ones, adapted to the brand identity.',
    'projects.mural':
      'Platform for funeral homes to publish online memorials, with tributes, virtual candles, moderation and printable artwork.',
    'projects.dashboardrh':
      'HR KPI dashboard built with PO-UI, consuming Protheus data through REST.',
    'projects.invoice':
      'Consolidated billing report with filters and clearer reading for operations and management.',
    'projects.visit': 'Visit website',
    'projects.demo': 'Demo',
    'projects.source': 'Source',
    'projects.newTab': 'opens in a new tab',
    'exp.title': 'Experience',
    'exp.tcp.role': 'ADVPL Programmer',
    'exp.tcp.period': 'Current',
    'exp.tcp.desc':
      'Protheus integrations with third-party APIs, TLPP REST endpoints, PO-UI screens, reports and ongoing improvements.',
    'exp.freela.company': 'Freelance',
    'exp.freela.role': 'Web developer',
    'exp.freela.period': 'Current',
    'exp.freela.desc':
      'Business websites and web systems for small companies, from requirements to deploy and support.',
    'exp.elevacao.role': 'Protheus Support Analyst',
    'exp.elevacao.period': 'Previous',
    'exp.elevacao.desc':
      'Support for fiscal and operational processes: invoice issuing, XML import and ERP routines.',
    'exp.rdp.role': 'PHP Programmer',
    'exp.rdp.period': 'Previous',
    'exp.rdp.desc':
      'PHP and JavaScript development, legacy system maintenance, technical support and TOTVS implementation.',
    'exp.education': 'Education',
    'exp.educationText': 'Systems Analysis and Development — Camões College (2020–2022)',
    'exp.howTitle': 'How I work',
    'exp.how1': 'I understand the business process before writing code.',
    'exp.how2': 'I deliver in short steps, with something working to validate.',
    'exp.how3': 'I leave the project documented and easy to maintain.',
    'contact.title': 'Have a project or a role in mind?',
    'contact.lead': 'Tell me in a few lines what you need and I will get back with the next steps.',
    'contact.whats': 'Message on WhatsApp',
    'contact.email': 'Send e-mail',
    'contact.whatsMessage': 'Hi Michel, I saw your portfolio and would like to talk.',
    'contact.mailSubject': 'Contact from portfolio',
    'contact.mailBody': 'Hi Michel, I saw your portfolio and would like to talk.',
    'footer.text': 'Built with Angular.'
  },
  es: {
    'brand.role': 'Full stack',
    'nav.label': 'Navegación principal',
    'nav.skip': 'Saltar al contenido',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contacto',
    'hero.eyebrow': 'Desarrollador full stack',
    'hero.title': 'Sitios, sistemas e integraciones que funcionan en el día a día del negocio.',
    'hero.lead':
      'Construyo desde sitios institucionales en Next.js hasta pantallas y APIs integradas al ERP Protheus. Del diseño al deploy, con foco en código fácil de mantener.',
    'hero.projects': 'Ver proyectos',
    'hero.cv': 'Descargar CV',
    'hero.photoAlt': 'Foto de Michel Alves',
    'hero.language': 'Idioma',
    'hero.availableTitle': 'Disponible',
    'hero.available': 'Abierto a proyectos freelance y a oportunidades de empleo o contrato.',
    'hero.talk': 'Hablemos',
    'stack.title': 'Stack',
    'stack.front': 'Front-end',
    'stack.back': 'Back-end',
    'stack.erp': 'ERP',
    'projects.title': 'Proyectos',
    'projects.lead': 'Una selección de trabajos publicados: sitios entregados a clientes y pantallas web conectadas a Protheus.',
    'projects.group.client': 'Sitios para clientes',
    'projects.group.erp': 'Sistemas y dashboards ERP',
    'projects.memorial':
      'Sitio institucional con planes, servicios, galería del crematorio y atención directa por WhatsApp.',
    'projects.santoanjo':
      'Sitio one-page con servicios, plan preventivo y canales de atención 24h, optimizado para búsqueda local.',
    'projects.confianca':
      'Sitio institucional con el mismo modelo de los anteriores, adaptado a la identidad de la funeraria.',
    'projects.mural':
      'Plataforma para que funerarias publiquen memoriales online, con homenajes, velas virtuales, moderación y artes para imprimir.',
    'projects.dashboardrh':
      'Panel de indicadores de RRHH en PO-UI, consumiendo datos de Protheus vía REST.',
    'projects.invoice':
      'Reporte de facturación consolidado, con filtros y lectura más clara para operación y gestión.',
    'projects.visit': 'Visitar sitio',
    'projects.demo': 'Demo',
    'projects.source': 'Código',
    'projects.newTab': 'abre en una nueva pestaña',
    'exp.title': 'Experiencia',
    'exp.tcp.role': 'Programador ADVPL',
    'exp.tcp.period': 'Actual',
    'exp.tcp.desc':
      'Integraciones de Protheus con APIs de terceros, endpoints REST en TLPP, pantallas PO-UI, reportes y mantenimiento evolutivo.',
    'exp.freela.company': 'Freelance',
    'exp.freela.role': 'Desarrollador web',
    'exp.freela.period': 'Actual',
    'exp.freela.desc':
      'Sitios institucionales y sistemas web para pequeñas empresas, del relevamiento al deploy y soporte.',
    'exp.elevacao.role': 'Analista de Soporte Protheus',
    'exp.elevacao.period': 'Anterior',
    'exp.elevacao.desc':
      'Soporte en procesos fiscales y operativos: emisión de facturas, importación de XML y rutinas del ERP.',
    'exp.rdp.role': 'Programador PHP',
    'exp.rdp.period': 'Anterior',
    'exp.rdp.desc':
      'Desarrollo en PHP y JavaScript, mantenimiento de sistemas legados, soporte técnico e implantación TOTVS.',
    'exp.education': 'Formación',
    'exp.educationText': 'Análisis y Desarrollo de Sistemas — Facultad Camões (2020–2022)',
    'exp.howTitle': 'Cómo trabajo',
    'exp.how1': 'Entiendo el proceso del negocio antes de escribir código.',
    'exp.how2': 'Entrego en etapas cortas, con algo funcionando para validar.',
    'exp.how3': 'Dejo el proyecto documentado y fácil de mantener.',
    'contact.title': '¿Tienes un proyecto o una vacante en mente?',
    'contact.lead': 'Cuéntame en pocas líneas qué necesitas y te respondo con los próximos pasos.',
    'contact.whats': 'Escribir por WhatsApp',
    'contact.email': 'Enviar e-mail',
    'contact.whatsMessage': 'Hola Michel, vi tu portafolio y me gustaría conversar.',
    'contact.mailSubject': 'Contacto desde portafolio',
    'contact.mailBody': 'Hola Michel, vi tu portafolio y me gustaría conversar.',
    'footer.text': 'Hecho con Angular.'
  }
};

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Language>(this.getInitialLanguage());

  setLanguage(language: Language): void {
    this.lang.set(language);
    this.persistLanguage(language);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language === 'pt' ? 'pt-BR' : language;
    }
  }

  t(key: string): string {
    return translations[this.lang()][key] ?? translations.pt[key] ?? key;
  }

  private getInitialLanguage(): Language {
    const stored = this.readStoredLanguage();
    if (stored) {
      return stored;
    }

    if (typeof navigator !== 'undefined') {
      const browserLanguage = navigator.language.toLowerCase();
      if (browserLanguage.startsWith('es')) return 'es';
      if (browserLanguage.startsWith('en')) return 'en';
    }

    return 'pt';
  }

  private readStoredLanguage(): Language | null {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      if (value && SUPPORTED_LANGUAGES.includes(value as Language)) {
        return value as Language;
      }
    } catch {
      return null;
    }

    return null;
  }

  private persistLanguage(language: Language): void {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Ignore storage errors in restricted environments.
    }
  }
}
