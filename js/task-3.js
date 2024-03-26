const userName = document.querySelector("#name-input");
const outName = document.querySelector("#name-output");

userName.addEventListener("input", handleInput);
function handleInput(event) {
  if (event.currentTarget.value.trim() === "") {
    outName.textContext = "Anonymous";
  } else {
    outName.textContext = event.currentTarget.value.trim();
  }
}
