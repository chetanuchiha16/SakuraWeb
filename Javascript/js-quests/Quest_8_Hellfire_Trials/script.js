// function walkDog(callback) {
//   setTimeout(() => {
//     console.log("walking the dog");
//     callback();
//   }, 3000);
// }

// function trash(callback) {
//   setTimeout(() => {
//     console.log("take out trash");
//     callback();
//   }, 500);
// }
// function clean(callback) {
//   setTimeout(() => {
//     console.log("clean the kitchen");
//     callback();
//   }, 1000);
// }

// walkDog(() => {
//   trash(() => {
//     clean(() => {
//         console.log("all done ")
//     });
//   });
// });

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isDog = true;
      if (isDog == true) resolve("walking the dog");
      else reject("you didnt walk the dog ");
    }, 3000);
  });
}

function trash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isTrash = true;
      if (isTrash == true) resolve("take out trash");
      else reject("you didnt take out the trash");
    }, 500);
  });
}

function clean() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isClean = false;
      if (isClean == true) resolve("clean the kitchen");
      else reject("you didnt clean the Kitchen");
    }, 1000);
  });
}

walkDog()
  .then((value) => {
    console.log(value);
    return trash();
  })
  .then((value) => {
    console.log(value);
    return clean();
  })
  .then((value) => {
    console.log(value);
    console.log("all done");
  })
  .catch((error) => {
    console.error(error);
  });
