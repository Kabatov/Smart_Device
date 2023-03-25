import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initAccordion} from './modules/accordion';
import {maskPhone} from './modules/mask-button';
import {breakpointCheckerDesktop} from './modules/adaptive';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  const descriptionButtonOpen = document.querySelector('.company__button');

  function descriptionHeightToggle(event) {
    const descriptionButton = event.target;
    const description = descriptionButton.closest('.company__inner').querySelector('.company__description');
    if (descriptionButton.classList.contains('company__button-closed')) {
      descriptionButton.classList.remove('company__button-closed');
      description.classList.toggle('company__description-opened');
      descriptionButton.textContent = 'Подробнее';
      return;
    }
    descriptionButton.classList.add('company__button-closed');
    description.classList.toggle('company__description-opened');
    descriptionButton.textContent = 'Свернуть';
  }

  descriptionButtonOpen.addEventListener('click', descriptionHeightToggle);


  initAccordion();

  maskPhone();

  // Utils
  // ---------------------------------

  breakpointCheckerDesktop();
  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
