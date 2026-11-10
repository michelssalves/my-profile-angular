export type ProjectCategory = 'client' | 'erp';

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  domain: string;
  url: string;
  repo?: string;
  image: string;
  stack: string[];
}

export interface StackItem {
  name: string;
  icon: string;
  invertOnDark?: boolean;
}

export interface StackGroup {
  labelKey: string;
  items: StackItem[];
}

export const PROJECTS: Project[] = [
  {
    id: 'memorial',
    image: 'projects/memorial.webp',
    name: 'Funerária Memorial da Paz',
    category: 'client',
    domain: 'funerariamemorialdapazsc.com.br',
    url: 'https://funerariamemorialdapazsc.com.br',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    id: 'santoanjo',
    image: 'projects/santoanjo.webp',
    name: 'Santo Anjo Funerária',
    category: 'client',
    domain: 'funerariasantoanjo.com.br',
    url: 'https://www.funerariasantoanjo.com.br',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    id: 'confianca',
    image: 'projects/confianca.webp',
    name: 'Funerária Confiança',
    category: 'client',
    domain: 'funerariaconfianca.com.br',
    url: 'https://www.funerariaconfianca.com.br',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    id: 'mural',
    image: 'projects/mural.webp',
    name: 'Mural de Homenagens',
    category: 'client',
    domain: 'recordacoes.online',
    url: 'https://recordacoes.online/muraldehomenagens',
    stack: ['PHP', 'MySQL', 'JavaScript']
  },
  {
    id: 'dashboardrh',
    image: 'projects/dashboardrh.webp',
    name: 'Dashboard RH',
    category: 'erp',
    domain: 'poui-dashboard-rh',
    url: 'https://michelssalves.github.io/poui-dashboard-rh/#/dashboard-rh',
    repo: 'https://github.com/michelssalves/poui-dashboard-rh',
    stack: ['Angular', 'PO-UI', 'Protheus REST']
  },
  {
    id: 'invoice',
    image: 'projects/invoice.webp',
    name: 'Invoice Report',
    category: 'erp',
    domain: 'poui-invoice-report',
    url: 'https://michelssalves.github.io/poui-invoice-report/#/relatorio-rcap',
    repo: 'https://github.com/michelssalves/poui-invoice-report',
    stack: ['Angular', 'PO-UI', 'Protheus REST']
  }
];

export const STACK: StackGroup[] = [
  {
    labelKey: 'stack.front',
    items: [
      { name: 'Angular', icon: 'stack/angular.svg' },
      { name: 'React', icon: 'stack/react.svg' },
      { name: 'Next.js', icon: 'stack/nextjs.svg', invertOnDark: true },
      { name: 'Vue.js', icon: 'stack/vuejs.svg' }
    ]
  },
  {
    labelKey: 'stack.back',
    items: [
      { name: 'PHP', icon: 'stack/php.svg' },
      { name: 'Laravel', icon: 'stack/laravel.svg' },
      { name: 'REST APIs', icon: 'stack/rest.svg' },
      { name: 'SQL', icon: 'stack/microsoftsqlserver.svg' }
    ]
  },
  {
    labelKey: 'stack.erp',
    items: [
      { name: 'Protheus', icon: 'stack/protheus.svg' },
      { name: 'ADVPL', icon: 'stack/advpl.svg' },
      { name: 'TLPP', icon: 'stack/tlpp.svg' },
      { name: 'PO-UI', icon: 'stack/poui.svg' }
    ]
  }
];

export const CONTACT = {
  phoneDisplay: '(41) 98438-2660',
  whatsappNumber: '5541984382660',
  email: 'michelssalves@gmail.com',
  linkedin: 'https://linkedin.com/in/michel-alves-05a41813b',
  github: 'https://github.com/michelssalves'
};

export function whatsappUrl(message: string): string {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
