const documentForm = document.querySelector(".login-form");
documentForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const email = this.elements.email.value.trim();
  const password = this.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }

  const infoForm = {
    email: email,
    password: password,
  };
  console.log(infoForm);
  this.reset();
}

document
  .getElementById("input")
  .addEventListener("focus", () => (this.value = "Text area"));
