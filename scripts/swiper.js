document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: 1, // сколько слайдов показывем

      navigation: {
        nextEl: ".swiper-button-next", // вперед
        prevEl: ".swiper-button-prev", // назад
      },

      pagination: {
        el: ".swiper-pagination", // Класс пагинации
        clickable: true, // кликабельная пагинация (чтобы переключаться не только стрелочками)
      },
    });
});