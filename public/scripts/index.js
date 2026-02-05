const menuButton = document.querySelector("#header-menu-button");
const navButtons = document.querySelector("#header-nav");

navButtons.classList.add("hidden");
menuButton.addEventListener("click", (e) => {
  navButtons.classList.toggle("hidden");
});

const kebabBtn = document.querySelector(".kebab-btn");
const menu = document.querySelector(".post-menu");

kebabBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.classList.toggle("open");
});

document.addEventListener("click", closeMenu);
document.addEventListener("touchstart", closeMenu);

function closeMenu() {
  menu.classList.remove("open");
}
