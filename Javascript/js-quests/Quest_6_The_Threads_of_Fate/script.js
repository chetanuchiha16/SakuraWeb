import {str, PI} from './mathutil.js'
window.time = time;
window.cancel = cancel;

function outer() {
    let counter = 0;
    function increment() {
        console.log(++counter);
    }
    
    function display() {
        console.log(counter)
    }
    return {increment, display}
}
// document.getElementById('p').innerHTML = '<h1>Yokoso Watashi no Soul Society Ye</h1>'
let increment =  outer();
increment.increment();
increment.increment();
increment.display()

let timeOut;
function time() {
    
    timeOut = setTimeout(() => {
        document.getElementById('p').innerHTML = '<h1>Yokoso Watashi no Soul Society Ye</h1>'
    }, 3000)
    
    return timeOut
}

function cancel() {
    clearTimeout(timeOut);
}

console.log(PI, str)

function func(callback) {
    setTimeout(() => {
        console.log("Yokoso");
        callback()

    }, 3000)
}

function func1() {
    console.log("Dattebayo");
    console.log("Chetan wa Hina no suki desu")
}

func(func1);

try{
    console.log("yokoso");
    let x = window.prompt("enter a number")
    if (x == 1) {
        throw new Error("no 1 lol");
    }
}
catch(e) {
    console.log(e);
}
finally {
    console.log("last line of the code");
}