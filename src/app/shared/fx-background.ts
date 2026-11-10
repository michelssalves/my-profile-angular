import { Component, DestroyRef, ElementRef, afterNextRender, inject, viewChild } from '@angular/core';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

/* Rede de particulas no fundo da pagina (inspirada no MargemHub). */
@Component({
  selector: 'app-fx-background',
  template: '<canvas #canvas aria-hidden="true"></canvas>',
  styles: `
    :host {
      position: fixed;
      inset: 0;
      z-index: -1;
      pointer-events: none;
    }

    canvas {
      display: block;
      width: 100%;
      height: 100%;
    }
  `
})
export class FxBackground {
  private readonly canvasRef = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => this.start());
  }

  private start(): void {
    const canvas = this.canvasRef().nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const linkDistance = 140;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Menos particulas no celular para nao pesar
      const count = Math.round(Math.min(70, (width * height) / 18000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.8
      }));
    };

    const draw = () => {
      const accent = getComputedStyle(document.body).getPropertyValue('--accent').trim() || '#6aa8ff';
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = accent;
      ctx.strokeStyle = accent;

      for (const p of particles) {
        if (!reduceMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
        }

        ctx.globalAlpha = 0.55;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < linkDistance) {
            ctx.globalAlpha = (1 - dist / linkDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        // Linhas ate o cursor
        const p = particles[i];
        const distMouse = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (distMouse < linkDistance * 1.3) {
          ctx.globalAlpha = (1 - distMouse / (linkDistance * 1.3)) * 0.45;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
      if (!reduceMotion) {
        frame = requestAnimationFrame(draw);
      }
    };

    const onMove = (event: PointerEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      if (reduceMotion) draw();
    };

    const onResize = () => {
      resize();
      if (reduceMotion) draw();
    };

    resize();
    draw();
    window.addEventListener('resize', onResize);
    window.addEventListener('pointermove', onMove, { passive: true });

    this.destroyRef.onDestroy(() => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onMove);
    });
  }
}
