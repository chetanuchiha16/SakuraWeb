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
naruto1.attack();
Shippuden.authorName();
console.log(naruto1.country);

let array = [1, 2, 3, 4];
[array[0], array[3]] = [array[3], array[0]];
console.log(...array);
let a = 1;
let b = 2;
[a, b] = [b, a];

alpha = ['a', 'b', 'c', 'd'];
[a, b, c, d] = alpha;
console.log(a,b,c,d)

console.log(a,b);

const obj = {
    name:'name',
    age:'age'
}
console.log(obj.name,obj.age)

let {name, age} = obj;

console.log(name, age);

function display({name, age}) {
    console.log(name, age);
}
display(obj)

obj1 = {
    name: "Chetan",
    age: 20,
    "address" : {
        street: "indus",
        block: "E",
    }
}
console.log(obj1.address.street);
console.log(obj1.address["street"]);

// console.log([...obj1])
for(const prop in obj1.address) {
    console.log(obj1.address[prop]);
}

class Address {
    constructor(street, block, door) {
        this.street = street;
        this.block = block;
        this.door = door;
    }

}

class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.agee = age;
        this.address = new Address(...address);
    }
}

sasuke = new Person("Sasuke Uchiha", 20, "abc","def", "konoha")
for(const prop in sasuke) {
    console.log(sasuke[prop]);
}

ninjas = [
    {name:"naruto uzumaki",rival: "Sasuke Uchiha"},
    {name:"Sakura",rival: "ino yamanaka"},
    {name:"Neji",rival: "Rock Lee"},
]
console.log(ninjas[0].name, ninjas[0].rival);
ninjas.  forEach(element => {
    console.log(element.name, element.rival);
});

ninjaNames = ninjas.map(element => {
    return element.name;
})
console.log(...ninjaNames);

ninjaRivals = ninjas.map(element => {
    return element.rival;
})
console.log(...ninjaRivals);

namef = ninjaNames.reduce((acc, next) => 
     acc.length > next.length ? acc : next // {} => must return - My Hina
)
console.log(namef)

const candies = [
    { name: "Lollipop", sweetness: 5 },
    { name: "Chocolate", sweetness: 10 },
    { name: "Gummy Bear", sweetness: 7 },
    { name: "Marshmallow", sweetness: 8 }
  ];
console.log(candies[0].sweetness)
const total_sweetness =  candies.reduce((acc, next) => acc + next.sweetness, 0);
 console.log(`Total sweetness: ${total_sweetness}`)

 candies.sort((a, b) => a.name.localeCompare(b.name))
 console.log(candies);
 candies.sort((a, b) => a.sweetness - b.sweetness)
 console.log(candies)

 