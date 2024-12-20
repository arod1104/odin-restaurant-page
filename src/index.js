import "./styles.css";
import restaurantFront from "./imgs/las-pinatas-restaurant-front-side.jpg";

document.getElementById("home").addEventListener("click", () => {
  const homeButton = document.getElementById("home");
  if (homeButton) {
    homeButton.classList.add("active");
  }
  const content = document.getElementById("content");
  content.innerHTML = "";
  renderHome();
});

function renderHome() {
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

// Menu Tab JS
document.getElementById("menu").addEventListener("click", () => {
  const content = document.getElementById("content");
  content.innerHTML = "";
  renderMenu();
});

function renderMenu() {
  const content = document.getElementById("content");
  const menuDiv = document.createElement("div");
  menuDiv.className = "menu";

  const menuTitle = document.createElement("p");
  menuTitle.className = "menu-title";
  menuTitle.textContent = "Las Piñatas Menu";
  menuDiv.appendChild(menuTitle);

  renderMenuAppetizers(menuDiv);
  renderMenuEggs(menuDiv);
  renderMenuCombinations(menuDiv);
  renderMenuMexicanSelections(menuDiv);

  content.appendChild(menuDiv);
}

function renderMenuAppetizers(menuDiv) {
  // Create the main section element
  const section = document.createElement("section");

  // Create the header div and its content
  const sectionHeader = document.createElement("div");
  sectionHeader.className = "section-header";

  const sectionTitle = document.createElement("p");
  sectionTitle.className = "section-title";
  sectionTitle.textContent = "Appetizers";

  sectionHeader.appendChild(sectionTitle);
  section.appendChild(sectionHeader);

  // Define the appetizers data
  const appetizers = [
    {
      dish: "Queso Fundido",
      info: "Melted chihuaua cheese filled with chorizo flour tortillas",
    },
    {
      dish: "Nachos",
      info: "Corn chips with a spread or beans melted chihuahua cheese and topped with fresh guacamole, sour cream, slices of jalapeno peppers on top are optional",
    },
    {
      dish: "Guacamole",
      info: "Fresh avocado dip served with corn tortilla chips and hot sauce",
    },
    {
      dish: "Pinata Appetizer",
      info: "Flour tortilla chips stuffed with chihuahua cheese and chorizo",
    },
    {
      dish: "Mexican Garden Salad",
      info: "Avocado wedges, shredded lettuce, tomato slices, and a variety of fresh vegetables, served with our own house dressing",
    },
  ];

  // Loop through the appetizers array and create section-item divs
  appetizers.forEach(({ dish, info }) => {
    const sectionItem = document.createElement("div");
    sectionItem.className = "section-item";

    const dishName = document.createElement("p");
    dishName.className = "dish";
    dishName.textContent = dish;

    const dishInfo = document.createElement("p");
    dishInfo.className = "dish-info";
    dishInfo.textContent = info;

    sectionItem.appendChild(dishName);
    sectionItem.appendChild(dishInfo);
    section.appendChild(sectionItem);
  });

  // Append the section to the body or another container
  document.body.appendChild(section);
  menuDiv.appendChild(section);
}

function renderMenuEggs(menuDiv) {
  // Create the main section element
  const section = document.createElement("section");

  // Create the header div and its content
  const sectionHeader = document.createElement("div");
  sectionHeader.className = "section-header";

  const sectionTitle = document.createElement("p");
  sectionTitle.className = "section-title";
  sectionTitle.textContent = "Huevos - Eggs";

  const sectionInfo = document.createElement("p");
  sectionInfo.className = "section-info";
  sectionInfo.textContent =
    "All Egg Dishes are Served with Rice, Beans and Tortillas";

  sectionHeader.appendChild(sectionTitle);
  sectionHeader.appendChild(sectionInfo);
  section.appendChild(sectionHeader);

  // Define the egg dishes data
  const eggDishes = [
    {
      dish: "Huevos Rancheros",
      info: "Three fried eggs covered with tomato sauce",
    },
    {
      dish: "Huevos A La Mexicana",
      info: "Three scrambled eggs cooked with onion, tomato and cilantro",
    },
    {
      dish: "Huevos Con Chorizo",
      info: "Three scrambled eggs cooked with Mexican sausage",
    },
  ];

  // Loop through the egg dishes array and create section-item divs
  eggDishes.forEach(({ dish, info }) => {
    const sectionItem = document.createElement("div");
    sectionItem.className = "section-item";

    const dishName = document.createElement("p");
    dishName.className = "dish";
    dishName.textContent = dish;

    const dishInfo = document.createElement("p");
    dishInfo.className = "dish-info";
    dishInfo.textContent = info;

    sectionItem.appendChild(dishName);
    sectionItem.appendChild(dishInfo);
    section.appendChild(sectionItem);
  });

  // Append the section to the given menuDiv
  menuDiv.appendChild(section);
}

function renderMenuCombinations(menuDiv) {
  // Create the main section element
  const section = document.createElement("section");

  // Create the header div and its content
  const sectionHeader = document.createElement("div");
  sectionHeader.className = "section-header";

  const sectionTitle = document.createElement("p");
  sectionTitle.className = "section-title";
  sectionTitle.textContent = "Combinations";

  sectionHeader.appendChild(sectionTitle);
  section.appendChild(sectionHeader);

  // Define the combinations data
  const combinations = [
    {
      dish: "No. 1",
      info: "Beef flauta, cheese chile relleno, chicken burrito",
    },
    {
      dish: "No. 2",
      info: "Chorizo burrito, chicken taco, guacamole tostado",
    },
    {
      dish: "No. 3",
      info: "Cheese burrito, guacamole tostado, bean taco",
    },
    {
      dish: "No. 4",
      info: "Chicken tostada, cheese nortena, beef taco",
    },
    {
      dish: "No. 5",
      info: "Chorizo taco, chicken burrito, beef suiza",
    },
    {
      dish: "No. 6",
      info: "Cheese burrito, guacamole taco, cheese nortena",
    },
    {
      dish: "No. 7",
      info: "Chicken mole enchilada, quesadilla, chile relleno burrito",
    },
  ];

  // Loop through the combinations array and create section-item divs
  combinations.forEach(({ dish, info }) => {
    const sectionItem = document.createElement("div");
    sectionItem.className = "section-item";

    const dishName = document.createElement("p");
    dishName.className = "dish";
    dishName.textContent = dish;

    const dishInfo = document.createElement("p");
    dishInfo.className = "dish-info";
    dishInfo.textContent = info;

    sectionItem.appendChild(dishName);
    sectionItem.appendChild(dishInfo);
    section.appendChild(sectionItem);
  });

  // Append the section to the given menuDiv
  menuDiv.appendChild(section);
}

function renderMenuMexicanSelections(menuDiv) {
  // Create the main section element
  const section = document.createElement("section");

  // Create the header div and its content
  const sectionHeader = document.createElement("div");
  sectionHeader.className = "section-header";

  const sectionTitle = document.createElement("p");
  sectionTitle.className = "section-title";
  sectionTitle.textContent = "Mexican Selections";

  const sectionInfo = document.createElement("p");
  sectionInfo.className = "section-info";
  sectionInfo.textContent =
    "All Of These Dishes Are Served With Rice And Beans All May Be Served Vegetarian Style, First Serving Of Corn Chips And Hot Sauce Are Complementary Seconds $3.50 Extra";

  sectionHeader.appendChild(sectionTitle);
  sectionHeader.appendChild(sectionInfo);
  section.appendChild(sectionHeader);

  // Define the Mexican selections data
  const mexicanSelections = [
    {
      dish: "Tacos",
      info: "Three folded corn tortillas stuffed with your choice of beef, chicken or guacamole, topped with lettuce, tomato, onion, and aged anejo cheese",
    },
    {
      dish: "Steak Tacos",
      info: "Three folded corn tortillas filled with choice chunks of steak and topped with lettuce, tomato and anejo cheese",
    },
    {
      dish: "Flautas",
      info: "Crisp rolled tortillas stuffed with chicken or beef with a coating of guacamole and a dash of sour cream",
    },
    {
      dish: "Tostadas",
      info: "Crisp flat corn tortillas stuffed with chicken or beef with a coating of guacamole and a dash of sour cream",
    },
    {
      dish: "Enchiladas Mole Sauce",
      info: "Three soft corn tortillas dipped in mole sauce, filled with beef, chicken, and/or cheese topped with melted chihuahua cheese",
    },
    {
      dish: "Enchiladas Nortenas",
      info: "Three soft corn tortillas dipped in red hot sauce with choice of filling beef, chicken and/or cheese and melted cheese on top",
    },
    {
      dish: "Suizas",
      info: "Three soft corn tortillas dipped in mild tomato sauce with your choice of filling beef, chicken or cheese and melted cheese on top",
    },
    {
      dish: "Enchiladas Mixtas",
      info: "One of each of the above enchilada dishes with your choice of filling beef, chicken or cheese",
    },
    {
      dish: "Enchiladas Verdes",
      info: "Three soft corn tortillas dipped in green hot tomato and jalapeno sauce filled with your choice of beef, chicken, or cheese and melted chihuahua cheese on top",
    },
    {
      dish: "Steak Taco Salad",
      info: "Two cup shaped crispy flour tortillas filled with chunks of steak, lettuce, guacamole, cheese and sour cream",
    },
    {
      dish: "Chimichangas",
      info: "Soft fried flour tortillas with a spread of beans and filled with your choice of beef, chicken or cheese covered with a mild tomato sauce, melted cheese and guacamole on top and a dash of sour cream",
    },
    {
      dish: "Burritos",
      info: "Three grilled flour tortillas stuffed with your choice of beef, chicken or cheese",
    },
    {
      dish: "Quesadillas",
      info: "Grilled corn or flour tortilla, filled with melted chihuahua cheese",
    },
  ];

  // Loop through the Mexican selections array and create section-item divs
  mexicanSelections.forEach(({ dish, info }) => {
    const sectionItem = document.createElement("div");
    sectionItem.className = "section-item";

    const dishName = document.createElement("p");
    dishName.className = "dish";
    dishName.textContent = dish;

    const dishInfo = document.createElement("p");
    dishInfo.className = "dish-info";
    dishInfo.textContent = info;

    sectionItem.appendChild(dishName);
    sectionItem.appendChild(dishInfo);
    section.appendChild(sectionItem);
  });

  // Append the section to the given menuDiv
  menuDiv.appendChild(section);
}

//  TODO: Change back to renderHome() when finished
// renderHome();
renderMenu();
