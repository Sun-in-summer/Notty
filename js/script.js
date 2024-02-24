console.log('script  is loaded');
import { loadVideo } from './video.js';

const MAIN_VIDEO_ID = '-7BFrSqkc0o';

const animationBlock = document.querySelector('#lottie-animation');

window.addEventListener('load', function () {
  const preloader = document.querySelector('.box');
  preloader.classList.add('disabled');
  animationBlock.classList.remove('disabled');
  const images = document.querySelectorAll('.ukiyo');
  new Ukiyo(images);
});

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu__active');
  });

  menuItem.forEach((item) => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu__active');
    });
  });
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

const videoFrameContainer = document.querySelector('video-frame-container');
const playButton = document.querySelector('.video-icon-wrapper');
const videoWrapper = document.querySelector('.video-wrapper');
const videoTitlePage = document.querySelector('.video-title-page');
const videoTitlePagePicture = document.querySelector(
  '.video-title-page-picture'
);
const videoTitlePageContent = document.querySelector(
  '.video-title-page-content'
);
const video = document.querySelector('#player');

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
