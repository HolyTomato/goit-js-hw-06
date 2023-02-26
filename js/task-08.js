const form = document.querySelector(".login-form");

form.addEventListener("submit", submitFormHandler);

function submitFormHandler(event) {
  event.preventDefault();

  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    alert("You should fill in all the fields");
  }

  const mail = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  console.log({
    mail,
    password,
  });
}
