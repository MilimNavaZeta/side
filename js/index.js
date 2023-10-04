const swiper = new Swiper('.swiper', {

  direction: 'vertical',
  loop: false,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


document.querySelector(".burger-lines").addEventListener("click", () => {
document.querySelector(".burger-menu").classList.toggle("active") })

