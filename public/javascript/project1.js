const colors = [
  "green",
  "red",
  "blue",
  "#f15025",
  "rgba(133,122,200)",
  "#3C3248",
  "#483C32",
];
const btn = document.getElementById("btn");
const span = document.getElementById("color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  span.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
