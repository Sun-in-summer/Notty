console.log('script  is loaded');
import { loadVideo } from './video.js';
import { handleHamburger } from './hamburger.js';
import { handleMainLoader } from './loader.js';

const MAIN_VIDEO_ID = '-7BFrSqkc0o';

const animationBlock = document.querySelector('#lottie-animation');

window.addEventListener('load', function () {
  handleMainLoader();
});

window.addEventListener('DOMContentLoaded', () => {
  handleHamburger();
});

function elemInViewport(elem, full) {
  var box = elem.getBoundingClientRect();
  var top = box.top;
  var left = box.left;
  var bottom = box.bottom;
  var right = box.right;
  var width = document.documentElement.clientWidth;
  var height = document.documentElement.clientHeight;
  var maxWidth = 0;
  var maxHeight = 0;
  if (full) {
    maxWidth = right - left;
    maxHeight = bottom - top;
  }
  return (
    Math.min(height, bottom) - Math.max(0, top) >= maxHeight &&
    Math.min(width, right) - Math.max(0, left) >= maxWidth
  );
}

const animation = lottie.loadAnimation({
  container: document.querySelector('#lottie-animation'), // контейнер для анимации
  renderer: 'svg', // тип рендерера (может быть 'svg', 'canvas' или 'html')
  loop: true, // зацикливание анимации
  autoplay: false, // автоматический запуск анимации
  path: './preloader/lottie6.json', // путь к вашему JSON-файлу с анимацией
  setSpeed: 5,
});

window.addEventListener('scroll', function () {
  const isVisible = elemInViewport(animationBlock, true);
  if (isVisible) {
    animation.play();
  } else {
    animation.stop();
  }
});

const playButton = document.querySelector('.video-icon-wrapper');

playButton.addEventListener('click', function () {
  loadVideo(MAIN_VIDEO_ID);
});

const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
