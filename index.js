const adventure = true;
class player {
  constructor(name, health) {
    (this.name = name), (this.health = health);
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
  constructor(name, health) {
    super(name, health);
    this.strength = 15;
  }
}
class Mage extends player {
  constructor(name, health) {
    super(name, health);
    this.intelligence = 15;
  }
}
class Monster extends player {
  constructor(name, health, attackPower) {
    super();
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
  }
  attack() {
    super.takeDamage(this.attackPower); // not working
  }
}
//mob = new Monster("slime", 20, 5);

function userInput(user) {
  const prompt = require("prompt-sync")({ sigint: true });
  return prompt(user);
}

function introduction() {
  while (true) {
    let intro = "Welcome adventurer. Please select between Warrior or Mage:  ";
    let response = userInput(intro);
    if (response !== "Warrior" && response !== "Mage") {
      console.log("Invalid response. Please select between Warrior or Mage \n");
    } else if (response === "Warrior") {
      console.log("You have selected: " + response);
      war = new Warrior("Warrior", 80);
      return war;
    } else if (response === "Mage") {
      console.log("You have selected: " + response);
      mage = new Mage("Mage", 80);
      return mage;
    }
  }
}
let person = introduction();
//console.log(person);

function town() {
  let intro = "Welcome to town. What would you like to do? Inn or Battle? ";
  let response = userInput(intro);
  if (response !== "Inn" && "Battle") {
    console.log("Invalid response. Please select Inn or Battle");
  } else if (response === "Inn") {
    console.log(person.healDamage());
  }
}

town();

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function battle() {
  let engagedInBattle = "";
  while (engagedInBattle !== "fight" || engagedInBattle !== "flee") {
    engagedInBattle = prompt("You have encountered a monster. Fight or flee?!");
  }

  if (engagedInBattle === "fight") {
  } else {
  }
}
