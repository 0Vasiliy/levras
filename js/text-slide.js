const $slideBox = document.querySelector('.slide-wrapper');
const $tsNext = document.querySelector('.slider-btn-next');
const $tsPrew = document.querySelector('.slider-btn-prew');
const $progressBar = document.querySelector('.slider-progress-bar-complete');
const $tsBg = document.querySelector('.ts-bg');
const $slides = document.querySelectorAll('.ts-slide');

let slide = 1;
const maxSlides = $slides.length;
const step = 100 / (maxSlides - 1);

$progressBar.style.width = 0;

const tsNav = function (prew = false) {
  if (prew) {
    if (slide != 1) {
      slide--;
    }
  } else {
    if (slide != maxSlides) {
      slide++;
    }
  }

  const slidePos = (slide - 1) * 100;
  $slideBox.style.transform = `translateX(-${slidePos}vw)`;
  $progressBar.style.width = `${step * (slide - 1)}%`;
  $tsBg.classList.remove(`ts-${slide - 1}`, `ts-${slide + 1}`);
  $tsBg.classList.add(`ts-${slide}`);
  $slides.forEach((slide) => {
    slide.classList.remove('ts-active');
  });
  $slides[slide - 1].classList.add('ts-active');
};

$tsNext.addEventListener('click', () => tsNav());
$tsPrew.addEventListener('click', () => tsNav(true));
