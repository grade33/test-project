export class SingleSelect {
  constructor(selectElement) {
    this.originSelect = selectElement;
    this.select = null;
    this.customSelect = null;
    this.selectHead = null;
    this.selectBody = null;
    this.optionsCollection = [];

    this.currentHeadOption = null;

    this.#initializeStructure();

    document.addEventListener('click', this.toggleSelect.bind(this));
    this.optionsCollection.forEach((option) => {
      option.addEventListener('click', this.changeOption.bind(this, option));
    });
  }

  toggleSelect(event) {
    if (!this.selectHead.contains(event.target)) {
      this.customSelect.classList.toggle('is-open', false);
      return;
    }

    this.customSelect.classList.toggle('is-open');
  }

  changeOption(currentOption) {
    if (this.selectHead.contains(currentOption)) return;

    this.optionsCollection.forEach((option) => {
      option.classList.toggle('is-selected', option === currentOption);
    });

    const newHeadOption = currentOption.cloneNode(true);
    newHeadOption.classList.remove('select__option_body');
    newHeadOption.classList.add('select__option_head');

    if (this.currentHeadOption) {
      this.currentHeadOption.replaceWith(newHeadOption);
    } else {
      this.selectHead.append(newHeadOption);
    }
    this.currentHeadOption = newHeadOption;

    const selectedOption =
      [...this.select.options].find((option) => option.dataset.id === currentOption.dataset.id) ||
      this.optionsCollection[0];
    selectedOption.selected = true;
  }

  #initializeStructure() {
    this.customSelect = document.createElement('div');
    this.customSelect.className = this.originSelect.className;

    this.selectHead = document.createElement('div');
    this.selectHead.classList.add('select__head');

    this.selectBody = document.createElement('div');
    this.selectBody.classList.add('select__body');

    this.customSelect.append(this.selectHead);
    this.customSelect.append(this.selectBody);

    this.optionsCollection = [...this.originSelect.children]
      .filter((option) => option.dataset.value)
      .map((option, idx) => {
        const newOption = option.cloneNode(true);
        newOption.classList.add('select__option', 'select__option_body');
        newOption.dataset.id = idx + 1;

        this.selectBody.append(newOption);
        return newOption;
      });

    this.#initializeOriginStructure();

    const placehlderOption =
      [...this.originSelect.children].find((opt) => !opt.dataset.value) || this.optionsCollection[0];
    this.changeOption(placehlderOption);

    this.originSelect.replaceWith(this.customSelect);
  }

  #initializeOriginStructure() {
    const select = document.createElement('select');
    select.setAttribute('name', this.originSelect.dataset.name || '');
    select.classList.add('visually-hidden');

    this.optionsCollection.forEach((rawOption) => {
      const option = document.createElement('option');
      option.textContent = rawOption.textContent;
      option.dataset.id = rawOption.dataset.id;
      option.setAttribute('value', rawOption.dataset.value);
      select.append(option);
    });

    this.select = select;
    this.customSelect.prepend(select);
  }
}
