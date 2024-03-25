function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const color = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

color.addEventListener("click", handleClick);

function handleClick() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
}
