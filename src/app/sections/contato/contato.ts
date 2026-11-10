import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../shared/language.service';
import { CONTACT, whatsappUrl } from '../../shared/portfolio-data';

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

  readonly whatsappLink = computed(() => whatsappUrl(this.i18n.t('contact.whatsMessage')));

  readonly emailLink = computed(() => {
    const subject = encodeURIComponent(this.i18n.t('contact.mailSubject'));
    const body = encodeURIComponent(this.i18n.t('contact.mailBody'));
    return `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  });
}
