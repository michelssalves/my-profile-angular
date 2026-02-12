import { Component, inject } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { Sobre } from './sections/sobre/sobre';
import { Skills } from './sections/skills/skills';
import { Projetos } from './sections/projetos/projetos';
import { Contato } from './sections/contato/contato';
import { LanguageService } from './shared/language.service';

@Component({
  selector: 'app-root',
  imports: [Hero, Sobre, Skills, Projetos, Contato],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly i18n = inject(LanguageService);
}
