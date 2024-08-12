const carouselImages = document.querySelector('.carrusel-img');
const images = document.querySelectorAll('.carrusel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0;
const imagesToShow = 3; 
const totalImages = images.length;
const maxIndex = totalImages - imagesToShow;
const intervalTime = 3000; 
function showImage(index) {
    const offset = -index * 100 / imagesToShow;
    carouselImages.style.transform = `translateX(${offset}%)`;
}

function autoScroll() {
    index = (index + imagesToShow) > maxIndex ? 0 : index + imagesToShow;
    showImage(index);
}

let autoScrollInterval = setInterval(autoScroll, intervalTime);

nextButton.addEventListener('click', () => {
    clearInterval(autoScrollInterval); 
    index = Math.min(index + imagesToShow, maxIndex);
    showImage(index);
    autoScrollInterval = setInterval(autoScroll, intervalTime); 
});

prevButton.addEventListener('click', () => {
    clearInterval(autoScrollInterval); 
    index = Math.max(index - imagesToShow, 0);
    showImage(index);
    autoScrollInterval = setInterval(autoScroll, intervalTime); 
});