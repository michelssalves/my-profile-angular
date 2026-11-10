import { Component, DestroyRef, afterNextRender, computed, inject, signal } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { Sobre } from './sections/sobre/sobre';
import { Projetos } from './sections/projetos/projetos';
import { Contato } from './sections/contato/contato';
import { LanguageService } from './shared/language.service';
import { STACK, whatsappUrl } from './shared/portfolio-data';
import { FxBackground } from './shared/fx-background';

@Component({
  selector: 'app-root',
  imports: [Hero, Projetos, Sobre, Contato, FxBackground],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly i18n = inject(LanguageService);
  readonly whatsappLink = computed(() => whatsappUrl(this.i18n.t('contact.whatsMessage')));
  readonly theme = signal<'dark' | 'light'>(this.getInitialTheme());
  readonly scrollProgress = signal(0);
  // Itens duplicados para a faixa rolar sem emenda
  readonly marqueeItems = [...STACK.flatMap((group) => group.items), ...STACK.flatMap((group) => group.items)];

  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      this.watchScroll();
      this.revealOnScroll();
    });
  }

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

  private watchScroll(): void {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      this.scrollProgress.set(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    this.destroyRef.onDestroy(() => window.removeEventListener('scroll', update));
  }

  // Cards e titulos surgem ao entrar na tela (inspirado no MargemHub)
  private revealOnScroll(): void {
    if (!('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    document.body.classList.add('fx-reveal');
    document.querySelectorAll('.tile, .block-head, .group-title').forEach((el) => observer.observe(el));
    this.destroyRef.onDestroy(() => observer.disconnect());
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
