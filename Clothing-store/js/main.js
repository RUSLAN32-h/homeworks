document.addEventListener("DOMContentLoaded", function () {
  if (typeof Swiper !== "undefined") {
    const swiper = new Swiper(".testimonials__slider", {
      slidesPerView: "auto",
      spaceBetween: 20,
      loop: true,
      speed: 400,

      navigation: {
        nextEl: ".testimonials__next",
        prevEl: ".testimonials__prev",
      },

      breakpoints: {
        320: {
          spaceBetween: 16,
        },
        768: {
          spaceBetween: 20,
        },
        1024: {
          spaceBetween: 24,
        },
      },
    });
  } else {
    console.error("Swiper не загружен!");
  }
});
