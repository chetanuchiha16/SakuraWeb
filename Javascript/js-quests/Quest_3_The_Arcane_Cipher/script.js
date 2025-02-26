let fruits = ["apple", "mango", "orange"];

fruits.push("banana")
fruits.shift()
fruits.unshift("bananaa")
fruits.sort().reverse();
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
for(let fruit of fruits) {
  console.log(fruit)
}

let numbers = [7,5,3,5,1,9];
let min = Math.min(...numbers);
console.log(min);
console.log(...fruits);

console.log([...fruits[0]].join("-"))
console.log(...fruits[0])

let veg = ["tomato", "carrot", "onion"];
foods = [...fruits, ...veg, veg, fruits]
console.log(foods)

function fridge(...args) {
  console.log(...args);
  return args
}

console.log(fridge(fruits[0], fruits[1]))

function combineStrings(...char){
  return char.join("")
}
console.log(combineStrings('a','b','a','c'))

document.body.innerHTML = `<h1>hello world</h1>`;