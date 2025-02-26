// let c = 0;

const U = document.getElementById(`U`)
const R = document.getElementById(`R`)
const D = document.getElementById(`D`)
const counter = document.getElementById(`C`)

// counter.textContent = 0;
// U.onclick = function() {
//   // c = Number(document.getElementById(`C`).value);
//   c++;
//   counter.textContent = c;
// }
// R.onclick = function() {
//   // c = Number(document.getElementById(`C`).value);
//   c = 0;
//   counter.textContent = c;
// }
// D.onclick = function() {
//   // c = Number(document.getElementById(`C`).value);
//   c--;
//   counter.textContent = c;
// }

const update = () => counter.textContent = c;

U.onclick = () => {
  c++
  update();
}
R.onclick = () => {
  c = 0
  update();
}
D.onclick = () => {
  c--;
  update();
}