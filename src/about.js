import "./themes/about/about.css";

import "../node_modules/swiper/css/swiper.css";
 
import Swiper from 'swiper';

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

