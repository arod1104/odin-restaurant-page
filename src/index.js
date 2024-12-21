import "./styles.css";
import renderHome from "./home";
import renderMenu from "./menu";

document.getElementById("home").addEventListener("click", () => {
  const homeButton = document.getElementById("home");
  if (homeButton) {
    homeButton.classList.add("active");
  }
  const content = document.getElementById("content");
  content.innerHTML = "";
  renderHome();
});

document.getElementById("menu").addEventListener("click", () => {
  const content = document.getElementById("content");
  content.innerHTML = "";
  renderMenu();
});

//  TODO: Change back to renderHome() when finished
renderHome();
// renderMenu();
