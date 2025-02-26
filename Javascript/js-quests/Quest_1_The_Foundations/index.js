// console.log(`Hello`);
// console.log(`Tatakae`);

// window.alert(`This is an alert`)

document.getElementById(`myH1`).textContent = `Quest_1`;
document.getElementById(`myP`).textContent = `This is the first Quest`;

let age = 20;
console.log(`the age is ${age} and the type is ${typeof age}`);

let fullName = `Chetan Kishor`;
document.getElementById(`p1`).textContent = `Your Name is ${fullName}`;
document.getElementById(`p2`).textContent = age;

// let something = window.prompt(`enter something`);
// console.log(`This is a console log ${something}`);
// document.getElementById(`p3`).textContent = something;
let username;
document.getElementById(`mySubmit`).onclick = function () {
  username = document.getElementById(`name`).value;
  document.getElementById(`myH1`).textContent = `Yokoso ${username}`
}

let gf;
document.getElementById(`gfSubmit`).onclick = function() {
  gf = document.getElementById(`gf`).value;
  document.getElementById(`real`).textContent = `${username} Loves ${gf}`;
}

age = window.prompt(`Enter your age`);
age = Number(age);
age--;
console.log(age, typeof age);
