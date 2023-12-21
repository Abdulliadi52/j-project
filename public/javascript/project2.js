const btns = document.querySelectorAll("#btn");
const span = document.getElementById("text");
let count = 0;
btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (btn.classList.contains("increase")) {
      count++;
      span.style.color = "green";
    } else if (btn.classList.contains("decrease")) {
      count--;
      span.style.color = "red";
    } else {
      count = 0;
      span.style.color = "black";
    }
    span.textContent = count;
  });
});
