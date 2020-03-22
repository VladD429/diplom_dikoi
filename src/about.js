import "./themes/about/about.css";

import Swiper from 'swiper';
import "../node_modules/swiper/css/swiper.min.css";
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
import "../node_modules/swiper/js/swiper.min.js";