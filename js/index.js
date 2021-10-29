// showing nav menu in mobile
let navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", function () {
    navMenu.classList.remove("show-menu");
  });
}

// removing nav menu in mobile
let navLinks = document.querySelectorAll(".nav-list-item");

navLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    navMenu.classList.remove("show-menu");
  });
});

// Initialize home Swiper
let homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// changing header background when scrolling
function scrollHeader() {
  let header = document.getElementById("header");

  if (this.scrollY >= 100) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);

// initialize new swiper
let newSwiper = new Swiper(".new-swiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  centeredSlides: true,
  loop: "true",
});

// showing scroll up button when scrolling down
function scrollingUp() {
  let scrollUp = document.getElementById("scrollup");

  if (this.scrollY >= 460) {
    scrollUp.classList.add("active");
  } else {
    scrollUp.classList.remove("active");
  }
}

window.addEventListener("scroll", scrollingUp);

//scroll reveal
let sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true,
});

sr.reveal(".home-swiper, .new-swiper, .letter-container");
sr.reveal(".category-data, .trick-data, .footer-content", { interval: 100 });
sr.reveal(".about-content, .discount-img", { origin: "left" });
sr.reveal(".about-img, .discount-content", { origin: "right" });
