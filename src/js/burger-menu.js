"use strict";

document.addEventListener('DOMContentLoaded', () => {
  function burgerMenu() {
    let menu = document.querySelector('.main-navigation');
    let button = menu.querySelector('.main-navigation__burger-btn');

    button.addEventListener('click', (_event) => {
      _event.preventDefault();
      toggleMenu();
    });

    function toggleMenu() {
      button.classList.toggle('main-navigation__burger-btn--active');
      menu.classList.toggle('main-navigation--desc-active');
    }
  }

  burgerMenu();
});