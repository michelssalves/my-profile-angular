import { Component, inject } from '@angular/core';
import { Language, LanguageService } from '../../shared/language.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  readonly i18n = inject(LanguageService);

  setLanguage(language: Language): void {
    this.i18n.setLanguage(language);
  }
}
