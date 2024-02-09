//  const locomotiveScroll = new LocomotiveScroll();

const animationBlock = document.querySelector('#lottie-animation');
console.log(animationBlock);

window.addEventListener('load', function () {
  const preloader = document.querySelector('.box');
  preloader.classList.add('disabled');
  animationBlock.classList.remove('disabled');
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
  setSpeed: 1,
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
const videoWrapper = document.querySelector('.video-wrapper');
const videoTitlePage = document.querySelector('.video-title-page');
const video = document.querySelector('.video');
playButton.addEventListener('click', function () {
  console.log('!!');
  videoTitlePage.style.display = 'none';
  videoWrapper.style.display = 'block';
  video.style.display = 'block';
  video.src =
    'http://www.youtube.com/embed/-7BFrSqkc0o?feature=oembed&autoplay=1';
  video.autoplay = true;
  function onYouTubeIframeAPIReady() {
    var player;
    player = new YT.Player('player', {
      videoId: 'M7lc1UVf-VE',
      playerVars: { autoplay: 1, controls: 0 },
      events: {
        onReady: onPlayerReady,
        onPlaybackQualityChange: onPlayerPlaybackQualityChange,
        onStateChange: onPlayerStateChange,
        onError: onPlayerError,
      },
    });
  }
});
