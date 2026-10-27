import { Component, computed, inject } from '@angular/core';
import { Language, LanguageService } from '../../shared/language.service';
import { STACK } from '../../shared/portfolio-data';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  readonly i18n = inject(LanguageService);
  readonly stack = STACK;

  readonly languages: { code: Language; short: string; label: string; flag: string }[] = [
    { code: 'pt', short: 'PT', label: 'Português', flag: 'flags/br.svg' },
    { code: 'en', short: 'EN', label: 'English', flag: 'flags/us.svg' },
    { code: 'es', short: 'ES', label: 'Español', flag: 'flags/es.svg' }
  ];

  readonly cvLink = computed(() => {
    const lang = this.i18n.lang();
    if (lang === 'en') return 'cv/CV.Michel.en.pdf';
    if (lang === 'es') return 'cv/CV.Michel.es.pdf';
    return 'CV.Michel.pdf';
  });

  setLanguage(language: Language): void {
    this.i18n.setLanguage(language);
  }
}
