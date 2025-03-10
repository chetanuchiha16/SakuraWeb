// function wakeUp(callback) {
//   setTimeout(() => {
//     console.log("Hina woke you up with a kiss");
//     callback();
//   }, 3000);
// }

// function hugHina(callback) {
//   setTimeout(() => {
//     console.log("you hug Hina");
//     callback();
//   }, 500);
// }
// function kissHina(callback) {
//   setTimeout(() => {
//     console.log("you kiss Hina");
//     callback();
//   }, 1000);
// }

// wakeUp(() => {
//   hugHina(() => {
//     kissHina(() => {
//         console.log("all done ")
//     });
//   });
// });

function wakeUp() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      wokeUP = true;
      if (wokeUP == true) resolve("Hina woke you up with a kiss");
      else reject("you didnt wake up");
    }, 3000);
  });
}

function hugHina() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      hugged = true;
      if (hugged == true) resolve("you hugged Hina 🤗");
      else reject("you didnt hug Hina, hug her right now 😒");
    }, 500);
  });
}

function kissHina() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      kissed = true;
      if (kissed == true) resolve("you kissed Hina 😘");
      else reject("you didnt kiss Hina, kiss her right now 😒");
    }, 1000);
  });
}

// wakeUp()
//   .then((value) => {
//     console.log(value);
//     return hugHina();
//   })
//   .then((value) => {
//     console.log(value);
//     return kissHina();
//   })
//   .then((value) => {
//     console.log(value);
//     console.log("all done");
//   })
//   .catch((error) => {
//     console.error(error);
//   });

async function doChores() {
  try {
    const wakingUp = await wakeUp();
    console.log(wakingUp);

    const huggingHina = await hugHina();
    console.log(huggingHina);

    const kissingHina = await kissHina();
    console.log(kissingHina);
  } catch (error) {
    console.error(error);
  }
}

doChores();
