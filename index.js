class player {
  constructor(name, health) {
    (this.name = name), (this.health = health), (this.maxHealth = 100);
  }
  takeDamage(damageTaken) {
    this.health -= damageTaken;
    return `${this.name} has taken ${damageTaken} damage`;
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
    this.intelligence = 5;
    this.output = Math.floor(this.strength * 1.5 + this.intelligence * 1);
  }
}
class Mage extends player {
  constructor(name, health) {
    super(name, health);
    this.strength = 5;
    this.intelligence = 15;
    this.output = Math.floor(this.strength * 1 + this.intelligence * 1.5);
  }
}
class Monster extends player {
  constructor(name, health, attackPower) {
    super(name, health);
    this.attackPower = attackPower;
  }
}

function userInput(user) {
  const prompt = require("prompt-sync")({ sigint: true });
  return prompt(user);
  //APPARENTLY THERES AN ISSUE WITH PROMPT-SYNC WHERE LONG STRINGS BREAK THINGS. THANK YOU STACKOVERFLOW
}

function inputTest(input1, input2, response, invalid) {
  if (response.toUpperCase() !== input1 && response.toUpperCase() !== input2) {
    console.log(invalid);
  } else if (response.toUpperCase() === input1) {
    return input1;
  } else if (response.toUpperCase() === input2) {
    return input2;
  }
}

function introduction() {
  while (true) {
    let intro =
      "Welcome adventurer. Please select your class: Warrior or Mage: ";
    let response = userInput(intro);
    //console.log(response.toUpperCase());
    let invalid = "Invalid response. Please select between Warrior or Mage \n";
    const decision = inputTest("WARRIOR", "MAGE", response, invalid);
    //console.log(decision);
    if (decision === "WARRIOR") {
      war = new Warrior("Warrior", 80);
      console.log("You have selected: " + response);
      return war;
    }
    if (decision === "MAGE") {
      mage = new Mage("Mage", 80);
      console.log("You have selected: " + response);
      return mage;
    }
  }
}

//APPARENTLY THERES AN ISSUE WITH PROMPT-SYNC WHERE LONG STRINGS BREAK THINGS. THANK YOU STACKOVERFLOW. CONSOLE.LOG LONG STRINGS.

function town() {
  const person = introduction();
  const combat = battle();
  let second = false;
  //console.log(person);
  function closure() {
    while (true) {
      if (!second) {
        console.log(
          "\nWelcome to Dweller Town. You must defeat the slime that is preventing people from leaving the town. You are in town square. What would you like to do? To the Inn or Battle? \n",
        );
      } else {
        console.log(`\nWelcome back to town. Your HP is ${person.health}`);
      }
      second = true;
      let invalid = "Invalid response. Please select Inn or Battle";
      let response = userInput().toUpperCase();
      const decision = inputTest("INN", "BATTLE", response, invalid);
      if (decision === "INN") {
        console.log(person.healDamage());
      }
      if (decision === "BATTLE") {
        if (combat(person) === true) {
          break;
        }
      }
    }
    console.log("\nVictory!");
  }
  return closure;
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function battle() {
  mob = new Monster("Super Slime", 100, 30);
  function closure(personObj) {
    while (true) {
      let intro = `A fierce slime is blocking your path. You have ${personObj.health}. It has ${mob.health} HP. What do you do? Fight/Flee `;
      let response = userInput(intro).toUpperCase();
      let invalid = "Invalid response. Please select Fight or Flee";
      const decision = inputTest("FIGHT", "FLEE", response, invalid);
      if (decision === "FIGHT") {
        console.log(
          mob.takeDamage(personObj.output + Math.floor(randomNumber(-5, 5))),
        );
        console.log(
          personObj.takeDamage(
            mob.attackPower + Math.floor(randomNumber(-5, 5)),
          ),
        );
        if (personObj.health < 0) {
          console.log("You were knocked out. You find yourself at the town");
          personObj.health = 1;
          return 0;
        }
        if (mob.health < 0) {
          return true;
        }
      }
      if (decision === "FLEE") {
        return 0;
      }
    }
  }
  return closure;
}

const adventure = town();
adventure();
