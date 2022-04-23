const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

//generate six-digit long hexadecimal value randomly
//assign color to body of document
//assign hex value to color span text node content as well
btn.addEventListener("click", function () {
  let randomHexColor = [];

  for (i = 0; i < 6; i++) {
    const randomHexDigit = Math.floor(Math.random() * 16);
    randomHexColor.push(hex[randomHexDigit]);
  }

  let hexString = `#${randomHexColor.join("")}`;
  color.textContent = hexString;
  document.body.style.backgroundColor = hexString;
});
