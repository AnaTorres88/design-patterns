/* The abstract factory also creates objects, but instead of inheriting the properties, the method they have in common is empty, ready to be overriden. In the Head First books this is declare as an abstract class, however these type of classes don't exist in ES6 */

const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const async = require('async');

// HotDrink has a method call consume which is empty
class HotDrink {
  consume() {}
}

// Here, the method gets overriden
class Tea extends HotDrink {
  consume() {
    console.log('This tea is nice with lemon!');
  }
}

// Same in this class.
class Coffee extends HotDrink {
  consume() {
    console.log(`This coffee is delicious!`);
  }
}

// This is a factory specifically for hot drinks, it receives an amount which will be a number
class HotDrinkFactory {
  prepare(amount) { /* abstract */ }
}

// Factories for specific type of hot drinks
class CoffeeFactory extends HotDrinkFactory {
  prepare(amount) {
    console.log(`Grind some beans, boil water, pour ${amount}ml`);
    return new Coffee();
  }
}

class TeaFactory extends HotDrinkFactory {
  prepare(amount) {
    console.log(`Put in tea bag, boil water, pour ${amount}ml`);
    return new Tea();
  }
}

// Object.freeze makes these clases non-writable
let AvailableDrink = Object.freeze({
  coffee: CoffeeFactory,
  tea: TeaFactory
});

// This is the main class which will allow us to make the hot drinks. Notice that the name isn't specific.

class HotDrinkMachine {
  constructor() {
    this.factories = {};
    // looping through our factories to instantiate them, they're are assigned to the factories object inside this class
    for (let drink in AvailableDrink) {
      this.factories[drink] = new AvailableDrink[drink]();
    }
  }

  // This method calls the prepares calls the prepare method of an specific beverage, passes the amount of drink and returns said dink.
  makeDrink(type) {
    switch (type)
    {
      case 'tea':
        return new TeaFactory().prepare(200);
      case 'coffee':
        return new CoffeeFactory().prepare(50);
      default:
        throw new Error(`Don't know how to make ${type}`);
    }
  }

  /* This is the main point of interaction. Consumer is a callback function.
  It'll receive the type of drink and a number wich will be the amout*/

  interact(consumer) {
    rl.question('Please specify drink and amount ' +
      '(e.g., tea 50): ', answer => {
      let parts = answer.split(' ');
      let name = parts[0];
      let amount = parseInt(parts[1]);

      // We're getting the factory using the name we caught in the prompt and call the prepare method within that factory, we're also passing the amount as a parameter (which comes from the prompt too)
      let drink = this.factories[name].prepare(amount);
      rl.close();
      // We're calling the function we just passed as a parameter
      consumer(drink);
    });
  }
}

// Instatiating the HotDrinkMachine class
let machine = new HotDrinkMachine();
// rl.question('which drink? ', function(answer)
// {
//   let drink = machine.makeDrink(answer);
//   drink.consume();
//
//   rl.close();
// });

// We're passing a function, which will receives a parameter. This drink is a factory which has this consume() method
machine.interact(
  function (drink) {
    drink.consume();
  }
);