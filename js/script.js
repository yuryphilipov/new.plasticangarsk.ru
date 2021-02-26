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
    $("body").addClass("no-scroll");
  });

  $(".modal-overlay").click(function() {
    $(this).fadeOut(300);
    $(".search").fadeOut(300);
    $(".modal").fadeOut(300);
    $(".header-menu__nav").removeClass("open-menu");
    $(".header-menu__burger-btn").removeClass("open-menu");
    $(".burger-btn-open").removeClass("hidden");
    $(".burger-btn-close").addClass("hidden");
    $("body").removeClass("no-scroll");
  });

  $(".search__close-btn").click(function() {
    $(".search").fadeOut(300);
    $(".modal-overlay").fadeOut(300);
    $("body").removeClass("no-scroll");
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
    // if ($(this).hasClass("open-menu")) {
    //   $(".modal-overlay").fadeOut(300);
    // } else {
    //   $(".modal-overlay").fadeIn(300);
    // }

    $(this).toggleClass("open-menu");
    $(".burger-btn-open").toggleClass("hidden");
    $(".burger-btn-close").toggleClass("hidden");
    $(".header-menu__nav").toggleClass("open-menu");
    $("body").toggleClass("no-scroll");
    $(".search__input").focus();
  });

  $(".header-info__callback").click(function() {
    $(".modal").fadeIn(300);
    $(".modal-overlay").fadeIn(300);
    $("body").addClass("no-scroll");
  });

  $(".modal__close-btn").click(function() {
    $(".modal").fadeOut(300);
    $(".modal-overlay").fadeOut(300);
    if (!$(".header-menu__nav").hasClass("open-menu")) {
      $("body").removeClass("no-scroll");
    }
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

  $(".dropdown").click(function() {
    $(this)
      .children(".dropdown__submenu")
      .slideToggle(100);
    $(this)
      .children(".dropdown__expand")
      .children()
      .toggleClass("fa-chevron-up")
      .toggleClass("fa-chevron-down");
  });

  $(".search__input").on("input", function() {
    if ($(this).val().length > 0) {
      $(".search__clear-btn").css({ display: "inline-block" });
    } else {
      $(".search__clear-btn").css({ display: "none" });
    }
  });

  $(".search__clear-btn").click(function() {
    $(".search__input")
      .val("")
      .focus();
    $(".search__clear-btn").css({ display: "none" });
  });
});
