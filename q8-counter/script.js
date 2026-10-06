let count = 0;

const counter = document.querySelector("#counter");
const increaseButton = document.querySelector("#increase");
const decreaseButton = document.querySelector("#decrease");
const resetButton = document.querySelector("#reset");
const message = document.querySelector("#message");

function updateCounter() {
  counter.textContent = count;

  if (count > 0) {
    counter.style.color = "green";
  } else if (count < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
}

increaseButton.addEventListener("click", function () {
  if (count < 20) {
    count++;
    message.textContent = "";
  } else {
    message.textContent = "Maximum limit reached: 20";
  }

  updateCounter();
});

decreaseButton.addEventListener("click", function () {
  if (count > -20) {
    count--;
    message.textContent = "";
  } else {
    message.textContent = "Minimum limit reached: -20";
  }

  updateCounter();
});

resetButton.addEventListener("click", function () {
  count = 0;
  message.textContent = "";

  updateCounter();
});

updateCounter();
