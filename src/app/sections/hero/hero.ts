import { Component, DestroyRef, computed, effect, inject, signal } from '@angular/core';
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
  readonly typedEyebrow = signal('');

  private typingTimer: ReturnType<typeof setInterval> | undefined;

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

  constructor() {
    // Digita o eyebrow letra a letra e recomeca ao trocar o idioma (inspirado no Rhuan Bello)
    effect(() => this.typeEyebrow(this.i18n.t('hero.eyebrow')));
    inject(DestroyRef).onDestroy(() => clearInterval(this.typingTimer));
  }

  setLanguage(language: Language): void {
    this.i18n.setLanguage(language);
  }

  private typeEyebrow(text: string): void {
    clearInterval(this.typingTimer);

    const reduceMotion =
      typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      this.typedEyebrow.set(text);
      return;
    }

    let index = 0;
    this.typedEyebrow.set('');
    this.typingTimer = setInterval(() => {
      index++;
      this.typedEyebrow.set(text.slice(0, index));
      if (index >= text.length) {
        clearInterval(this.typingTimer);
      }
    }, 70);
  }
}
