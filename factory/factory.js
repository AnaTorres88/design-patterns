
/* Objective: Factory that creates different types of enemies, in this case, we have 2 types, but they could be more */

class SimpleEnemy {
    constructor(options) {
      this.power = options.health || 200;
      this.power = options.power || 'super strength';
      this.weapon = options.weapon || 'sword';
      this.house = options.house || 'House Terror';
    }
  }
  
  class MiniBoss {
    constructor(options) {
      this.power = options.health || 6000;
      this.power = options.power || 'fire breath';
      this.weapon = options.weapon || 'magic spells';
      this.house = options.house || 'House Thermidor';
    }
  }
  
  // This is the main character Factory class
  class CharacterFactory {
    characterType;
    // characters obj contains the enemy Classes
    characters = { SimpleEnemy, MiniBoss };
    getCharacter(characterType) {
      return this.characters[characterType];
    }
  }
  
  // CharacterFactory gets instantiated
  const factory = new CharacterFactory();
  
  // Assign MiniBoss as characterType
  factory.characterType = 'MiniBoss';
  
  // Invoke getCharacterMethod from our new factory
  const newMiniBoss = factory.getCharacter('MiniBoss');

  // Log the result
  console.log(
    new newMiniBoss({
      health: 7000,
      power: 'mental control',
      weapon: 'scimitar',
      house: 'House Prime',
    })
  );
  