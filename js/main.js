
  const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  effect: "coverflow",
});

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});

let menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', function() {
console.log('Кнопка нажата');
document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible'); //проверяет есть ли такой класс на нашем элементе, если нет, то добавляет, нет нет, то удаляет
});

let modalButton = document.querySelectorAll('[data-toogle = "modal"]');
let closeModalButton = document.querySelector('.modal__close');
for (let i = 0; i < modalButton.length; i++) {
  modalButton[i].addEventListener('click', openModal);
}
closeModalButton.addEventListener('click', closeModal);


function openModal() {
  const modalOverlay = document.querySelector('.modal__overlay');
  const modalDialog = document.querySelector('.modal__dialog');
  modalOverlay.classList.add('modal__overlay--visible');
  modalDialog.classList.add('modal__dialog--visible');
}

function closeModal(event) {
  event.preventDefault();
  const modalOverlay = document.querySelector('.modal__overlay');
  const modalDialog = document.querySelector('.modal__dialog');
  modalOverlay.classList.remove('modal__overlay--visible');
  modalDialog.classList.remove('modal__dialog--visible');
}


