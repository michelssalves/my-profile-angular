import { Injectable, signal } from '@angular/core';

export type Language = 'pt' | 'en' | 'es';

const STORAGE_KEY = 'portfolio_lang';
const SUPPORTED_LANGUAGES: Language[] = ['pt', 'en', 'es'];

const translations: Record<Language, Record<string, string>> = {
  pt: {
    'brand.role': 'Desenvolvedor',
    'nav.about': 'Sobre',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    'hero.lead':
      'Programador ADVPL e desenvolvedor full stack com experiência em Protheus, Angular, PHP e integrações com APIs.',
    'hero.projects': 'Ver projetos',
    'hero.cv': 'Baixar currículo',
    'hero.contact': 'Falar comigo',
    'about.title': 'Sobre',
    'about.text':
      'Profissional com atuação em desenvolvimento e sustentação de sistemas corporativos, com foco em Protheus, integrações com APIs e aplicações web.',
    'about.education': 'Formação',
    'about.educationText':
      'Análise e Desenvolvimento de Sistemas, Faculdade Camões (Jan/2020 - Jul/2022).',
    'about.timeline': 'Experiência',
    'about.tcp.role': 'Programador ADVPL',
    'about.tcp.period': 'Atual',
    'about.tcp.desc':
      'Integrações Protheus com APIs de terceiros, relatórios e manutenção corretiva/evolutiva.',
    'about.elevacao.role': 'Analista de Suporte Protheus',
    'about.elevacao.period': 'Anterior',
    'about.elevacao.desc':
      'Suporte ao usuário em processos fiscais e operacionais: emissão de nota, importação XML e rotinas de operação.',
    'about.rdp.role': 'Programador PHP',
    'about.rdp.period': 'Anterior',
    'about.rdp.desc':
      'Desenvolvimento em PHP/JavaScript, manutenção de legado, suporte técnico e implantação TOTVS.',
    'about.results': 'Resultados',
    'about.result1': 'Integrações corporativas entregues com foco em estabilidade de operação.',
    'about.result2': 'Relatórios orientados à gestão para apoiar decisão e acompanhamento de indicadores.',
    'about.result3': 'Suporte e evolução contínua em ambiente Protheus de missão crítica.',
    'skills.title': 'Habilidades',
    'skills.api': 'Integração com APIs REST',
    'skills.support': 'Suporte e manutenção de sistemas corporativos',
    'projects.title': 'Projetos',
    'projects.p1':
      'Painel para acompanhamento de indicadores de RH com foco em visualização de dados e apoio à tomada de decisão.',
    'projects.p2':
      'Relatórios de faturamento com consolidação de informações e melhor leitura para operação e gestão.',
    'projects.p3title': 'Integrações Protheus com API de terceiros',
    'projects.p3':
      'Desenvolvimento de integrações para troca de dados entre ERP e sistemas externos, com manutenção e evolução contínua.',
    'projects.open': 'Demo',
    'projects.source': 'GitHub',
    'contact.title': 'Contato',
    'contact.rate': 'Valor/hora',
    'contact.whats': 'WhatsApp',
    'contact.email': 'E-mail',
    'contact.whatsMessage': 'Olá Michel, tudo bem?',
    'contact.mailSubject': 'Contato pelo portfólio',
    'contact.mailBody': 'Olá Michel, tudo bem?'
  },
  en: {
    'brand.role': 'Developer',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.lead':
      'ADVPL programmer and full stack developer with experience in Protheus, Angular, PHP and API integrations.',
    'hero.projects': 'View projects',
    'hero.cv': 'Download resume',
    'hero.contact': 'Contact me',
    'about.title': 'About',
    'about.text':
      'Professional focused on development and maintenance of enterprise systems, with emphasis on Protheus, API integrations and web applications.',
    'about.education': 'Education',
    'about.educationText':
      'Systems Analysis and Development, Camoes College (Jan/2020 - Jul/2022).',
    'about.timeline': 'Experience',
    'about.tcp.role': 'ADVPL Programmer',
    'about.tcp.period': 'Current',
    'about.tcp.desc':
      'Protheus integrations with third-party APIs, reports, and corrective/evolutionary maintenance.',
    'about.elevacao.role': 'Protheus Support Analyst',
    'about.elevacao.period': 'Previous',
    'about.elevacao.desc':
      'User support in fiscal/operational processes: invoice issuing, XML import, and routine operations.',
    'about.rdp.role': 'PHP Programmer',
    'about.rdp.period': 'Previous',
    'about.rdp.desc':
      'PHP/JavaScript development, legacy maintenance, technical support, and TOTVS implementation.',
    'about.results': 'Highlights',
    'about.result1': 'Enterprise integrations delivered with strong operational stability.',
    'about.result2': 'Management-oriented reports to support decisions and KPI tracking.',
    'about.result3': 'Continuous support and evolution in mission-critical Protheus environments.',
    'skills.title': 'Skills',
    'skills.api': 'REST API Integration',
    'skills.support': 'Support and maintenance of enterprise systems',
    'projects.title': 'Projects',
    'projects.p1':
      'HR dashboard for KPI monitoring with focus on data visualization and decision support.',
    'projects.p2':
      'Billing reports with consolidated information and improved readability for operations and management.',
    'projects.p3title': 'Protheus Integrations with Third-Party APIs',
    'projects.p3':
      'Integration development for data exchange between ERP and external systems, with ongoing maintenance and improvements.',
    'projects.open': 'Demo',
    'projects.source': 'GitHub',
    'contact.title': 'Contact',
    'contact.rate': 'Hourly rate',
    'contact.whats': 'WhatsApp',
    'contact.email': 'E-mail',
    'contact.whatsMessage': 'Hi Michel, how are you?',
    'contact.mailSubject': 'Contact from portfolio',
    'contact.mailBody': 'Hi Michel, how are you?'
  },
  es: {
    'brand.role': 'Desarrollador',
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'hero.lead':
      'Programador ADVPL y desarrollador full stack con experiencia en Protheus, Angular, PHP e integraciones con APIs.',
    'hero.projects': 'Ver proyectos',
    'hero.cv': 'Descargar CV',
    'hero.contact': 'Hablar conmigo',
    'about.title': 'Sobre mí',
    'about.text':
      'Profesional enfocado en desarrollo y mantenimiento de sistemas corporativos, con foco en Protheus, integraciones con APIs y aplicaciones web.',
    'about.education': 'Formación',
    'about.educationText':
      'Análisis y Desarrollo de Sistemas, Facultad Camões (Ene/2020 - Jul/2022).',
    'about.timeline': 'Experiencia',
    'about.tcp.role': 'Programador ADVPL',
    'about.tcp.period': 'Actual',
    'about.tcp.desc':
      'Integraciones Protheus con APIs de terceros, reportes y mantenimiento correctivo/evolutivo.',
    'about.elevacao.role': 'Analista de Soporte Protheus',
    'about.elevacao.period': 'Anterior',
    'about.elevacao.desc':
      'Soporte al usuario en procesos fiscales y operativos: emisión de factura, importación XML y rutinas de operación.',
    'about.rdp.role': 'Programador PHP',
    'about.rdp.period': 'Anterior',
    'about.rdp.desc':
      'Desarrollo en PHP/JavaScript, mantenimiento de legado, soporte técnico e implantación TOTVS.',
    'about.results': 'Resultados',
    'about.result1': 'Integraciones corporativas entregadas con foco en estabilidad operativa.',
    'about.result2': 'Reportes orientados a gestión para apoyar decisiones e indicadores.',
    'about.result3': 'Soporte y evolución continua en ambientes críticos de Protheus.',
    'skills.title': 'Habilidades',
    'skills.api': 'Integración con APIs REST',
    'skills.support': 'Soporte y mantenimiento de sistemas corporativos',
    'projects.title': 'Proyectos',
    'projects.p1':
      'Panel para seguimiento de indicadores de RRHH con enfoque en visualización de datos y apoyo a decisiones.',
    'projects.p2':
      'Reportes de facturación con consolidación de información y mejor lectura para operación y gestión.',
    'projects.p3title': 'Integraciones Protheus con API de terceros',
    'projects.p3':
      'Desarrollo de integraciones para intercambio de datos entre ERP y sistemas externos, con mantenimiento y evolución continua.',
    'projects.open': 'Demo',
    'projects.source': 'GitHub',
    'contact.title': 'Contacto',
    'contact.rate': 'Valor/hora',
    'contact.whats': 'WhatsApp',
    'contact.email': 'E-mail',
    'contact.whatsMessage': 'Hola Michel, ¿todo bien?',
    'contact.mailSubject': 'Contacto desde portafolio',
    'contact.mailBody': 'Hola Michel, ¿todo bien?'
  }
};

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Language>(this.getInitialLanguage());

  setLanguage(language: Language): void {
    this.lang.set(language);
    this.persistLanguage(language);
  }

  t(key: string): string {
    return translations[this.lang()][key] ?? key;
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
