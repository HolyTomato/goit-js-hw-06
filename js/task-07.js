const input = document.getElementById("font-size-control");
const span = document.getElementById("text");

input.addEventListener("input", fitFontSizeToValueHandler);

function fitFontSizeToValueHandler(event) {
  span.style.fontSize = `${Number(event.currentTarget.value)}px`;
}