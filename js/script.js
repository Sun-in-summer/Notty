

window.addEventListener('load', function () {
    const preloader = document.querySelector('.preloader');
    preloader.classList.remove('active');
  

// setTimeout(() => {
//     animationBlock.classList.remove('active');
   
//   }, 7000)
    
});
const animationBlock = document.querySelector('.lottie-animation');
    console.log(animationBlock);

// window.addEventListener('scroll', function () {
//     const scrollPosition = document.documentElement.scrollTop;
//     console.log(scrollPosition);
    
//     if (scrollPosition >= 720) {
//         animationBlock.classList.replace('lottie-animation', "lottie-animation-active" );
//     }

// });


function elemInViewport(elem,full) {
    var box = elem.getBoundingClientRect();
    var top = box.top;
    var left = box.left;
    var bottom = box.bottom;
    var right  = box.right;
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    var maxWidth = 0;
    var maxHeight = 0;
    if(full) { maxWidth = right - left; maxHeight = bottom - top};
    return Math.min(height,bottom)- Math.max(0,top) >= maxHeight && Math.min(width,right)- Math.max(0,left)>= maxWidth
}


const animation = lottie.loadAnimation({
    container: document.querySelector('.lottie-animation'), // контейнер для анимации
    renderer: 'svg', // тип рендерера (может быть 'svg', 'canvas' или 'html')
    loop: true, // зацикливание анимации
    autoplay: false, // автоматический запуск анимации
    path: './preloader/lottie5.json' ,// путь к вашему JSON-файлу с анимацией
    setSpeed: 3
});



window.addEventListener("scroll", function() {
   
    const isVisible = elemInViewport(animationBlock,true)
    if(isVisible) {
        animation.play();
    }
    else {
        animation.stop();
    }
    })


