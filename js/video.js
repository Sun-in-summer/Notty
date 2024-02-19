function loadVideo(videoId) {
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
        videoId: videoId,
        events: {
          onReady: onPlayerReady,
        },
      });
    });
  }

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  videoTitlePageContent.classList.add('transparent');
  videoTitlePagePicture.classList.add('transparent');
  setTimeout(function () {
    videoTitlePage.classList.add('hidden');
  }, 400);
  setTimeout(function () {
    videoWrapper.classList.add('not_transparent');
  }, 400);
  videoWrapper.style.display = 'block';
  video.style.display = 'block';
}

export { loadVideo };
