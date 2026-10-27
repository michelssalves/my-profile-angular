export type ProjectCategory = 'client' | 'erp';

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  domain: string;
  url: string;
  repo?: string;
  stack: string[];
}

export interface StackGroup {
  labelKey: string;
  items: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'memorial',
    name: 'Funerária Memorial da Paz',
    category: 'client',
    domain: 'funerariamemorialdapazsc.com.br',
    url: 'https://funerariamemorialdapazsc.com.br',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    id: 'santoanjo',
    name: 'Santo Anjo Funerária',
    category: 'client',
    domain: 'funerariasantoanjo.com.br',
    url: 'https://www.funerariasantoanjo.com.br',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    id: 'confianca',
    name: 'Funerária Confiança',
    category: 'client',
    domain: 'funerariaconfianca.com.br',
    url: 'https://www.funerariaconfianca.com.br',
    stack: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    id: 'mural',
    name: 'Mural de Homenagens',
    category: 'client',
    domain: 'recordacoes.online',
    url: 'https://recordacoes.online/muraldehomenagens',
    stack: ['PHP', 'MySQL', 'JavaScript']
  },
  {
    id: 'dashboardrh',
    name: 'Dashboard RH',
    category: 'erp',
    domain: 'poui-dashboard-rh',
    url: 'https://michelssalves.github.io/poui-dashboard-rh/#/dashboard-rh',
    repo: 'https://github.com/michelssalves/poui-dashboard-rh',
    stack: ['Angular', 'PO-UI', 'Protheus REST']
  },
  {
    id: 'invoice',
    name: 'Invoice Report',
    category: 'erp',
    domain: 'poui-invoice-report',
    url: 'https://michelssalves.github.io/poui-invoice-report/#/relatorio-rcap',
    repo: 'https://github.com/michelssalves/poui-invoice-report',
    stack: ['Angular', 'PO-UI', 'Protheus REST']
  }
];

export const STACK: StackGroup[] = [
  { labelKey: 'stack.front', items: ['Angular', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS'] },
  { labelKey: 'stack.back', items: ['PHP', 'Laravel', 'Node.js', 'REST APIs', 'SQL'] },
  { labelKey: 'stack.erp', items: ['Protheus', 'ADVPL', 'TLPP', 'PO-UI'] }
];

export const CONTACT = {
  phoneDisplay: '(41) 98438-2660',
  whatsappNumber: '5541984382660',
  email: 'michelssalves@gmail.com',
  linkedin: 'https://linkedin.com/in/michel-alves-05a41813b',
  github: 'https://github.com/michelssalves'
};
