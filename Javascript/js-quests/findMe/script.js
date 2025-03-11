hina = document.getElementById("hina");
chetan = document.getElementById("chetan");

function isColiding(chetan, hina) {
  hinaPos = hina.getBoundingClientRect();
  chetanPos = chetan.getBoundingClientRect();
  console.log(chetanPos);
  console.log(hinaPos);

  return !(
    hinaPos.top > chetanPos.bottom ||
    hinaPos.left > chetanPos.right ||
    hinaPos.bottom < chetanPos.top ||
    hinaPos.right < chetanPos.left
  );
}
x = 0;
y = 0;
moveAmount = 5;
// let hugging = false;
document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    switch (event.key) {
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
    }
    hina.style.transform = `translate(${x}px, ${y}px)`;
    console.log(isColiding(chetan, hina));
    const hugging = isColiding(chetan, hina)
    if (hugging) {
      hina.classList.add("hug");
      chetan.classList.add("hug");
      // hugging = true;
    }else {
      setTimeout(() => {
        chetan.classList.remove("hug");
        hina.classList.remove("hug");
      }, 3000)

    }
    console.log(chetan.class);
  }
});

document.addEventListener("keydown", (event) => {
  //Better one Hina gets closer
  if (event.key == "h") {
    document.body.style.backgroundImage = "url(myHina.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    newH1 = document.createElement("h1");
    newH1.textContent = " hmm Hina 🤗 I Love You";
    document.body.append(newH1);
  }
  console.log(event.key);
});

Hug = document.createElement("h1");
Hug.textContent = "press H to Hug Chetan (Only for Hina)";
document.body.append(Hug);
