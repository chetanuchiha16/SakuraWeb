// let names = ["naruto", "sasuke", "itachi", "luffy", "zoro"];

// let person = {
//   name: "naruto",
//   anime: "naruto shippuden",
//   attack: "rasengan",
// };

// let people = [
//   {
//     name: "naruto",
//     anime: "naruto shippuden",
//     attack: "rasengan",
//   },
//   {
//     name: "luffy",
//     anime: "One piece",
//     attack: "gum gum no pistol",
//   },
// ];

// let peopleString = JSON.stringify(people);
// console.log(peopleString)
// let personString = JSON.stringify(person);
// console.log(personString)
// let namesString = JSON.stringify(names);
// console.log(namesString)

// let peopleParse = JSON.parse(peopleString)
// console.log( peopleParse)
// let personParse = JSON.parse(personString)
// console.log(personParse)
// let namesParse = JSON.parse(namesString)
// console.log(namesParse)
async function jsonfile() {
  let names = await fetch("names.json");
  names = await names.json();
  console.log(names);
}

jsonfile();

fetch("people.json")
  .then((response) => response.json())
  .then((values) => console.log(values));

fetch("person.json")
  .then((response) => response.json())
  .then((values) => console.log(values));

async function anime() {
  try {
    const name = document.getElementById("input").value.replaceAll(" ", "_");
    response = await fetch(
      `https://api.jikan.moe/v4/characters?q=${name}&limit=1`
    );
    value = await response.json();
    if (!response.ok) {
      throw Error(`could not fin ${name}`);
    }
    if (!value.data || value.data.length === 0) throw Error("not found");
    image = document.getElementById("img");
    console.log(value.data[0].images.jpg.image_url);
    image.src = value.data[0].images.jpg.image_url;
    // document.body.style.backgroundImage = `url(${image.src})`
    // document.body.style.backgroundRepeat = "no-repeat"
    // document.body.style.backgroundPosition = "center"
    // document.body.style.backgroundSize = "cover"
    // document.body.remove(image);
    image.style.display = "block"
    if(image) image.remove()
    document.body.append(image);
  } catch (error) {
    window.alert(error);
  }
}

// anime();

// fetch('https://api.jikan.moe/v4/top/anime?type=ova')
//     .then(response => response.json())
//     .then(quote => console.log(quote))
