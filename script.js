const temperatureButtons = document.querySelectorAll(".temperature-button");
const textureButtons = document.querySelectorAll(".texture-button");
const typeButtons = document.querySelectorAll(".type-button");

const textureStep = document.getElementById("textureStep");
const typeStep = document.getElementById("typeStep");
const result = document.getElementById("result");

const drinkImage = document.getElementById("drinkImage");
const drinkName = document.getElementById("drinkName");

const temperatureSummary = document.getElementById("temperatureSummary");
const textureSummary = document.getElementById("textureSummary");
const typeSummary = document.getElementById("typeSummary");

const startOver = document.getElementById("startOver");

let temperature = "";
let texture = "";
let drinkBase = "";

temperatureButtons.forEach(button => {
  button.addEventListener("click", () => {
    temperatureButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    temperature = button.dataset.temperature;
    textureStep.classList.add("visible");
  });
});

textureButtons.forEach(button => {
  button.addEventListener("click", () => {
    textureButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    texture = button.dataset.texture;
    typeStep.classList.add("visible");
  });
});

typeButtons.forEach(button => {
  button.addEventListener("click", () => {
    typeButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    drinkBase = button.dataset.type;

    findDrink();
  });
});

function findDrink() {
  if (
    temperature === "iced" &&
    texture === "creamy" &&
    drinkBase === "coffee"
  ) {
    showDrink(
      "images/ice Café Latté.png",
      "Iced Café Latte"
    );
  } else if (
    temperature === "iced" &&
    texture === "light" &&
    drinkBase === "coffee"
  ) {
    showDrink(
      "images/ice orange americano.png",
      "Iced Orange Americano"
    );
  } else if (
    temperature === "hot" &&
    texture === "creamy" &&
    drinkBase === "coffee"
  ) {
    showDrink(
      "images/cappuccino.png",
      "Cappuccino"
    );
  } else if (
    temperature === "hot" &&
    texture === "light" &&
    drinkBase === "coffee"
  ) {
    showDrink(
      "images/hot Americano.png",
      "Hot Americano"
    );
  } else if (
    temperature === "iced" &&
    texture === "creamy" &&
    drinkBase === "tea"
  ) {
    showDrink(
      "images/ice matcha latte.png",
      "Iced Matcha Latte"
    );
  } else if (
    temperature === "iced" &&
    texture === "light" &&
    drinkBase === "tea"
  ) {
    showDrink(
      "images/ice lemon tea.png",
      "Iced Lemon Tea"
    );
  } else if (
    temperature === "hot" &&
    texture === "creamy" &&
    drinkBase === "tea"
  ) {
    showDrink(
      "images/hot milk tea.png",
      "Hot Milk Tea"
    );
  } else if (
    temperature === "hot" &&
    texture === "light" &&
    drinkBase === "tea"
  ) {
    showDrink(
      "images/hot jasmine tea.png",
      "Hot Jasmine Tea"
    );
  }
}

function showDrink(image, name) {
  drinkImage.src = image;
  drinkImage.alt = name;
  drinkName.textContent = name;

  temperatureSummary.textContent = temperature;
  textureSummary.textContent = texture;
  typeSummary.textContent = drinkBase;

  result.classList.add("visible");

  setTimeout(() => {
    result.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 200);
}

startOver.addEventListener("click", () => {
  temperature = "";
  texture = "";
  drinkBase = "";

  temperatureButtons.forEach(btn => btn.classList.remove("active"));
  textureButtons.forEach(btn => btn.classList.remove("active"));
  typeButtons.forEach(btn => btn.classList.remove("active"));

  textureStep.classList.remove("visible");
  typeStep.classList.remove("visible");
  result.classList.remove("visible");

  drinkImage.src = "";
  drinkName.textContent = "";

  temperatureSummary.textContent = "";
  textureSummary.textContent = "";
  typeSummary.textContent = "";

  document.querySelector(".choices").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});