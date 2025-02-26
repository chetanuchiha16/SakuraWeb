// console.log(r);
const die1 = document.getElementById(`d1`);
const die2 = document.getElementById(`d2`);
const die3 = document.getElementById(`d3`);
let click = document.getElementById(`click`);
// let update = document.getElementById(`v`);
let randnum1;
let randnum2;
let randnum3;
console.log(die1.textContent);
click.onclick = function () {
  die1.textContent = Math.floor(Math.random() * 6 + 1);
  die2.textContent = Math.floor(Math.random() * 6 + 1);
  die3.textContent = Math.floor(Math.random() * 6 + 1);

  // die1.textContent = randnum1;
  // die2.textContent = randnum2;
  // die3.textContent = randnum3;
};



const radio1 = document.getElementById(`radio1`);
const radio2 = document.getElementById(`radio2`);
const radio3 = document.getElementById(`radio3`);

const check = document.getElementById(`check`);
const submit = document.getElementById(`submit`);
const ans = document.getElementById(`ans`);
const ans2 = document.getElementById(`ans2`);

submit.onclick = function() {
  if(radio1.checked) {
    ans.textContent = `you choose a`
  }
  else if(radio2.checked) {
    ans.textContent = `you choose b`
  }
  else if(radio3.checked) {
    ans.textContent = `you choose c`
  }
  
  if(check.checked) {
    ans2.textContent = `You checked`
  }
  else {
    ans2.textContent = `You did not check`
  }

}

// username = window.prompt("enter your user name").trim();
// firstChar = username.charAt(0).toUpperCase();
// remainingChar = username.slice(1).toLowerCase();
// username = firstChar + remainingChar;
// console.log(username);

// username1 = window.prompt("Enter your name")
// username1 = username1.trim().charAt(0).toUpperCase() + username1.trim().slice(1,username1.indexOf(" ")).toLowerCase() + " " + username1.charAt(username1.indexOf(" ") + 1).toUpperCase() + username1.trim().slice(username1.indexOf(" ") + 2);
// console.log(username1);

console.log("1" === 1)