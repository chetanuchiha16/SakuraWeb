const diceImages = document.getElementById(`diceImages`);

function rollDice(){
  const given = document.getElementById(`given`).value;
  // console.log(given);
  const diceImages = document.getElementById(`diceImages`);
  const diceResult = document.getElementById(`diceResult`);
  values = [];
  images = [];

  for(let i = 0; i < given; i++) {
    const value = Math.floor(Math.random() * 6 + 1)
    values.push(value);
    images.push(`<img src="die_images/dice_${value}.png" alt="${value}">`)
  }
  console.log(...values)
  diceResult.textContent = values;
  console.log(images);
  diceImages.innerHTML = images.join('');
}

diceImages.innerHTML = "<h1>Your Image comes here</h1>"