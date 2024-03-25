function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsDiv = document.getElementById("controls");
const input = controlsDiv.querySelector("input");
const createButton = controlsDiv.querySelector("[data-create]");
const destroyButton = controlsDiv.querySelector("[data-destroy]");
const boxesDiv = document.getElementById("boxes");

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
    const boxes = Array.from({ length: amount }, (_, index) => {
      const box = document.createElement("div");
      const size = 30 + index * 10;
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      return box;
    });
    boxesDiv.append(...boxes);
    input.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}
