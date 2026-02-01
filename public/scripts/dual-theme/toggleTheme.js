const toggle = document.querySelector("#theme-toggle");
const toggleBig = document.querySelector("#theme-toggle-big");

toggle.addEventListener("click", (e) => {
  let theme = localStorage.getItem("theme");
  if (theme === "light") {
    setDarkTheme();
    toggle.textContent = "Light Theme";
  } else {
    setLightTheme();
    toggle.textContent = "Dark Theme";
  }
});

toggleBig.addEventListener("click", (e) => {
  let theme = localStorage.getItem("theme");
  if (theme === "light") {
    setDarkTheme();
    toggle.textContent = "Light Theme";
  } else {
    setLightTheme();
    toggle.textContent = "Dark Theme";
  }
});

function setDarkTheme() {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
}

function setLightTheme() {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
}

const currentTheme = document.documentElement.getAttribute("data-theme");
if (currentTheme === "dark") {
  toggle.textContent = "Light Theme";
} else {
  toggle.textContent = "Dark Theme";
}
