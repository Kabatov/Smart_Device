const accordion = document.querySelector('[data-accordion]');
const accordionTitles = document.querySelectorAll('[data-accordion] button');

const initAccordion = () => {
  if (accordion) {
    accordion.classList.remove('no-js');
  }

  if (accordionTitles.length > 0) {
    accordionTitles.forEach((accordeonTitle) => {
      accordeonTitle.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('is-open')) {
          evt.target.classList.remove('is-open');
        } else {
          for (let title of accordionTitles) {
            title.classList.remove('is-open');
          }
          evt.target.classList.add('is-open');
        }
      });
    });
  }
};

export {initAccordion};
