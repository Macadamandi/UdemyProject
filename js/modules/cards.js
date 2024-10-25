import { getResource } from "../resourses/resourses";

function cards() {
   // Cards

   class CardOfMenu {
      constructor(imgSrc, subtitle, descr, total, ...classes) {
         this.imgSrc = imgSrc;
         this.subtitle = subtitle;
         this.descr = descr;
         this.total = total;
         this.classes = classes;
      }

      createCard() {
         let menu = document.createElement("div"),
            img = document.createElement("img"),
            subtitle = document.createElement("h3"),
            descr = document.createElement("div"),
            divider = document.createElement("div"),
            price = document.createElement("div"),
            cost = document.createElement("div"),
            count = document.createElement("span"),
            total = document.createElement("div"),
            container = document.querySelector(".menu__field .container");

         if (this.classes.length === 0) {
            this.newElement = "menu__item";
            menu.classList.add(this.newElement);
         } else {
            this.classes.forEach((className) => menu.classList.add(className));
         }

         //menu.classList.add('menu__item');
         img.setAttribute("src", this.imgSrc);

         subtitle.classList.add("menu__item-subtitle");
         subtitle.textContent = this.subtitle;

         descr.classList.add("menu__item-descr");
         descr.textContent = this.descr;

         divider.classList.add("menu__item-divider");
         price.classList.add("menu__item-price");

         cost.classList.add("menu__item-cost");
         cost.textContent = "Цена:";

         total.classList.add("menu__item-total");
         count.textContent = this.total;
         total.textContent = " грн/день";
         total.insertBefore(count, total.firstChild);

         menu.appendChild(img);
         menu.appendChild(subtitle);
         menu.appendChild(descr);
         menu.appendChild(divider);
         menu.appendChild(price);

         price.appendChild(cost);
         price.appendChild(total);

         container.appendChild(menu);
      }
   }

   getResource('http://localhost:3000/menu')
      .then(data => {
         data.forEach(({ img, title, descr, price }) => {
            new CardOfMenu(img, title, descr, price, 'menu__item').createCard();
         });
      });
}

export default cards;