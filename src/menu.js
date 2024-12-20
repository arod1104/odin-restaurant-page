export default function renderMenu() {
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
  renderMenuSuggestions(menuDiv);
  renderBeverages(menuDiv);
  renderBeer(menuDiv);
  renderWines(menuDiv);

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

function renderMenuSuggestions(menuDiv) {
  // Create the main section element
  const section = document.createElement("section");

  // Create the header div and its content
  const sectionHeader = document.createElement("div");
  sectionHeader.className = "section-header";

  const sectionTitle = document.createElement("p");
  sectionTitle.className = "section-title";
  sectionTitle.textContent = "After Dinner Suggestions";

  sectionHeader.appendChild(sectionTitle);
  section.appendChild(sectionHeader);

  // Define the after dinner suggestions data
  const suggestions = [
    {
      dish: "Cuarenta Y Tres",
      price: "$6.75",
      info: "World famous spanish liqueur, served straight or on the rocks (forty three)",
    },
    {
      dish: "Mexican Coffee",
      price: "$7.95",
      info: "Delightful combination of tequila kahlua and cinnamon coffee topped with whipped cream",
    },
    {
      dish: "Mexican Stinger",
      price: "$6.75",
      info: "Tequila, orange liqueur and white creme de menthe",
    },
    {
      dish: "Brave Bull",
      price: "$6.75",
      info: "Tequila and kahlua served on the rocks",
    },
    {
      dish: "El Matador - The Bull Fighter",
      price: "$6.75",
      info: "Forty three and vodka served on the rocks",
    },
    {
      dish: "Pinatas Coffee",
      price: "$7.95",
      info: "Cuarenta y tres, tequila and hot cinnamon coffee topped with whipped cream",
    },
    {
      dish: "Spanish Fly",
      price: "$6.75",
      info: "Forty three and brandy served on the rocks",
    },
  ];

  // Loop through the suggestions array and create section-item divs
  suggestions.forEach(({ dish, price, info }) => {
    const sectionItem = document.createElement("div");
    sectionItem.className = "section-item";

    const dishPriceBox = document.createElement("div");
    dishPriceBox.className = "dish-price-box";

    const dishName = document.createElement("p");
    dishName.className = "dish";
    dishName.textContent = dish;

    const dishPrice = document.createElement("p");
    dishPrice.className = "price";
    dishPrice.textContent = price;

    dishPriceBox.appendChild(dishName);
    dishPriceBox.appendChild(dishPrice);

    const dishInfo = document.createElement("p");
    dishInfo.className = "dish-info";
    dishInfo.textContent = info;

    sectionItem.appendChild(dishPriceBox);
    sectionItem.appendChild(dishInfo);
    section.appendChild(sectionItem);
  });

  // Append the section to the given menuDiv
  menuDiv.appendChild(section);
}

function renderBeverages(menuDiv) {
  // Create the main section element
  const section = document.createElement("section");

  // Create the header div and its content
  const sectionHeader = document.createElement("div");
  sectionHeader.className = "section-header";

  const sectionTitle = document.createElement("p");
  sectionTitle.className = "section-title";
  sectionTitle.textContent = "Beverages";

  sectionHeader.appendChild(sectionTitle);
  section.appendChild(sectionHeader);

  // Define the beverages data
  const beverages = [
    { name: "Mexican Coffee", price: "$2.25", info: "With cinnamon" },
    { name: "Hot Tea", price: "$2.25", info: "" },
    { name: "Iced Tea", price: "$2.75", info: "" },
    { name: "Milk", price: "$2.75", info: "" },
    { name: "Hot Mexican Chocolate", price: "$3.95", info: "" },
    { name: "Orange Tea", price: "$2.75", info: "" },
    { name: "Soft Drinks", price: "$2.75", info: "" },
  ];

  // Loop through the beverages array and create section-item divs
  beverages.forEach(({ name, price, info }) => {
    const sectionItem = document.createElement("div");
    sectionItem.className = "section-item";

    const beveragePriceBox = document.createElement("div");
    beveragePriceBox.className = "beverage-price-box";

    const beverageName = document.createElement("p");
    beverageName.className = "beverage";
    beverageName.textContent = name;

    const beveragePrice = document.createElement("p");
    beveragePrice.className = "price";
    beveragePrice.textContent = price;

    beveragePriceBox.appendChild(beverageName);
    beveragePriceBox.appendChild(beveragePrice);

    sectionItem.appendChild(beveragePriceBox);

    if (info) {
      const beverageInfo = document.createElement("p");
      beverageInfo.className = "beverage-info";
      beverageInfo.textContent = info;
      sectionItem.appendChild(beverageInfo);
    }

    section.appendChild(sectionItem);
  });

  // Append the section to the given menuDiv
  menuDiv.appendChild(section);
}

function renderBeer(menuDiv) {
  // Create the main section element
  const section = document.createElement("section");

  // Create the header div and its content
  const sectionHeader = document.createElement("div");
  sectionHeader.className = "section-header";

  const sectionTitle = document.createElement("p");
  sectionTitle.className = "section-title";
  sectionTitle.textContent = "Beer";

  sectionHeader.appendChild(sectionTitle);
  section.appendChild(sectionHeader);

  // Define the beer data
  const beers = [
    { name: "Mexican", price: "$4.75" },
    { name: "Domestic", price: "$4.25" },
  ];

  // Loop through the beer array and create section-item divs
  beers.forEach(({ name, price }) => {
    const sectionItem = document.createElement("div");
    sectionItem.className = "section-item";

    const beveragePriceBox = document.createElement("div");
    beveragePriceBox.className = "beverage-price-box";

    const beverageName = document.createElement("p");
    beverageName.className = "beverage";
    beverageName.textContent = name;

    const beveragePrice = document.createElement("p");
    beveragePrice.className = "price";
    beveragePrice.textContent = price;

    beveragePriceBox.appendChild(beverageName);
    beveragePriceBox.appendChild(beveragePrice);
    sectionItem.appendChild(beveragePriceBox);

    section.appendChild(sectionItem);
  });

  // Append the section to the given menuDiv
  menuDiv.appendChild(section);
}

function renderWines(menuDiv) {
  // Create the main section element
  const section = document.createElement("section");

  // Create the header div and its content
  const sectionHeader = document.createElement("div");
  sectionHeader.className = "section-header";

  const sectionTitle = document.createElement("p");
  sectionTitle.className = "section-title";
  sectionTitle.textContent = "Wines";

  sectionHeader.appendChild(sectionTitle);
  section.appendChild(sectionHeader);

  // Define the wines data
  const wines = [
    { name: "By The Glass", price: "$4.95" },
    { name: "1/2 Carafe", price: "$9.95" },
    { name: "Full Carafe", price: "$16.95" },
    { name: "Strawberry Pina Colada", price: "$8.25" },
    { name: "Pina Colada", price: "$7.95" },
    {
      name: "Strawberry Margarita",
      sizes: [
        { size: "L", price: "$8.95" },
        { size: "S", price: "$6.95" },
      ],
    },
    { name: "Call Drinks", price: "$5.95" },
    { name: "Bar Drinks", price: "$5.25" },
  ];

  // Loop through the wines array and create section-item divs
  wines.forEach(({ name, price, sizes }) => {
    const sectionItem = document.createElement("div");
    sectionItem.className = "section-item";

    const beveragePriceBox = document.createElement("div");
    beveragePriceBox.className = "beverage-price-box";

    const beverageName = document.createElement("p");
    beverageName.className = "beverage";
    beverageName.textContent = name;

    beveragePriceBox.appendChild(beverageName);

    if (sizes) {
      // If there are sizes, create the size and price structure
      const pricesDiv = document.createElement("div");
      pricesDiv.className = "prices";

      sizes.forEach(({ size, price }) => {
        const priceLabel = document.createElement("div");
        priceLabel.className = "price-label";

        const beverageSize = document.createElement("p");
        beverageSize.className = "beverage-size";
        beverageSize.textContent = size;

        const beveragePrice = document.createElement("p");
        beveragePrice.className = "price";
        beveragePrice.textContent = price;

        priceLabel.appendChild(beverageSize);
        priceLabel.appendChild(beveragePrice);
        pricesDiv.appendChild(priceLabel);
      });

      beveragePriceBox.appendChild(pricesDiv);
    } else {
      // Otherwise, just add the single price
      const beveragePrice = document.createElement("p");
      beveragePrice.className = "price";
      beveragePrice.textContent = price;

      beveragePriceBox.appendChild(beveragePrice);
    }

    sectionItem.appendChild(beveragePriceBox);
    section.appendChild(sectionItem);
  });

  // Append the section to the given menuDiv
  menuDiv.appendChild(section);
}
