const naruto = {
    name: "Naruto Uzumaki",
    teamNO: 7,
    run: function() { console.log(`${this.name} is running....`)},

}

console.log(naruto.name, naruto.teamNO)
naruto.run();

function shinobi(name, weapon){
    this.name = name;
    this.weapon = weapon;
    this.attack = function () {
        console.log(`${this.name} attacks with ${this.weapon}`);
    }
}

Naruto = new shinobi("Naruto Uzumaki", "Rasengan")
Naruto.attack();

class shinobi1 {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    
    attack() {
        console.log(`${this.name} attacks with ${this.weapon}`);

    }
}

naruto1 = new shinobi1("Naruto Uzumaki", "Rasengan");
naruto1.attack()