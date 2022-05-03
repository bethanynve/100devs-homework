// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter09.md


// Dogs
// TODO: define the Dog class here

class Dog {
    constructor(name, species, size) {
        this.name = name;
        this.species = species;
        this.size = size;
    }

    bark() {
        if (this.size > 70) {
            return "Grrr! Grrr!";
        } else {
            return "Woof! Woof!";
        }
    }
}

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);



// Character inventory

class Character {
    constructor(name, health, strength, gold, keys) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.xp = 0; // XP is always zero for new characters
      this.inventory = {
         gold: 10,
         keys: 1
      }
    }
    // Attack a target
    attack(target) {
      if (this.health > 0) {
        const damage = this.strength;
        console.log(
          `${this.name} attacks ${target.name} and causes ${damage} damage points`
        );
        target.health -= damage;
        if (target.health > 0) {
          console.log(`${target.name} has ${target.health} health points left`);
        } else {
          target.health = 0;
          const bonusXP = 10;
          console.log(
            `${this
              .name} eliminated ${target.name} and wins ${bonusXP} experience points`
          );
          this.xp += bonusXP;
          this.inventory.gold += target.inventory.gold;
          this.inventory.keys += target.inventory.keys;
        }
      } else {
        console.log(`${this.name} can't attack (they've been eliminated)`);
      }
    }
    // Return the character description
    describe() {
      return `${this.name} has ${this.health} health points, ${this
        .strength} as strength, ${this.xp} XP points, ${this.inventory.gold} gold and ${this.inventory.keys} key(s)`;
    }
  }
const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);

console.log("Welcome to the adventure! Here are our heroes:");
console.log(aurora.describe());
console.log(glacius.describe());

const monster = new Character("Spike", 40, 20);
console.log("A wild monster has appeared: it's named " + monster.name);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);

console.log(aurora.describe());
console.log(glacius.describe());



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
        return `owner: ${this.name}, balance: ${this.balance}`;
    }
}

const accountArr = [];
accountArr.push(new Account("Sean"));
accountArr.push(new Account("Brad"));
accountArr.push(new Account("Georges"));

accountArr.forEach(account => {
    account.credit(1000);
    console.log(account.describe());
})
