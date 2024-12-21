import restaurantFront from "./imgs/las-pinatas-restaurant-front-side.jpg";

export default function renderHome() {
  const content = document.getElementById("content");
  const homeText = document.createElement("div.business-hours");
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const title = document.createElement("h1");
  title.textContent = "Las Piñatas Restaurant";
  homeText.appendChild(title);

  homeText.appendChild(document.createElement("br"));
  const hoursTag = document.createElement("h2");
  hoursTag.textContent = "Hours:";
  homeText.appendChild(hoursTag);

  for (let i = 0; i < days.length; i++) {
    const day = document.createElement("p");
    day.textContent = `${days[i]}: Closed`;
    homeText.appendChild(day);
  }
  homeText.style.fontSize = "1.5rem";
  content.appendChild(homeText);

  const locationTag = document.createElement("h2");
  locationTag.textContent = "Location";

  const location = document.createElement("p");
  location.textContent = "1552 N Wells St Chicago, IL 60610";

  homeText.appendChild(document.createElement("br"));
  homeText.appendChild(locationTag);
  homeText.appendChild(location);

  const image = document.createElement("img");
  image.src = restaurantFront;

  content.appendChild(image);
}
