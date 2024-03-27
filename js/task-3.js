const userName = document.querySelector("#name-input");
const outName = document.querySelector("#name-output");

userName.addEventListener("input", handleInput);
function handleInput(event) {
  if (event.currentTarget.value.trim() === "") {
    outName.textContent = "Anonymous";
  } else {
    outName.textContent = event.currentTarget.value.trim();
  }
}
