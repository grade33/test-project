import { SingleSelect } from './SingleSelect';

import '@/styles/vendor/select.scss';

export class Select {
  constructor(selector) {
    this.selects = document.querySelectorAll(selector);
    this.selectInstances = [];

    this.init();
  }

  init() {
    this.selects.forEach((select) => {
      this.selectInstances.push(new SingleSelect(select));
    });
  }
}

/*
<div class="select" data-name="contact">
  <div data-value="">Предпочтительный способ связи</div>
  <div data-value="telegram">Telegram</div>
  <div data-value="whatsApp">WhatsApp</div>
  <div data-value="tel">Телефон</div>
  <div data-value="viber">Viber</div>
</div>
*/
