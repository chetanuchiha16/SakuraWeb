// if (navigator.userAgent.includes("Windows") || navigator.userAgent.includes("Mac")) {
//     let h1 = document.createElement("h1");
//     h1.textContent = "I Love Hina";
//     document.body.append(h1);
// }
console.dir(document);
document.body.style.backgroundColor = "hsl(249, 100.00%, 76.30%)";
document.body.innerHTML += "<br><h1>Yokoso My</h1>";

userName = "<h1>Hina</h1>";
document.body.innerHTML += userName === "" ? "<br>Guest" : userName;
hello = document.getElementById(`hello`);

hello.style.backgroundColor = "hsl(152, 51.30%, 76.70%)";
hello.style.textAlign = "center";
// hello.style.display = "inline-block"
hello.style.border = "black 2px solid";
console.log(hello);

love = document.getElementsByClassName("love");
console.log(love);
love[0].style.border = "2px black solid";
love[0].style.width = "50px";
love[0].style.height = "20px";
love[0].style.backgroundColor = "yellow";

Array.from(love).forEach((l) => (l.style.backgroundColor = "orange"));

h1 = document.getElementsByTagName("h1");
li = document.getElementsByTagName("li");
console.dir(h1);
console.log(li);

for (h of h1) {
  h.style.backgroundColor = "hsl(81, 56.00%, 67.10%)";
}

for (l of li) {
  l.style.backgroundColor = "hsl(258, 67.20%, 77.30%)";
}

h1q = document.querySelector("h1");
h1q.style.backgroundColor = "yellow";
liq = document.querySelector("li");
liq.style.backgroundColor = "yellow";

h1qa = document.querySelectorAll("h1");
h1qa[2].style.backgroundColor = "brown";
console.dir(h1);
console.dir(h1qa);

const animefc = document.getElementById("op");
firstchild = animefc.firstElementChild;
firstchild.style.border = "2px black solid";

const animelc = document.querySelectorAll("ul");
animelc.forEach((anime) => {
  lastchild = anime.lastElementChild;
  lastchild.style.border = "2px black solid";
});

const animesn = document.getElementById("aot");
animesn.nextElementSibling.style.backgroundColor = "red";

const animesp = document.getElementById("aot");
animesp.previousElementSibling.style.backgroundColor = "orange";

animesp.parentElement.style.border = "black solid 10px";
animesp.parentElement.children[7].style.border = "black solid 2px";

h1 = document.createElement("h1");
h1.textContent = "I Love Hina";
document.body.append(h1);
h1.style.color = "hsl(240, 100%, 50%)";
document.body.prepend(h1);
document.getElementById("box1").prepend(h1);

box4 = document.getElementById("box4");
document.body.insertBefore(h1, box4);

// box = document.querySelectorAll("#box1");
box = document.querySelectorAll(".box");
document.body.insertBefore(h1, box[0]);

suki = document.createElement("h1");
suki.textContent = "Hina, dai dai dai suki";
document.body.insertBefore(suki, box[1]);

// #list
list = document.getElementById("hashira");
newHashira = document.createElement("li");
newHashira.textContent = "Giyu Tomiyoka";
// list.append(newHashira)
list.insertBefore(newHashira, list.children[2]);

// newHashira.id = "tomiyoka";
list.removeChild(newHashira);

box4.textContent = "Click Here to Kiss Chetan (only for Hina)";

box4.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "pink";
  event.target.textContent = "💋 😊👉🏻👈🏻";
  // event.target.textContent = "😊"
});

box4.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "hsl(318, 72.40%, 64.50%)";
  event.target.textContent = "you'll really kiss me ? 👉🏻👈🏻";
});

box4.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "blue";
  event.target.style.color = "#ffea95"; // Soft yellow for warmth!
  event.target.textContent = "please dont go 😢";
});

Hug = document.createElement("h1");
Hug.textContent = "press H to Hug Chetan (Only for Hina)";
document.body.append(Hug);

// document.addEventListener("keydown", event => {                    //Better one Hina gets closer
//     if(event.key == "h") {
//         document.body.style.backgroundImage = "url(myHina.jpg)"
//         document.body.style.backgroundRepeat = "no-repeat";
//         document.body.style.backgroundSize = "cover";
//         document.body.style.backgroundPosition = "center";
//         newH1 = document.createElement("h1");
//         newH1.textContent = " hmm Hina 🤗 I Love You";
//         document.body.append(newH1);
//     }
//     console.log(event.key)
// })

document.addEventListener("keydown", (event) => {
  if (event.key == "h") {
    document.body.style.backgroundImage = "url(myHina.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    // newH1 = document.createElement("h1");
    Hug.textContent = " hmm Hina 🤗 I Love You";
    // document.body.append(newH1);
  }
  console.log(event.key);
});

document.addEventListener("keyup", (event) => {
  if (event.key == "h") {
    document.body.style.background = "none";
    Hug.textContent = "Hina dont goo lets 😭 Hug Forever";
  }
});

hideButton = document.getElementById("hide-button");
hideImage = document.getElementById("hide-image");
hideImage.style.display = "block";

hideButton.addEventListener("click", (event) => {
  // if(hideImage.style.display !== "none") {
  if (hideImage.style.visibility !== "hidden") {
    hideImage.style.visibility = "hidden";
    event.target.textContent = "Click here to Come out of Chetan's Shirt";
  } else {
    hideImage.style.visibility = "visible";
    event.target.textContent = "Click here to get inside Chetan's Shirt";
  }
});

let button = document.querySelectorAll(".button");
button.forEach((element) => {
  element.style.color = "red";
  element.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "grey";
    // event.target.remove();
    button = document.querySelectorAll(".button");
    console.log(button);
  });
});

button5 = document.createElement("button");
button5.classList = "button";
button5.textContent = "Button 5";
document.body.appendChild(button5);
console.log(button);
button = document.querySelectorAll(".button");
console.log(button);

myButton = document.getElementById("myButton");
// myButton.classList = "enable"
myButton.classList.add("enable");
// myButton.classList.remove("enable")

// document.addEventListener("mouseover", event => {
//   event.target.classList.add("hover")
// })
// document.addEventListener("mouseout", event => {
//   event.target.classList.remove("hover")
// })

document.addEventListener("mouseover", (event) => {
  event.target.classList.toggle("hover");
});
document.addEventListener("mouseout", (event) => {
  event.target.classList.toggle("hover");
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("hover")) {
    event.target.textContent += "👍🏻";
    event.target.classList.add("disable")
  }
  else {
    // event.target.classList.replace("enable", "disable");
    event.target.textContent += "👎🏻";
    console.log("no")
  }
});
