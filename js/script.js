let showMorePhone = document.querySelector(".show-more-phone");
let morePhone = document.querySelector(".header-info__more-phone");
let callback = document.querySelector(".header-info__callback");
let searchBtn = document.querySelector(".search-btn");
let search = document.querySelector(".search");
let searchInput = document.getElementById("search__input");
let searchCloseBtn = document.querySelector(".search__close-btn");
let modalOverlay = document.querySelector(".modal-overlay");
let modal = document.querySelector(".modal");
let modalCloseBtn = document.querySelector(".modal__close-btn");
let scrollUp = document.querySelector(".scroll-up");
let headerMenu = document.querySelector(".header-menu__nav");
let burgerBtn = document.querySelector(".header-menu__burger-btn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollUp.style.visibility = "visible";
    scrollUp.style.opacity = "1";
  } else {
    scrollUp.style.visibility = "hidden";
    scrollUp.style.opacity = "0";
  }
});

showMorePhone.addEventListener("click", () => {
  morePhone.classList.toggle("hidden");
});

callback.addEventListener("click", () => {
  modalOverlay.classList.add("in");
  modal.classList.add("active", "in");
});

modalOverlay.addEventListener("click", () => {
  modalOverlay.classList.remove("in");
  document.querySelectorAll(".fade").forEach(el => {
    el.classList.remove("in");
  });
  document.querySelectorAll(".open-menu").forEach(el => {
    el.classList.remove("open-menu");
  });
});

modalCloseBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("in");
  modal.classList.remove("active", "in");
});

searchBtn.addEventListener("click", () => {
  modalOverlay.classList.add("in");
  search.classList.add("in");
  searchInput.focus();
});

searchCloseBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("in");
  search.classList.remove("in");
});

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("open-menu");
  headerMenu.classList.toggle("open-menu");
  modalOverlay.classList.toggle("in");
  document.body.classList.toggle("no-scroll");
});
