const btn = document.getElementById("btn");
const display = document.getElementById("display");
let clickCount = 0;

btn.addEventListener("click", () => {
  clickCount += 1;
  display.innerText = clickCount;
});
