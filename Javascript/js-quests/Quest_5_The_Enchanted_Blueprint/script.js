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

class Anime{
    country = "Japan";
     say(anime) {
        console.log(`${anime} is nice`)
    }
}

class Shippuden extends Anime{
    static author = "Kishimoto";
    constructor(name, weapon) {
        super();
        this.name = name;
        this.weapon = weapon;
        
    }
    set name(newname){
        if(typeof newname === 'string')
            this._name = newname
        else
            console.log("you cannot change the name")
    }
    get name(){
        return this._name;
    }
    attack() {
        console.log(`${this.name} attacks with ${this.weapon}`);
        super.say(this.name);

    }
    static authorName() {
        console.log(`the author name is ${this.author}`)
        // super.say(Shippuden.author); super is used only on instacne method
        // Anime.say(Shippuden.author); Anime. must be staic aswell
    }
}

naruto1 = new Shippuden("Naruto Uzumaki", "Rasengan");
console.log(Shippuden.author);
naruto1.attack()
Shippuden.authorName()
console.log(naruto1.country)