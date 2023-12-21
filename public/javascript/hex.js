const hexs = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const btn = document.getElementById("btn");
const span = document.getElementById("color");

let i = 0;
btn.addEventListener("click", function () {
  let hexColor = "#";
  for (i = 0; i < 6; i++) {
    hexColor += hexs[getRandomNumber()];
  }
  document.body.style.backgroundColor = hexColor;
  span.textContent = hexColor;
});
function getRandomNumber() {
  return Math.floor(Math.random() * hexs.length);
}
