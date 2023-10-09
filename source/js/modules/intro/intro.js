const intro = () => {
  const introBtn = document.querySelector('.intro__btn');
  const contact = document.querySelector('.contact');

  introBtn.addEventListener('click', () => {
    contact.scrollIntoView({behavior: "smooth"});
  })

  // const changeTextIntroBtn = () => {
  //   if (window.matchMedia("(max-width: 767px)").matches) {
  //     introBtn.textContent = 'Бесплатная консультация';
  //   } else {
  //     introBtn.textContent = 'Получить бесплатную консультацию';
  //   }
  // }

  // changeTextIntroBtn();

  // window.addEventListener('resize', changeTextIntroBtn);
};

export { intro };