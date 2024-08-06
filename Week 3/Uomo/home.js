function filterProducts(category) {
    const allProducts = document.querySelectorAll('.product');
    allProducts.forEach(product => {
        product.style.display = 'none';
        if (category === 'all' || product.classList.contains(category)) {
            product.style.display = 'block';
        }
    });

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('tab-active'));
    document.getElementById(category).classList.add('tab-active');
}

document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    const slideWidth = slides[0].getBoundingClientRect().width;

    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    });

    let currentSlide = 0;

    nextButton.addEventListener('click', () => {
        const targetSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        moveToSlide(targetSlide);
    });

    prevButton.addEventListener('click', () => {
        const targetSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
        moveToSlide(targetSlide);
    });

    function moveToSlide(targetSlide) {
        const amountToMove = slides[targetSlide].style.left;
        track.style.transform = 'translateX(-' + amountToMove + ')';
        currentSlide = targetSlide;
    }
});