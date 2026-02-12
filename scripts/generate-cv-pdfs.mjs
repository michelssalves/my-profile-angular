import fs from 'node:fs';
import path from 'node:path';
import PDFDocument from 'pdfkit';

const outputDir = path.resolve('public', 'cv');
fs.mkdirSync(outputDir, { recursive: true });

const resumes = {
  pt: {
    filename: 'CV.Michel.pt.pdf',
    title: 'Curriculo - Michel Silas Scabia Alves',
    summary:
      'Programador ADVPL e desenvolvedor full stack com experiencia em Protheus, Angular, PHP e integracoes com APIs.',
    sections: [
      {
        title: 'Contato',
        lines: [
          'Telefone: +55 41 98438-2660',
          'E-mail: michelssalves@gmail.com',
          'LinkedIn: linkedin.com/in/michel-alves-05a41813b',
          'GitHub: github.com/michelssalves'
        ]
      },
      {
        title: 'Formacao',
        lines: ['Analise e Desenvolvimento de Sistemas - Faculdade Camoes (Jan/2020 - Jul/2022)']
      },
      {
        title: 'Habilidades',
        lines: [
          'ADVPL (Protheus/TOTVS)',
          'Angular, JavaScript, Vue.js',
          'PHP e Laravel',
          'Integracao com APIs REST',
          'Suporte e manutencao de sistemas corporativos'
        ]
      },
      {
        title: 'Experiencia',
        lines: [
          'TCP - Programador ADVPL (Atual): Integracoes Protheus com APIs, relatorios e manutencao.',
          'Construtora Elevacao - Analista de Suporte Protheus: suporte operacional e fiscal.',
          'RDP Petroleo - Programador PHP: desenvolvimento web, manutencao legado e suporte.'
        ]
      },
      {
        title: 'Projetos',
        lines: [
          'Dashboard RH - Angular + Protheus',
          'Invoice Report - Angular + Protheus',
          'Integracoes Protheus com APIs de terceiros'
        ]
      }
    ]
  },
  en: {
    filename: 'CV.Michel.en.pdf',
    title: 'Resume - Michel Silas Scabia Alves',
    summary:
      'ADVPL programmer and full stack developer with experience in Protheus, Angular, PHP and API integrations.',
    sections: [
      {
        title: 'Contact',
        lines: [
          'Phone: +55 41 98438-2660',
          'E-mail: michelssalves@gmail.com',
          'LinkedIn: linkedin.com/in/michel-alves-05a41813b',
          'GitHub: github.com/michelssalves'
        ]
      },
      {
        title: 'Education',
        lines: ['Systems Analysis and Development - Camoes College (Jan/2020 - Jul/2022)']
      },
      {
        title: 'Skills',
        lines: [
          'ADVPL (Protheus/TOTVS)',
          'Angular, JavaScript, Vue.js',
          'PHP and Laravel',
          'REST API Integration',
          'Support and maintenance of enterprise systems'
        ]
      },
      {
        title: 'Experience',
        lines: [
          'TCP - ADVPL Programmer (Current): Protheus integrations with APIs, reports and maintenance.',
          'Construtora Elevacao - Protheus Support Analyst: operational and fiscal support.',
          'RDP Petroleo - PHP Programmer: web development, legacy maintenance and support.'
        ]
      },
      {
        title: 'Projects',
        lines: [
          'Dashboard RH - Angular + Protheus',
          'Invoice Report - Angular + Protheus',
          'Protheus Integrations with Third-Party APIs'
        ]
      }
    ]
  },
  es: {
    filename: 'CV.Michel.es.pdf',
    title: 'Curriculum - Michel Silas Scabia Alves',
    summary:
      'Programador ADVPL y desarrollador full stack con experiencia en Protheus, Angular, PHP e integraciones con APIs.',
    sections: [
      {
        title: 'Contacto',
        lines: [
          'Telefono: +55 41 98438-2660',
          'E-mail: michelssalves@gmail.com',
          'LinkedIn: linkedin.com/in/michel-alves-05a41813b',
          'GitHub: github.com/michelssalves'
        ]
      },
      {
        title: 'Formacion',
        lines: ['Analisis y Desarrollo de Sistemas - Facultad Camoes (Ene/2020 - Jul/2022)']
      },
      {
        title: 'Habilidades',
        lines: [
          'ADVPL (Protheus/TOTVS)',
          'Angular, JavaScript, Vue.js',
          'PHP y Laravel',
          'Integracion con APIs REST',
          'Soporte y mantenimiento de sistemas corporativos'
        ]
      },
      {
        title: 'Experiencia',
        lines: [
          'TCP - Programador ADVPL (Actual): integraciones Protheus con APIs, reportes y mantenimiento.',
          'Construtora Elevacao - Analista de Soporte Protheus: soporte operativo y fiscal.',
          'RDP Petroleo - Programador PHP: desarrollo web, mantenimiento legado y soporte.'
        ]
      },
      {
        title: 'Proyectos',
        lines: [
          'Dashboard RH - Angular + Protheus',
          'Invoice Report - Angular + Protheus',
          'Integraciones Protheus con APIs de terceros'
        ]
      }
    ]
  }
};

function drawResume(config) {
  const output = path.join(outputDir, config.filename);
  const doc = new PDFDocument({ margin: 50 });
  const stream = fs.createWriteStream(output);
  doc.pipe(stream);

  doc.fontSize(22).fillColor('#0f2d4a').text('Michel Silas Scabia Alves');
  doc.moveDown(0.2);
  doc.fontSize(14).fillColor('#3a4f66').text(config.title);
  doc.moveDown(0.8);

  doc.fontSize(11).fillColor('#1f2c3a').text(config.summary, {
    lineGap: 4
  });

  config.sections.forEach((section) => {
    doc.moveDown(1.1);
    doc.fontSize(13).fillColor('#0f2d4a').text(section.title);
    doc.moveDown(0.3);
    doc.fontSize(11).fillColor('#1f2c3a');
    section.lines.forEach((line) => {
      doc.text(`- ${line}`, { lineGap: 3 });
    });
  });

  doc.end();

  return new Promise((resolve, reject) => {
    stream.on('finish', () => resolve(output));
    stream.on('error', reject);
  });
}

const generated = [];
for (const key of Object.keys(resumes)) {
  generated.push(await drawResume(resumes[key]));
}

console.log('Generated PDF files:');
for (const file of generated) {
  console.log(file);
}
