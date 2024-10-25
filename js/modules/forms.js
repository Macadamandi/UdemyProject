import { closeModal, openModal } from "./modal";
import { postData } from "../resourses/resourses";

function forms(formClass, modal, modalTimerId) {

   const forms = document.querySelectorAll(formClass);

   const message = {
      loading: "img/form/spinner.svg",
      success: "Thanks, We will contact to soon!",
      failure: "Ooops.. Something went wrong!",
   };

   forms.forEach((item) => {
      bindPostData(item);
   });

   function bindPostData(form) {
      form.addEventListener("submit", (e) => {
         e.preventDefault();

         const statusMessage = document.createElement("img");
         statusMessage.src = message.loading;
         statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
         `;
         form.insertAdjacentElement("afterend", statusMessage);

         const formData = new FormData(form);

         const json = JSON.stringify(Object.fromEntries(formData.entries()));

         postData("http://localhost:3000/requests", json)
            .then((data) => {
               console.log(data);
               showThanksModal(message.success);
               form.reset();
               statusMessage.remove();
            })
            .catch(() => {
               showThanksModal(message.failure);
            })
            .finally(() => {
               form.reset();
            });
      });
   }

   function showThanksModal(message) {
      const prevModalDialog = document.querySelector(modal);
      prevModalDialog.classList.add("hide");
      openModal(modal, modalTimerId);

      const thanksModal = document.createElement("div");
      thanksModal.classList.add(modal.slice(1));
      thanksModal.innerHTML = `
         <div class="modal__content">
            <div class="modal__close" data-close>&times;</div>
            <div class="modal__title">${message}</div>
         </div>
      `;

      document.querySelector(modal).append(thanksModal);
      setTimeout(() => {
         thanksModal.remove();
         prevModalDialog.classList.add("show");
         prevModalDialog.classList.remove("hide");
         closeModal(modal, modalTimerId);
      }, 4000);
   }

   fetch("http://localhost:3000/menu")
      .then((data) => data.json())
      .then((res) => console.log(res));
}

export default forms;