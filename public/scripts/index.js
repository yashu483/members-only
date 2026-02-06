const menuButton = document.querySelector("#header-menu-button");
const navButtons = document.querySelector("#header-nav");

navButtons.classList.add("hidden");
menuButton.addEventListener("click", (e) => {
  navButtons.classList.toggle("hidden");
});

const kebabBtn = document.querySelectorAll(".kebab-btn");
const menu = document.querySelectorAll(".post-menu");

let openedMenu = 0;

kebabBtn.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    menu[openedMenu].classList.remove("open");
    menu[index].classList.toggle("open");
    openedMenu = index;
  });
});

document.addEventListener("click", closeMenu);
document.addEventListener("touchstart", closeMenu);

function closeMenu() {
  menu.forEach((btn) => {
    btn.classList.remove("open");
  });
}
