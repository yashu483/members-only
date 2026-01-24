const menuButton = document.querySelector("#header-menu-button");
const navButtons = document.querySelector("#header-nav");

navButtons.classList.add("hidden");
menuButton.addEventListener("click", (e) => {
  navButtons.classList.toggle("hidden");
});
