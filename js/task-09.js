const button = document.querySelector(".change-color");
const span = document.querySelector(".color");

button.addEventListener("click", changeBgcColorOnClickHandler);

function changeBgcColorOnClickHandler(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
