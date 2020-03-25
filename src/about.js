import "../node_modules/swiper/css/swiper.css";
import "./themes/about/about.css";
 
import Swiper from 'swiper';

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 16,
  loop: true,
  slidesPerGroup: 4,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  });


