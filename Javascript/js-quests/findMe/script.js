hina = document.getElementById("hina")
chetan = document.getElementById("chetan")
x = 0;
y = 0;
moveAmount = 5;
document.addEventListener("keydown", event => {
    
    if(event.key.startsWith("Arrow")) {
        switch(event.key) {
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
    }
})

document.addEventListener("keydown", event => {                    //Better one Hina gets closer
    if(event.key == "h") {
        document.body.style.backgroundImage = "url(myHina.jpg)"
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        newH1 = document.createElement("h1");
        newH1.textContent = " hmm Hina 🤗 I Love You";
        document.body.append(newH1);
    }
    console.log(event.key)
})

Hug = document.createElement("h1");
Hug.textContent = "press H to Hug Chetan (Only for Hina)";
document.body.append(Hug)


