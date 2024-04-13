const slider = document.querySelector('[data-slider="info"]');

const initInfoSlider = () => {
  if (!slider) {
    return;
  }

  const swiper = new Swiper(slider, {
    slidesPerView: 'auto',
	 navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	 }
  });
};

export {initInfoSlider};
