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