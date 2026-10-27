import { Component, inject } from '@angular/core';
import { LanguageService } from '../../shared/language.service';

@Component({
  selector: 'app-sobre',
  imports: [],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css'
})
export class Sobre {
  readonly i18n = inject(LanguageService);

  readonly jobs: { key: string; company?: string; current: boolean }[] = [
    { key: 'tcp', company: 'TCP', current: true },
    { key: 'freela', current: true },
    { key: 'elevacao', company: 'Construtora Elevação', current: false },
    { key: 'rdp', company: 'RDP Petróleo', current: false }
  ];
}
