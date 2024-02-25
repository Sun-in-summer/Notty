console.log('pst script  is loaded');
import { loadVideo } from './video.js';

const PST_VIDEO_ID = 'NbJORoFdIa0';
const header = document.querySelector('.pst-page-header ');
const playButton = document.querySelector('.video-icon-wrapper');

window.addEventListener('load', function () {
  const preloader = document.querySelector('.box');
  preloader.classList.add('disabled');
  header.classList.remove('hidden');
});

playButton.addEventListener('click', function () {
  loadVideo(PST_VIDEO_ID);
});

const swiper = new Swiper('.swiper', {
  // Optional parameters

  loop: true,
  autoplay: false,
  // {
  //   delay: 5000,
  //   pauseOnMouseEnter: true,
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
