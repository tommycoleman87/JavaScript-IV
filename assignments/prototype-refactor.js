/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(params) {
    this.createdAt = params.createdAt;
    this.name = params.name;
    this.dimensions = params.dimensions;
  }
  
  GameObject.prototype.destroy = function () {
    return `${this.name} was removed from the game.`;
  };
  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  CharacterStats.prototype = Object.create(GameObject.prototype);
  
  function CharacterStats(params) {
    GameObject.call(this, params);
    this.healthPoints = params.healthPoints;
  }
  
  CharacterStats.prototype.takeDamage = function () {
    return `${this.name} took dammage.`;
  };
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  function Humanoid(params) {
    CharacterStats.call(this, params);
    this.team = params.team;
    this.weapons = params.weapons;
    this.language = params.language;
  }
  
  Humanoid.prototype.greet = function () {
    return `${this.name} offers a greeting in ${this.language}`;
  };
  
  Villain.prototype = Object.create(Humanoid.prototype);
  function Villain(params) {
    Humanoid.call(this, params);
    this.type = params.type;
  }
  
  Villain.prototype.psychicBlast = function (target) {
    let dmg = Math.floor(Math.random() * 11);
    let drain = Math.floor(Math.random() * 5);
    if (this.healthPoints < 1) {
      return "Can' attack, I'm dead";
    } else if (dmg === 0) { return 'Psychic Blast missed' }
    else if (target.healthPoints < 1) {
      return `Can't target ${target.name}. They are food for the worms`;
    } else if (target.healthPoints <= dmg) {
      target.healthPoints = 0;
      if (Math.floor(Math.random() * 11) > 6) {
        this.healthPoints -= drain;
        if (this.healthPoints < 1) {
          return `Psychic blast does ${dmg} damage to ${target.name}. ${
            this.name
            } is drained and does ${drain} to themselves. ${target.takeDamage()} Killing blow! ${target.destroy()}. ${this.takeDamage()} ${this.destroy()}`;
        } else {
          return `Psychic blast does ${dmg} damage to ${target.name}. ${
            this.name
            } is drained and does ${drain} damage to themselves. ${target.takeDamage()} Killing blow! ${target.destroy()} ${this.takeDamage()}. ${this.name} has ${this.healthPoints} health left`;
        }
      } else {
        return `Psychic blast does ${dmg} damage to ${
          target.name
          }. ${target.takeDamage()} Killing blow! ${target.destroy()}`;
      }
    } else {
      target.healthPoints = target.healthPoints - dmg;
      if (Math.floor(Math.random() * 11) > 6) {
        if (target.healthPoints < 1) {
          this.healthPoints -= drain;
          return `PsychicBlast does ${dmg} damage to ${target.name}. ${
            this.name
            } is drained and does ${drain} damage to themselves.${target.takeDamage()} ${target.destroy()} ${this.takeDamage()} ${this.name} has ${this.healthPoints} health left.`;
        } else {
          this.healthPoints -= drain;
          return `PsychicBlast does ${dmg} damage to ${target.name}. ${
            this.name
            } is drained and does ${drain} damage to themselves. ${target.takeDamage()} ${
            target.name
            } has ${target.healthPoints} health left. ${this.takeDamage()} ${this.name} has ${this.healthPoints} health left.`;
        }
      } else {
        if (target.healthPoints < 1) {
          return `PsychicBlast does ${dmg} to ${
            target.name
            }. ${target.takeDamage()} ${target.destroy()}`;
        } else {
          return `PsychicBlast does ${dmg} to ${target.name}. ${target.takeDamage()} ${
            target.name
            } has ${target.healthPoints} health left`;
        }
      }
    }
  };
  
  Hero.prototype = Object.create(Humanoid.prototype);
  
  function Hero(params) {
    Humanoid.call(this, params);
    this.type = params.type;
  }
  
  Hero.prototype.smite = function (target) {
    let dmg = Math.floor(Math.random() * 5);
    let heal = Math.round(dmg / 2);
    if (this.healthPoints < 1) {
      return "Can' attack, I'm dead";
    } else if (target.healthPoints < 1) {
      return `Can't attack ${target.name}. They have already perished`;
    } else if (dmg === 0) {
      return `Smite missed`;
    } else if (target.healthPoints <= dmg) {
      target.healthPoints = 0;
      this.healthPoints += heal;
      return `Smite does ${dmg} damage to ${target.name}. ${
        this.name
        } heals for ${heal} health. ${target.takeDamage()} Killing blow! ${target.destroy()}`;
    } else {
      target.healthPoints = target.healthPoints - dmg;
      this.healthPoints += heal;
      if (target.healthPoints < 1) {
        return `Smite does ${dmg} damage to ${target.name}. ${
          this.name
          } heals for ${heal} health. ${target.takeDamage()} ${target.destroy()}`;
      } else {
        return `Smite does ${dmg} damage to ${target.name}. ${
          this.name
          } heals for ${heal} health. ${target.takeDamage()} ${target.name} has ${
          target.healthPoints
          } health left`;
      }
    }
  };
  /*
   * Inheritance chain: GameObject -> CharacterStats -> Humanoid
   * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
   * Instances of CharacterStats should have all of the same properties as GameObject.
   */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1
    },
    healthPoints: 5,
    name: "Bruce",
    team: "Mage Guild",
    weapons: ["Staff of Shamalama"],
    language: "Common Tongue"
  });
  
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2
    },
    healthPoints: 15,
    name: "Sir Mustachio",
    team: "The Round Table",
    weapons: ["Giant Sword", "Shield"],
    language: "Common Tongue"
  });
  
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4
    },
    healthPoints: 10,
    name: "Lilith",
    team: "Forest Kingdom",
    weapons: ["Bow", "Dagger"],
    language: "Elvish"
  });
  
  const warlock = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4
    },
    healthPoints: 10,
    name: "Gul'van",
    team: "Nights Cult",
    weapons: ["Staff", "Focus"],
    language: "Orcish",
    type: "Villain"
  });
  
  const paladin = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4
    },
    healthPoints: 10,
    name: "Lothbar",
    team: "Heralds of Light",
    weapons: ["Mace", "Shield"],
    language: "Common",
    type: "Hero"
  });
  
  /*console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.*/
  console.log(paladin.smite(warlock));
  console.log(warlock.psychicBlast(paladin));
  console.log(paladin.smite(warlock));
  console.log(warlock.psychicBlast(paladin));
  console.log(paladin.smite(warlock));
  console.log(warlock.psychicBlast(paladin));
  console.log(paladin.smite(warlock));
  console.log(warlock.psychicBlast(paladin));
  // Stretch task:
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
