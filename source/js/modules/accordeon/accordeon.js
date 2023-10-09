const accordeon = () => {
  const accordeonToggles = document.querySelectorAll('.accordeon__toggle');
  const accordeons = document.querySelectorAll('.accordeon');

  accordeonToggles.forEach(item => {
    item.addEventListener('click', () => {
      if (item.closest('.accordeon').classList.contains('open')) {
        item.closest('.accordeon').classList.remove('open');
      } else {
        accordeons.forEach(item => {
          item.classList.remove('open')
        })
        item.closest('.accordeon').classList.add('open');
      }
    })
  })
};

export { accordeon };
