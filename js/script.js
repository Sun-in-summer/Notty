const animationBlock = document.querySelector('#lottie-animation');

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
// const video = document.querySelector('.video');

function loadVideo() {
  console.info(`loadVideo called`);

  (function loadYoutubeIFrameApiScript() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';

    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    tag.onload = setupPlayer;
  })();

  let player = null;

  function setupPlayer() {
    window.YT.ready(function () {
      player = new window.YT.Player('player', {
        height: '720',
        width: '1400',
        videoId: '-7BFrSqkc0o',
        events: {
          onReady: onPlayerReady,
          //   onStateChange: onPlayerStateChange,
        },
      });
    });
  }

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  //   function onPlayerStateChange(event) {
  //     var videoStatuses = Object.entries(window.YT.PlayerState);
  //     console.log(videoStatuses.find((status) => status[1] === event.data)[0]);
  //   }
}

// if (document.readyState !== 'loading') {
//   console.info(`document.readyState ==>`, document.readyState);
//   loadVideo();
// } else {
//   document.addEventListener('DOMContentLoaded', function () {
//     console.info(`DOMContentLoaded ==>`, document.readyState);
//     videoTitlePage.style.display = 'none';
//     // videoWrapper.style.display = 'block';
//     loadVideo();
//   });
// }

playButton.addEventListener('click', function () {
  videoTitlePage.style.display = 'none';
  videoWrapper.style.display = 'block';

  loadVideo();
  //   video.style.display = 'block';
  //   video.src =
  //     'http://www.youtube.com/embed/-7BFrSqkc0o?enablejsapi&autoplay=1&rel=0';
});
