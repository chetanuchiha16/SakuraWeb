hello(bye);

sum(display, 1, 2);

function sum(callback, a, b) {
  result = a + b;
  callback(result);
}

function display(result) {
  document.body.innerHTML = `<h1>the sum is ${result}<h1/>`;
}

function hello(callback) {
  let str = `hey hinaaa..`;
  callback(str);
}

function bye(str) {
  // console.log(`hinaaa.. ill never say bye to you`)
  console.log(str);
}

let arr = [1, 2, 3, 4, 5];

arr.forEach(displayEle);

function displayEle(ele) {
  console.log(ele);
}

function double(element) {
  console.log(element * 2);
}

arr.forEach(double);
