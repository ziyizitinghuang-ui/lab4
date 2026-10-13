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

function scrollToStep(step) {
  setTimeout(function () {
    step.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 200);
}

function selectTemperature() {
  for (let i = 0; i < temperatureButtons.length; i++) {
    temperatureButtons[i].classList.remove("active");
  }

  this.classList.add("active");
  temperature = this.dataset.temperature;

  textureStep.classList.add("visible");
  scrollToStep(textureStep);
}

function selectTexture() {
  for (let i = 0; i < textureButtons.length; i++) {
    textureButtons[i].classList.remove("active");
  }

  this.classList.add("active");
  texture = this.dataset.texture;

  typeStep.classList.add("visible");
  scrollToStep(typeStep);
}

function selectType() {
  for (let i = 0; i < typeButtons.length; i++) {
    typeButtons[i].classList.remove("active");
  }

  this.classList.add("active");
  drinkBase = this.dataset.type;

  findDrink();
}

for (let i = 0; i < temperatureButtons.length; i++) {
  temperatureButtons[i].addEventListener("click", selectTemperature);
}

for (let i = 0; i < textureButtons.length; i++) {
  textureButtons[i].addEventListener("click", selectTexture);
}

for (let i = 0; i < typeButtons.length; i++) {
  typeButtons[i].addEventListener("click", selectType);
}

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

  setTimeout(function () {
    result.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 200);
}

startOver.addEventListener("click", function () {
  temperature = "";
  texture = "";
  drinkBase = "";

  for (let i = 0; i < temperatureButtons.length; i++) {
    temperatureButtons[i].classList.remove("active");
  }

  for (let i = 0; i < textureButtons.length; i++) {
    textureButtons[i].classList.remove("active");
  }

  for (let i = 0; i < typeButtons.length; i++) {
    typeButtons[i].classList.remove("active");
  }

  textureStep.classList.remove("visible");
  typeStep.classList.remove("visible");
  result.classList.remove("visible");

  drinkImage.src = "images/coffee.png";
  drinkImage.alt = "Recommended drink";
  drinkName.textContent = "Your drink";

  temperatureSummary.textContent = "";
  textureSummary.textContent = "";
  typeSummary.textContent = "";

  document.querySelector(".choices").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});