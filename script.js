let header = document.querySelector("header");
let menu = document.querySelector("#menuicon");
let navbar = document.querySelector(".navbar");  

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}
window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
}

window.addEventListener("scroll", ()=> {
  header.classList.toggle("shadow", window.scrollY>0);
});

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper = new Swiper(".coming-container", {
    slidesPerView: 4,
    centeredSlides: false,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
  });

