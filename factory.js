
class simpleEnemy {
    constructor(options) {
      this.power = options.health || 200;
      this.power = options.power || 'super strength';
      this.weapon = options.weapon || 'sword';
      this.house = options.house || 'House Terror';
    }
  }
  
  class miniBoss {
    constructor(options) {
      this.power = options.health || 6000;
      this.power = options.power || 'fire breath';
      this.weapon = options.weapon || 'magic spells';
      this.house = options.house || 'House Thermidor';
    }
  }
  
  class characterFactory {
    characterType;
    characters = { simpleEnemy, miniBoss };
    getCharacter(characterType) {
      return this.characters[characterType];
    }
  }
  
  const factory = new characterFactory();
  
  factory.characterType = 'miniBoss';
  
  const newMiniBoss = factory.getCharacter('miniBoss');
  console.log(
    new newMiniBoss({
      health: 7000,
      power: 'mental control',
      weapon: 'scimitar',
      house: 'House Prime',
    })
  );
  