import { Injectable, signal } from '@angular/core';

export type Language = 'pt' | 'en' | 'es';

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
      'Profissional com atuação em desenvolvimento e sustentação de sistemas corporativos, com foco em Protheus, integrações com APIs e aplicações web. Experiência em manutenção de sistemas legados, correção de bugs e evolução de funcionalidades.',
    'about.education': 'Formação',
    'about.educationText':
      'Análise e Desenvolvimento de Sistemas, Faculdade Camões (Jan/2020 - Jul/2022).',
    'about.experience': 'Experiência',
    'about.job2': 'Analista de Suporte Protheus',
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
    'projects.open': 'Acessar projeto',
    'contact.title': 'Contato',
    'contact.rate': 'Valor/hora'
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
      'Professional focused on development and maintenance of enterprise systems, with emphasis on Protheus, API integrations and web applications. Experience in legacy maintenance, bug fixes and feature evolution.',
    'about.education': 'Education',
    'about.educationText':
      'Systems Analysis and Development, Camoes College (Jan/2020 - Jul/2022).',
    'about.experience': 'Experience',
    'about.job2': 'Protheus Support Analyst',
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
    'projects.open': 'Open project',
    'contact.title': 'Contact',
    'contact.rate': 'Hourly rate'
  },
  es: {
    'brand.role': 'Desarrollador',
    'nav.about': 'Sobre mi',
    'nav.skills': 'Skills',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'hero.lead':
      'Programador ADVPL y desarrollador full stack con experiencia en Protheus, Angular, PHP e integraciones con APIs.',
    'hero.projects': 'Ver proyectos',
    'hero.cv': 'Descargar CV',
    'hero.contact': 'Hablar conmigo',
    'about.title': 'Sobre mi',
    'about.text':
      'Profesional con actuacion en desarrollo y mantenimiento de sistemas corporativos, con foco en Protheus, integraciones con APIs y aplicaciones web. Experiencia en mantenimiento de sistemas legados, correccion de errores y evolucion de funcionalidades.',
    'about.education': 'Formacion',
    'about.educationText':
      'Analisis y Desarrollo de Sistemas, Facultad Camoes (Ene/2020 - Jul/2022).',
    'about.experience': 'Experiencia',
    'about.job2': 'Analista de Soporte Protheus',
    'skills.title': 'Skills',
    'skills.api': 'Integracion con APIs REST',
    'skills.support': 'Soporte y mantenimiento de sistemas corporativos',
    'projects.title': 'Proyectos',
    'projects.p1':
      'Panel para seguimiento de indicadores de RRHH con enfoque en visualizacion de datos y apoyo a decisiones.',
    'projects.p2':
      'Reportes de facturacion con consolidacion de informacion y mejor lectura para operacion y gestion.',
    'projects.p3title': 'Integraciones Protheus con API de terceros',
    'projects.p3':
      'Desarrollo de integraciones para intercambio de datos entre ERP y sistemas externos, con mantenimiento y evolucion continua.',
    'projects.open': 'Abrir proyecto',
    'contact.title': 'Contacto',
    'contact.rate': 'Valor/hora'
  }
};

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Language>('pt');

  setLanguage(language: Language): void {
    this.lang.set(language);
  }

  t(key: string): string {
    return translations[this.lang()][key] ?? key;
  }
}
