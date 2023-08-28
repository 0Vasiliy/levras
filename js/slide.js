$slides = document.querySelectorAll('.content');
const $tsNext = document.querySelector('.slider-btn-next');
const $tsPrew = document.querySelector('.slider-btn-prew');
const $progressBar = document.querySelector('.slider-progress-bar-complete');

let slide = 0;
const maxSlides = $slides.length;
$progressBar.style.width = 0;
const step = 100 / (maxSlides - 1);

const setSlide = function (prew = false) {
  if (prew) {
    if (slide > 0) {
      slide--;
      $slides[slide + 1].classList.remove('active');
      $slides[slide].classList.add('active');
    }
  } else {
    if (slide < maxSlides - 1) {
      slide++;
      $slides[slide - 1].classList.remove('active');
      $slides[slide].classList.add('active');
    }
  }
  $progressBar.style.width = `${step * slide}%`;
};

$tsNext.addEventListener('click', () => setSlide());
$tsPrew.addEventListener('click', () => setSlide(true));
