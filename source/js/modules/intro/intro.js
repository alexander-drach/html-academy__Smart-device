const intro = () => {
  const introBtn = document.querySelector('.intro__btn');
  const contact = document.querySelector('.contact');

  introBtn.addEventListener('click', () => {
    contact.scrollIntoView({behavior: "smooth"});
  })
};

export { intro };
