//click events for each button
//decrease = decrement current value by 1
//reset = set current value to 0
//increase = increment current value by 1
let count = 0;

const btns = document.querySelectorAll(".btn");
const counterValue = document.querySelector("#value");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (e.currentTarget.classList.contains("decrease")) {
      count -= 1;
    } else if (e.currentTarget.classList.contains("increase")) {
      count += 1;
    } else {
      count = 0;
    }
    if (count > 0) {
      counterValue.style.color = "green";
    } else if (count < 0) {
      counterValue.style.color = "red";
    } else {
      counterValue.style.color = "black";
    }

    counterValue.textContent = count;
  });
});
