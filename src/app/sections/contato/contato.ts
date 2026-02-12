import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../shared/language.service';

@Component({
  selector: 'app-contato',
  imports: [],
  templateUrl: './contato.html',
  styleUrl: './contato.css'
})
export class Contato {
  readonly i18n = inject(LanguageService);

  readonly whatsappLink = computed(() => {
    const msg = encodeURIComponent(this.i18n.t('contact.whatsMessage'));
    return `https://wa.me/5541984382660?text=${msg}`;
  });

  readonly emailLink = computed(() => {
    const subject = encodeURIComponent(this.i18n.t('contact.mailSubject'));
    const body = encodeURIComponent(this.i18n.t('contact.mailBody'));
    return `mailto:michelssalves@gmail.com?subject=${subject}&body=${body}`;
  });
}
