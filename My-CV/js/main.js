"use strict";

//Burger handler
(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header-nav");
  const menuCloseItem = document.querySelector(".header-nav-close");
  const menuLinks = document.querySelectorAll(".header-item");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header-nav-active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header-nav-active");
  });

  if (window.innerWidth <= 800) {
    for (let i = 0; i < menuLinks.length; i += 1) {
      menuLinks[i].addEventListener("click", () => {
        menu.classList.remove("header-nav-active");
      });
    }
  }
})();
