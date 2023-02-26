const divBox = document.getElementById("boxes");
const input = document.querySelector("#controls > input");
const btnCreate = document.querySelector(`[data-create]`);
const btnDestroy = document.querySelector(`[data-destroy]`);

btnCreate.addEventListener("click", onBtnCreateClickHandler);
btnDestroy.addEventListener("click", onBtnDestroyClickHandler);

function onBtnDestroyClickHandler(event) {
  divBox.innerHTML = "";
}

function onBtnCreateClickHandler(event) {
  divBox.append(...createBoxes(input.value));
}

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  const markup = [];
  for (let i = 0; i < amount; i += 1) {
    width += 10;
    height += 10;

    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();

    div.style.width = width + "px";
    div.style.height = height + "px";

    markup.push(div);
  }
  return markup;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}