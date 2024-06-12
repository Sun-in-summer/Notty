import { loadVideo } from './video.js';
import { handleHamburger } from './hamburger.js';
import { handleProductPageLoader } from './loader.js';
// import Swiper from 'swiper';

const PST_VIDEO_ID = 'NbJORoFdIa0';
// const header = document.querySelector('.page-header ');
const playButton = document.querySelector('.video-icon-wrapper');

window.addEventListener('load', function () {
  handleProductPageLoader();
});

window.addEventListener('DOMContentLoaded', () => {
  handleHamburger();
});

playButton.addEventListener('click', function () {
  loadVideo(PST_VIDEO_ID);
});

const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
