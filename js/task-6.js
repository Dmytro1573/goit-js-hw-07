function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const controlsDiv = document.querySelector("#controls");
const input = controlsDiv.querySelector("input");
const createButton = controlsDiv.querySelector("[data-create]");
const destroyButton = controlsDiv.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");
const messageDiv = document.querySelector("#message");

boxesDiv.style.display = "flex";
boxesDiv.style.flexWrap = "wrap";
boxesDiv.style.alignItems = "right";
boxesDiv.style.marginTop = "30px";
boxesDiv.style.gap = "16px";

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    boxesDiv.innerHTML = "";
    for (let i = 0; i < amount; i++) {
      const size = 30 + i * 10;
      const box = document.createElement("div");
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesDiv.appendChild(box);
    }
    input.value = "";
  }
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}
