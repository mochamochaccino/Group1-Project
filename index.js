class player {
  constructor(name) {
    this.name = name;
    this.maxHealth = 100;
  }
  takeDamage(damageTaken) {
    this.health -= damageTaken;
    return "Your health is " + this.health;
  }
  healDamage() {
    this.health = this.maxHealth;
    return "You have been healed to max. Your health is " + this.health;
  }
}
class Warrior extends player {
  constructor(name) {
    super(name);
    this.strength = 15;
    this.intelligence = 5;
  }
}
class Mage extends player {
  constructor(name) {
    super(name);
    this.strength = 5;
    this.intelligence = 15;
  }
}
class Monster extends player {
  constructor(name, health, attackPower) {
    super(name, health);
    this.attackPower = attackPower;
  }
  attack() {
    takeDamage(this.attackPower); // not working
  }
}

function userInput(user) {
  const prompt = require("prompt-sync")({ sigint: true });
  return prompt(user);
}

function introduction() {
  while (true) {
    let intro =
      "Welcome adventurer. Please select your class: Warrior or Mage:  ";
    let response = userInput(intro).trim();
    if (response !== "Warrior" && response !== "Mage") {
      console.log("Invalid response. Please select between Warrior or Mage: ");
    } else if (response === "Warrior") {
      console.log("You have selected: " + response);
      war = new Warrior("Warrior");
      return war;
    } else if (response === "Mage") {
      console.log("You have selected: " + response);
      mage = new Mage("Mage");
      return mage;
    }
  }
}
let person = introduction();
console.log(person);

function town() {
  while (true) {
    let intro =
      "Welcome to Dweller Town. You must defeat the slime that is preventing people from leaving the town. You are in town square. What would you like to do? To the Inn or Battle? ";
    let response = userInput(intro);
    if (response !== "Inn" && "Battle") {
      console.log("Invalid response. Please select Inn or Battle");
    } else if (response === "Inn") {
      console.log(person.healDamage());
    }
  }
}

town();

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function battle() {
  //mob = new Monster("slime", 20, 5);
  let engagedInBattle = "";
  while (engagedInBattle !== "fight" || engagedInBattle !== "flee") {
    engagedInBattle = prompt("You have encountered a monster. Fight or flee?!");
  }
  if (engagedInBattle === "fight") {
  } else {
  }
}
