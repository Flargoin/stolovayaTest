"use strict";

import Swiper from "swiper";

document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".header__categories-list", {

    slidesPerView: 11,
    spaceBetween: 40,

    breakpoints: {
      1545: {
        slidesPerView: 9,
        allowTouchMove: true,
      }
    }
  });
});
