// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter09.md

// Dogs
// TODO: define the Dog class here

// class Dog {
//     constructor(name, species, size) {
//         this.name = name;
//         this.species = species;
//         this.size = size;
//     }

//     bark() {
//         if (this.size > 70) {
//             return "Grrr! Grrr!";
//         } else {
//             return "Woof! Woof!";
//         }
//     }
// }

// const fang = new Dog("Fang", "boarhound", 75);
// console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
// console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

// const snowy = new Dog("Snowy", "terrier", 22);
// console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
// console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);



// Character inventory

// class Character {
//     constructor(name, health, strength, gold, keys) {
//       this.name = name;
//       this.health = health;
//       this.strength = strength;
//       this.xp = 0; // XP is always zero for new characters
//       this.gold = 10;
//       this.keys = 1;
//     }
//     // Attack a target
//     attack(target) {
//       if (this.health > 0) {
//         const damage = this.strength;
//         console.log(
//           `${this.name} attacks ${target.name} and causes ${damage} damage points`
//         );
//         target.health -= damage;
//         if (target.health > 0) {
//           console.log(`${target.name} has ${target.health} health points left`);
//         } else {
//           target.health = 0;
//           const bonusXP = 10;
//           console.log(
//             `${this
//               .name} eliminated ${target.name} and wins ${bonusXP} experience points`
//           );
//           this.xp += bonusXP;
//           this.gold += target.gold;
//           this.keys += target.keys;
//         }
//       } else {
//         console.log(`${this.name} can't attack (they've been eliminated)`);
//       }
//     }
//     // Return the character description
//     describe() {
//       return `${this.name} has ${this.health} health points, ${this
//         .strength} as strength, ${this.xp} XP points, ${this.gold} gold and ${this.keys} keys`;
//     }
//   }
// const aurora = new Character("Aurora", 150, 25);
// const glacius = new Character("Glacius", 130, 30);

// console.log("Welcome to the adventure! Here are our heroes:");
// console.log(aurora.describe());
// console.log(glacius.describe());

// const monster = new Character("Spike", 40, 20);
// console.log("A wild monster has appeared: it's named " + monster.name);

// monster.attack(aurora);
// monster.attack(glacius);
// aurora.attack(monster);
// glacius.attack(monster);

// console.log(aurora.describe());
// console.log(glacius.describe());



// Account list

class Account {
    constructor(name, balance) {
        this.name = name;
        this.balance = 0;
    }
    credit(value) {
        return this.balance += value;
    }
    describe() {
        return `The bank account belonging to ${this.name} has a balance of ${this.balance}.`;
    }
}

const sean = new Account("Sean", 0);
const brad = new Account("Brad", 0);
const georges = new Account("Georges", 0);

sean.credit(1000);
brad.credit(1000);
georges.credit(1000);

console.log(sean.describe());
console.log(brad.describe());
console.log(georges.describe());

 