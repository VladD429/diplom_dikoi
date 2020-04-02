import "../node_modules/swiper/css/swiper.css";
import "./themes/about/about.css";
 
import Swiper from 'swiper';

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 16,
  loop: true,
  /*slidesPerGroup: 4,*/
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    769: {
      slidesPerView: 4,
      spaceBetween: 16,
      centeredSlides: true,
    },
    321: {
      slidesPerView: 2.3,
      spaceBetween: 8,
      slidesPerGroup: 2,
      centeredSlides: false,
      slidesOffsetAfter: 20,
    },
    300: {
      slidesPerView: 1.1,
      spaceBetween: 8,
      slidesPerGroup: 1,
      centeredSlides: true,
    },
  }
  });


