require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import tabs from "./modules/tabs";
import modal from "./modules/modal";
import timer from "./modules/timer";
import cards from "./modules/cards";
import calc from "./modules/calc";
import forms from "./modules/forms";
import slider from "./modules/slider";
import { openModal } from "./modules/modal";

window.addEventListener("DOMContentLoaded", () => {

  const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

  tabs(".tabcontent", ".tabheader__items", ".tabheader__item", "tabheader__item_active");
  modal("[data-modal]", ".modal", modalTimerId);
  timer(".timer", "2024-12-31");
  cards();
  calc();
  forms("form", ".modal__dialog", modalTimerId);
  slider( {
    isSlider:".offer__slide",
    isPrevSlider: ".offer__slider-prev",
    isNextSlider: ".offer__slider-next",
    isTotal: "#total",
    isCurrent: "#current",
    isWrapper: ".offer__slider-wrapper",
    isInner: ".offer__slider-inner",
    isSliderBody: ".offer__slider"
  })
});
