function timer(id, deadline) {
   // TIMER

   function getTimeRemaining(endtime) {
      let days, hours, minutes, seconds;

      const time = Date.parse(endtime) - Date.parse(new Date()); //разница в секундах

      if (time <= 0) {
         days = 0;
         hours = 0;
         minutes = 0;
         seconds = 0;
      } else {
         (days = Math.floor(time / (1000 * 60 * 60 * 24))),
            (hours = Math.floor((time / (1000 * 60 * 60)) % 24)),
            (minutes = Math.floor((time / 1000 / 60) % 60)),
            (seconds = Math.floor((time / 1000) % 60));
      }

      return {
         time: time,
         days: days,
         hours: hours,
         minutes: minutes,
         seconds: seconds,
      };
   }

   function setZero(num) {
      if (num >= 0 && num < 10) {
         return `0${num}`;
      } else return num;
   }

   function setTimer(selector, endtime) {
      const timer = document.querySelector(selector),
         days = timer.querySelector("#days"),
         hours = timer.querySelector("#hours"),
         minutes = timer.querySelector("#minutes"),
         seconds = timer.querySelector("#seconds"),
         setTimerInterval = setInterval(showTime, 1000),
         promotion = document.querySelector(".promotion");

      showTime();

      function showTime() {
         const t = getTimeRemaining(endtime);
         days.innerHTML = setZero(t.days);
         hours.innerHTML = setZero(t.hours);
         minutes.innerHTML = setZero(t.minutes);
         seconds.innerHTML = setZero(t.seconds);

         if (t.time <= 0) {
            console.log(t.time);
            clearInterval(setTimerInterval);
            promotion.style.visibility = "hidden";
            promotion.style.padding = "unset";
         }
      }
   }

   setTimer(id, deadline);
}

export default timer;