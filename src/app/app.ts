import { Component, inject, signal } from '@angular/core';
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
  readonly theme = signal<'dark' | 'light'>(this.getInitialTheme());

  toggleTheme(): void {
    const nextTheme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(nextTheme);
    this.applyTheme(nextTheme);
    this.persistTheme(nextTheme);
  }

  themeLabel(): string {
    const lang = this.i18n.lang();
    if (lang === 'en') {
      return this.theme() === 'dark' ? 'Light mode' : 'Dark mode';
    }

    if (lang === 'es') {
      return this.theme() === 'dark' ? 'Modo claro' : 'Modo oscuro';
    }

    return this.theme() === 'dark' ? 'Modo claro' : 'Modo escuro';
  }

  private getInitialTheme(): 'dark' | 'light' {
    const stored = this.readStoredTheme();
    if (stored) {
      this.applyTheme(stored);
      return stored;
    }

    const prefersDark =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    const fallback = prefersDark ? 'dark' : 'light';
    this.applyTheme(fallback);
    return fallback;
  }

  private readStoredTheme(): 'dark' | 'light' | null {
    try {
      const value = localStorage.getItem('portfolio_theme');
      if (value === 'dark' || value === 'light') {
        return value;
      }
    } catch {
      return null;
    }

    return null;
  }

  private applyTheme(theme: 'dark' | 'light'): void {
    if (typeof document === 'undefined') {
      return;
    }

    document.body.classList.remove('theme-dark', 'theme-light');
    document.body.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light');
  }

  private persistTheme(theme: 'dark' | 'light'): void {
    try {
      localStorage.setItem('portfolio_theme', theme);
    } catch {
      // Ignore storage failures.
    }
  }
}
