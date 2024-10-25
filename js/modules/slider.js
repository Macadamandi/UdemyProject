function slider({isSlider, isPrevSlider, isNextSlider, isTotal, isCurrent, isWrapper, isInner, isSliderBody}) {

   const slider = document.querySelectorAll(isSlider),
      prevSlide = document.querySelector(isPrevSlider),
      nextSlide = document.querySelector(isNextSlider),
      total = document.querySelector(isTotal),
      current = document.querySelector(isCurrent),
      wrapper = document.querySelector(isWrapper),
      inner = document.querySelector(isInner),
      width = window.getComputedStyle(wrapper).width,
      sliderBody = document.querySelector(isSliderBody),
      carousel_indicators = document.createElement("div"),
      slidesNumber = slider.length;

   let offset = 0,
      counter = 0;

   wrapper.style.overflow = "hidden";
   inner.style.display = "flex";
   inner.style.width = 100 * slidesNumber + "%";
   inner.style.transition = "all 1s";

   total.textContent = editNumber(slidesNumber);

   carousel_indicators.classList.add("carousel-indicators");
   sliderBody.style.position = "relative";

   slider.forEach((slide, index) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dot.setAttribute("data-dot", index);
      slide.style.width = width;
      carousel_indicators.appendChild(dot);
   });

   sliderBody.appendChild(carousel_indicators);

   const dot = document.querySelectorAll(".dot");

   dot[0].style.opacity = "1";

   dot.forEach((elem) => {
      elem.addEventListener("click", (e) => {
         changeOpacity(dot, +e.target.dataset.dot);
         offset = +e.target.dataset.dot * deleteNotDigits(width);
         inner.style.transform = `translateX(-${offset}px)`;
         current.textContent = editNumber(offset / deleteNotDigits(width) + 1);
      });
   });

   function changeDot(counter) {
      changeOpacity(dot, counter);
   }

   function changeOpacity(obj, counter) {
      obj.forEach((elem, index) => {
         index == counter
            ? (elem.style.opacity = "1")
            : (elem.style.opacity = "0.5");
      });
   }

   function editNumber(number) {
      if (number < 10) {
         return `0${number}`;
      } else {
         return number;
      }
   }

   if (offset == 0) {
      current.textContent = editNumber(1);
   } else {
      current.textContent = editNumber(offset / deleteNotDigits(width) + 1);
   }

   function deleteNotDigits(str) {
      return +str.replace(/[^\d.]/g, "");
   }

   nextSlide.addEventListener("click", () => {
      if (offset == (slider.length - 1) * deleteNotDigits(width)) {
         offset = 0;
      } else {
         offset += deleteNotDigits(width);
      }

      current.textContent = editNumber(offset / deleteNotDigits(width) + 1);

      inner.style.transform = `translateX(-${offset}px)`;

      counter = offset / deleteNotDigits(width);

      changeDot(counter);
   });

   prevSlide.addEventListener("click", () => {
      if (offset == 0) {
         offset = (slider.length - 1) * deleteNotDigits(width);
      } else {
         offset -= deleteNotDigits(width);
      }

      current.textContent = editNumber(offset / deleteNotDigits(width) + 1);

      inner.style.transform = `translateX(-${offset}px)`;

      counter = offset / deleteNotDigits(width);

      changeDot(counter);
   });
}

export default slider;
