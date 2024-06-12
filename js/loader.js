const animationBlock = document.querySelector('#lottie-animation');

const handleMainLoader = () => {
  const preloader = document.querySelector('.box');
  preloader.classList.add('disabled');
  animationBlock.classList.remove('disabled');
};

const handleProductPageLoader = () => {
  const preloader = document.querySelector('.box');
  const header = document.querySelector('.pst-page-header ');
  preloader.classList.add('disabled');
  header.classList.remove('hidden');
};

export { handleMainLoader, handleProductPageLoader };
