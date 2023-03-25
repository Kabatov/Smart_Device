const accordion = document.querySelector('[data-accordion]');
const accordionTitles = document.querySelectorAll('[data-accordion] button');

const initAccordion = () => {
  if (accordion) {
    accordion.classList.remove('no-js');
  }

  if (accordionTitles.length > 0) {
    accordionTitles.forEach((accordeonTitle) => {
      accordeonTitle.addEventListener('click', (evt) => {
        const parent = evt.target.closest('.accordion__item');
        if (parent.classList.contains('is-open')) {
          parent.classList.remove('is-open');
        } else {
          const blocks = document.querySelectorAll('.accordion__item.is-open');
          for (let block of blocks) {
            block.classList.remove('is-open');
          }
          parent.classList.add('is-open');
        }
      });
    });
  }
};

export {initAccordion};
