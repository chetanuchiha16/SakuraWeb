console.dir(document);
document.body.style.backgroundColor = "hsl(249, 100.00%, 76.30%)";
document.body.innerHTML += "<br><h1>Yokoso My</h1>"

userName = "<h1>Hina<h1>";
document.body.innerHTML += userName === ""? "<br>Guest" : userName;
hello = document.getElementById(`hello`)

hello.style.backgroundColor = "hsl(152, 51.30%, 76.70%)";
hello.style.textAlign = "center";
// hello.style.display = "inline-block"
hello.style.border = "black 2px solid"
console.log(hello);

love = document.getElementsByClassName("love");
console.log(love);
love[0].style.border = "2px black solid";
love[0].style.width = "50px";
love[0].style.height = "20px";
love[0].style.backgroundColor = "yellow";

Array.from(love).forEach(l => l.style.backgroundColor = "orange");

h1 = document.getElementsByTagName("h1");
li = document.getElementsByTagName("li");
console.dir(h1);
console.log(li);

for(h of h1) {
    h.style.backgroundColor = "hsl(81, 56.00%, 67.10%)"
}

for(l of li) {
    l.style.backgroundColor = "hsl(258, 67.20%, 77.30%)"
}

h1q = document.querySelector("h1");
h1q.style.backgroundColor = "yellow"
liq = document.querySelector("li");
liq.style.backgroundColor = "yellow"

h1qa = document.querySelectorAll("h1")
h1qa[2].style.backgroundColor = "brown"
console.dir(h1)
console.dir(h1qa)

const animefc = document.getElementById("op");
firstchild = animefc.firstElementChild;
firstchild.style.border = "2px black solid"


const animelc = document.querySelectorAll("ul");
animelc.forEach((anime) => {
    lastchild = anime.lastElementChild;
    lastchild.style.border = "2px black solid"

})

const animesn = document.getElementById("aot");
animesn.nextElementSibling.style.backgroundColor = "red"

const animesp = document.getElementById("aot");
animesp.previousElementSibling.style.backgroundColor = "orange"