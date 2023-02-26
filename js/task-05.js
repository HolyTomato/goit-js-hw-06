const input = document.getElementById("name-input");
const span = document.getElementById("name-output");

input.addEventListener("input", getInputValuesHandler);

function getInputValuesHandler(event) {
  span.textContent = event.currentTarget.value;
}

