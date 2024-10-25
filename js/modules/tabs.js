function tabs(content, parent, items, activeClass) {
   // TABS

   const tabsContent = document.querySelectorAll(content),
      tabsParent = document.querySelector(parent),
      tabs = document.querySelectorAll(items);

   function hideTabContent() {
      tabsContent.forEach((item) => {
         item.classList.add("hide");
         item.classList.remove("show", "fade");
      });

      tabs.forEach((item) => {
         item.classList.remove(activeClass);
      });
   }

   function showTabContent(index = 0) {
      tabsContent[index].classList.add("show", "fade");
      tabsContent[index].classList.remove("hide");
      tabs[index].classList.add(activeClass);
   }

   hideTabContent();
   showTabContent();

   tabsParent.addEventListener("click", (event) => {
      const target = event.target;

      if (target && target.classList.contains(items.slice(1))) {
         tabs.forEach((item, index) => {
            if (target == item) {
               hideTabContent();
               showTabContent(index);
            }
         });
      }
   });
}

export default tabs;
