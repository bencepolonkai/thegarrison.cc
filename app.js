// 
const flipCards = document.querySelectorAll(".flip-card");

      // Check if the device supports hover
      const isHoverSupported = () => {
        return window.matchMedia("(hover:hover)").matches;
      };

      flipCards.forEach((card) => {
        if (isHoverSupported()) {
          card.classList.add("hover-effect");
        }
      });


      // faq.js

      const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
    
  })
})