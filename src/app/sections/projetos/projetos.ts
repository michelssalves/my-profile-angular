import { Component, inject } from '@angular/core';
import { LanguageService } from '../../shared/language.service';
import { PROJECTS, ProjectCategory } from '../../shared/portfolio-data';

@Component({
  selector: 'app-projetos',
  imports: [],
  templateUrl: './projetos.html',
  styleUrl: './projetos.css'
})
export class Projetos {
  readonly i18n = inject(LanguageService);

  readonly groups: { category: ProjectCategory; titleKey: string; items: typeof PROJECTS }[] = [
    {
      category: 'client',
      titleKey: 'projects.group.client',
      items: PROJECTS.filter((project) => project.category === 'client')
    },
    {
      category: 'erp',
      titleKey: 'projects.group.erp',
      items: PROJECTS.filter((project) => project.category === 'erp')
    }
  ];
}
