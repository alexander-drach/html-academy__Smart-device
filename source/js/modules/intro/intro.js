const intro = () => {
  const introBtn = document.querySelector('.intro__btn');

  const changeTextIntroBtn = () => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      introBtn.textContent = 'Бесплатная консультация';
    } else {
      introBtn.textContent = 'Получить бесплатную консультацию';
    }
  }

  changeTextIntroBtn();

  window.addEventListener('resize', changeTextIntroBtn);
};

export { intro };