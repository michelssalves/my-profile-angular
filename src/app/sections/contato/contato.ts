import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../shared/language.service';
import { CONTACT } from '../../shared/portfolio-data';

@Component({
  selector: 'app-contato',
  imports: [],
  templateUrl: './contato.html',
  styleUrl: './contato.css'
})
export class Contato {
  readonly i18n = inject(LanguageService);
  readonly contact = CONTACT;
  readonly year = new Date().getFullYear();

  readonly whatsappLink = computed(() => {
    const msg = encodeURIComponent(this.i18n.t('contact.whatsMessage'));
    return `https://wa.me/${CONTACT.whatsappNumber}?text=${msg}`;
  });

  readonly emailLink = computed(() => {
    const subject = encodeURIComponent(this.i18n.t('contact.mailSubject'));
    const body = encodeURIComponent(this.i18n.t('contact.mailBody'));
    return `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  });
}
