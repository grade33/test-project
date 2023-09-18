import { classNames } from "../utils/classNames";

export function updateHeaderOnScroll() {
  const headerClass = classNames.header;
  const headerElement = document.querySelector(`.${headerClass.block}`);
  let lastScrollY = window.scrollY;

  const updateHeader = () => {
    const isScrolled = window.scrollY > 0;
    const isScrollingDown = window.scrollY > lastScrollY;

    headerElement.classList.toggle(headerClass.blur, isScrolled);
    headerElement.classList.toggle(headerClass.hide, isScrolled && isScrollingDown);

    lastScrollY = window.scrollY;
  };

  updateHeader();
  document.addEventListener("scroll", updateHeader);
}
