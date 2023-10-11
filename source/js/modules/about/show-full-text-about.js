const showFullTextAbout = () => {
  if (document.querySelector('.about__btn')) {
    const aboutBtn = document.querySelector('.about__btn');
    const about = document.querySelector('.about');

    aboutBtn.addEventListener('click', () => {
      about.classList.toggle('open');
      aboutBtn.classList.toggle('open');

      if (aboutBtn.classList.contains('open')) {
        aboutBtn.textContent = 'Свернуть';
      } else {
        aboutBtn.textContent = 'Подробнее';
      }
    });
  }

};

export {showFullTextAbout};
