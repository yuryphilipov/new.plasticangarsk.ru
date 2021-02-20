// let showMorePhone = document.querySelector(".show-more-phone");
// let morePhone = document.querySelector(".header-info__more-phone");
// let callback = document.querySelector(".header-info__callback");
// let searchBtn = document.querySelector(".search-btn");
// let search = document.querySelector(".search");
// let searchInput = document.getElementById("search__input");
// let searchCloseBtn = document.querySelector(".search__close-btn");
// let modalOverlay = document.querySelector(".modal-overlay");
// let modal = document.querySelector(".modal");
// let modalCloseBtn = document.querySelector(".modal__close-btn");
// let scrollUp = document.querySelector(".scroll-up");
// let headerMenu = document.querySelector(".header-menu__nav");
// let burgerBtn = document.querySelector(".header-menu__burger-btn");

// window.addEventListener("scroll", () => {
//   if (window.pageYOffset > 100) {
//     scrollUp.style.visibility = "visible";
//     scrollUp.style.opacity = "1";
//   } else {
//     scrollUp.style.visibility = "hidden";
//     scrollUp.style.opacity = "0";
//   }
// });

// showMorePhone.addEventListener("click", () => {
//   morePhone.classList.toggle("hidden");
// });

// callback.addEventListener("click", () => {
//   modalOverlay.classList.add("in");
//   modal.classList.add("active", "in");
// });

// modalOverlay.addEventListener("click", () => {
//   modalOverlay.classList.remove("in");
//   document.body.classList.remove("no-scroll");
//   document.querySelectorAll(".fade").forEach(el => {
//     el.classList.remove("in");
//   });
//   document.querySelectorAll(".open-menu").forEach(el => {
//     el.classList.remove("open-menu");
//   });
// });

// modalCloseBtn.addEventListener("click", () => {
//   modalOverlay.classList.remove("in");
//   modal.classList.remove("active", "in");
// });

// searchBtn.addEventListener("click", () => {
//   modalOverlay.classList.add("in");
//   search.classList.add("in");
//   searchInput.focus();
// });

// searchCloseBtn.addEventListener("click", () => {
//   modalOverlay.classList.remove("in");
//   search.classList.remove("in");
// });

// scrollUp.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   });
// });

// burgerBtn.addEventListener("click", () => {
//   burgerBtn.classList.toggle("open-menu");
//   headerMenu.classList.toggle("open-menu");
//   modalOverlay.classList.toggle("in");
//   document.body.classList.toggle("no-scroll");
// });

$(document).ready(function() {
  $(window).on("scroll", function() {
    if (window.pageYOffset > 100) {
      $(".scroll-up").fadeIn(500);
    } else {
      $(".scroll-up").fadeOut(500);
    }
  });

  $(".scroll-up").click(function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  $(".search-btn").click(function() {
    $(".modal-overlay").fadeIn(300);
    $(".search").fadeIn(300);
    $(".search__input").focus();
  });

  $(".modal-overlay").click(function() {
    $(this).fadeOut(300);
    $(".search").fadeOut(300);
    $(".modal").fadeOut(300);
    $(".header-menu__nav").removeClass("open-menu");
    $(".header-menu__burger-btn").removeClass("open-menu");
    $("body").removeClass("no-scroll");
  });

  $(".search__close-btn").click(function() {
    $(".search").fadeOut(300);
    $(".modal-overlay").fadeOut(300);
  });

  $(".show-more-phone").click(function() {
    if ($(".header-info__more-phone").css("display") == "none") {
      $(".header-info__more-phone").fadeIn(300);
    } else {
      $(".header-info__more-phone").fadeOut(300);
    }
    $(this).toggleClass("fa-caret-down");
    $(this).toggleClass("fa-caret-up");
  });

  $(".header-menu__burger-btn").click(function() {
    if ($(this).hasClass("open-menu")) {
      $(".modal-overlay").fadeOut(300);
    } else {
      $(".modal-overlay").fadeIn(300);
    }
    $(this).toggleClass("open-menu");
    $(".header-menu__nav").toggleClass("open-menu");
    $("body").toggleClass("no-scroll");
  });

  $(".header-info__callback").click(function() {
    $(".modal").fadeIn(300);
    $(".modal-overlay").fadeIn(300);
  });

  $(".modal__close-btn").click(function() {
    $(".modal").fadeOut(300);
    $(".modal-overlay").fadeOut(300);
  });

  $(".dropdown").hover(function() {
    if (
      !$(this)
        .parent()
        .parent()
        .hasClass("open-menu")
    ) {
      $(this)
        .children(".dropdown__submenu")
        .slideToggle(100);
    }
  });
});
