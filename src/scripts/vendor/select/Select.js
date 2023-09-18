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
