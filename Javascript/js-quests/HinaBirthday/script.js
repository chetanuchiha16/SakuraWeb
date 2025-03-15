let message = document.getElementById("message");
let click = document.getElementById("click");
let container = document.querySelector(".container");
// document.addEventListener("contextmenu", (event) => {
//   event.preventDefault();
// });

click.addEventListener("click", (event) => {
  message.textContent = "I Kiss your cheek, good morning Hina";
  click.addEventListener("click", (event) => {
    message.textContent = "Happy Birthday Hina";
    container.style.backgroundImage = "url(inputs/hina1.jpeg)";
    click.addEventListener("click", (event) => {
      message.textContent =
        "oh hina, why do you look worried ? its your birthday";
      click.addEventListener("click", (event) => {
        message.textContent = "i cup your Cheek, hina lets go somewhere";
        container.style.backgroundImage = "url(inputs/hina5.jpg)";
        click.addEventListener("click", (event) => {
          container.style.backgroundImage = "url(inputs/hina6.jpg)";
          message.textContent =
            "Hina what do you think ? isnt this place beautiful just like you ?";
          click.addEventListener("click", (event) => {
            container.style.backgroundImage = "url(inputs/hina4.jpg)";
            message.textContent = "Hina... I Love YOu";

            yours = document.createElement("audio");
            yoursSrc = document.createElement("source");
            yoursSrc.src = "inputs/I wanna be yours.mp3";
            yours.appendChild(yoursSrc);
            yours.autoplay = true;
            yours.volume = 0.45;
            yours.loop = true;

            click.addEventListener("click", (event) => {
              message.textContent = "Hina come lets sit under that tree";
              container.style.backgroundImage = "url(inputs/hina3.jpg)";
              click.addEventListener("click", (event) => {
                message.textContent =
                  "Hina, what do you think ? i know there are a lot of mistakes in this gift, but please dont mind i love you - Your sweety Chetan ";
                container.style.backgroundImage = "url(inputs/hina8.jpg)";
                click.textContent =
                  "Press y to kiss me if you loved it else press n to slap me if you hated it ";
                document.addEventListener("keydown", (event) => {
                  event.preventDefault();
                  if (event.key.toLowerCase() === "y") {
                    message.textContent =
                      "i kiss you back, im glad you loved it hina 👉🏻👈🏻";
                    // console.log(event.button);
                  } else if (event.key.toLowerCase() === "n") {
                    message.textContent = "im sowwy you didnt like it hina 😔";
                    console.log(event.button);
                  }
                });
              });
            });
          });
        });
      });
    });
  });
});
