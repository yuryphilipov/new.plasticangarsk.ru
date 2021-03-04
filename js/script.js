$(document).ready(function() {
  // Отображение/скрытие кнокпи "Вверх"
  $(window).on("scroll", function() {
    if (window.pageYOffset > 100) {
      $(".scroll-up").fadeIn(500);
    } else {
      $(".scroll-up").fadeOut(500);
    }
  });

  // Скроллинг наверх по клику на кнопку
  $(".scroll-up").click(function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Отображение блока поиска по сайту
  $(".search-btn").click(function() {
    $(".search").fadeIn(300);
    $(".search__input").focus();
    $("body").addClass("no-scroll");
  });

  // Закрытие поиска по клику на элемент с атрибутом "data-close"
  $(".search").click(function(event) {
    if (event.target.dataset.close) {
      $(".search").fadeOut(300);
      $("body").removeClass("no-scroll");
    }
  });

  // Появление кнопки очистки в строке поиска
  $(".search__input").on("input", function() {
    if ($(this).val().length > 0) {
      $(".search__clear-btn").css({ display: "inline-block" });
    } else {
      $(".search__clear-btn").css({ display: "none" });
    }
  });

  // Очистка строки поиска по кнопке
  $(".search__clear-btn").click(function() {
    $(".search__input")
      .val("")
      .focus();
    $(".search__clear-btn").css({ display: "none" });
  });

  // Отображение/скрытие второго телефона
  $(".show-more-phone").click(function() {
    if ($(".header-info__more-phone").css("display") == "none") {
      $(".header-info__more-phone").fadeIn(300);
    } else {
      $(".header-info__more-phone").fadeOut(300);
    }
    $(this).toggleClass("fa-caret-down");
    $(this).toggleClass("fa-caret-up");
  });

  // Отображение/скрытие главного меню в мобильной версии сайта
  $(".header-menu__burger-btn").click(function() {
    $(this).toggleClass("open-menu");
    $(".burger-btn-open").toggleClass("hidden");
    $(".burger-btn-close").toggleClass("hidden");
    $(".header-menu__nav").toggleClass("open-menu");
    $("body").toggleClass("no-scroll");
    $(".search__input").focus();
  });

  // Появление/скрытие меню с продукцией при наведении на кнопку "Продукция"
  $(".product-btn").hover(function() {
    if (
      !$(this)
        .parent()
        .hasClass("open-menu")
    ) {
      $(".products").slideToggle(300);
    }
  });

  // Появление/скрытие меню с продукцией при клике на кнопку "Продукция" в мобильной версии сайта
  $(".product-btn").click(function() {
    $(".products").slideDown(100);
  });

  // Появление/скрытие подменю пунктов главного меню при наведении
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

  // Появление/скрытие подменю пунктов главного меню при клике в мобильной версии сайта
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

  // Создание модальных окон: "Вызов обратного звонка", "Выбор города". Функция modal берется из plugins/modal/index.js
  const modalCallback = modal({
    title: "Вызов обратного звонка",
    closable: true,
    content: `<p></p>`,
    buttons: [{ text: "Ok", type: "" }, { text: "Cancel", type: "" }]
  });

  const modalCity = modal({
    title: "Выберите город",
    closable: true,
    content: `<p></p>`
  });

  // Отображение модального окна "Вызов обратного звонка"
  $(".header-info__callback").click(function() {
    modalCallback.open();
  });

  // Отображение модального окна "Выбор города"
  $(".header-info__city-select").click(function() {
    modalCity.open();
  });
});
