const input = document.getElementById("validation-input");

input.addEventListener("blur", addColorByResultHandler);

function addColorByResultHandler(event) {
  if (
    event.currentTarget.value.length ===
    Number(event.currentTarget.dataset.length)
  ) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}