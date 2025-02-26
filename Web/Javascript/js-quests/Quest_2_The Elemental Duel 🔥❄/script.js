const textbox = document.getElementById(`given`);
const c = document.getElementById(`C`);
const f = document.getElementById(`F`);
const convert = document.getElementById(`convert`);
const sol = document.getElementById(`sol`)

// console.log(temp);

convert.onclick = () => {
  let temp = Number(textbox.value);
  // window.alert(temp);
  if(c.checked){
    let ans = temp + 273.15;
    // window.alert(`${temp} deg celciue is ${ans} degree F`);
    sol.textContent = `${temp} deg celciue is ${ans} degree F`;
  }
  else if(f.checked){
    let ans = (5/9) * (temp - 32);
    // window.alert(`${temp} deg F is ${ans} degree C`)
    sol.textContent = `${temp} deg F is ${ans} degree C`;
  }
  else {
    // window.alert(`Check a radio button dude 😐`)
    sol.textContent = `Check a radio button dude 😐`;
  }
}