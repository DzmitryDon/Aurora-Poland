"use strict";
const search = document.querySelector("[data-search-btn]"),
  searchInput = document.querySelector("[data-search-input]"),
  hamburger = document.querySelector("[data-hamburger]"),
  navMenu = document.querySelector("[data-menu]");
search.addEventListener("click", function () {
  searchInput.classList.toggle("search-active");
}),
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active"),
      navMenu.classList.toggle("menu-active");
  });
