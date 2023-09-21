export function initSelectPrecentage() {
  const percetage = document.querySelector('.field-range__percent');
  const input = document.querySelector('.field-range__input');

  input.addEventListener('input', () => {
    percetage.innerHTML = `${input.value  }%`;
  });
}
