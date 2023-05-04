/* This decorator pattern lets you add different characteristics to a beverage */

// Main Beverage class (general, non-specific)
class Beverage {
    description = "Unknown Beverage";

    // addOn, description are strings
    constructor( addOn, description) {
        this.addOn = addOn;
        this.description = description;
    }
    getDescription() {
        return this.description;
    }
    getCost() {
        return 30;
    }
}

// Main decorator class, also very general
class AddOnDecorator {
    constructor(beverage) {
        this.beverage = beverage
    }
    getDescription() {
        return this.beverage.description();
    }
}

// The concrete decorator extends the AddOnDecorator
class Chocolate extends AddOnDecorator {
// It has a concrete implementation of the add on we want for our beverage

    // call the getDescription and getCost methods extended from AddOnDecorator class and adds extra information
    getDescription() {
        return this.beverage.getDescription() + ', Chocolate';
    }
    
    getCost() {
        return 10 + this.beverage.getCost();
    }
}

// This has a very similar functionality as Chocolate class
class Capuccino extends Beverage {
    
    getDescription() {
        description = "Capuccino";
    }
    getCost() {
        return 10 + beverage.getCost();
    }
}

// general Beverage class is instantiated.
let coffee = new Beverage("Chocolate", "Capuccino");
console.log(coffee.getDescription(), coffee.getCost())

/* here we're wrapping up the object. Since we're extending the AddOnDecorator class, 
 the constructor sets the passed on Object inside its beverage property, and gets available for that Chocolate class*/

coffee = new Chocolate(coffee);

console.log(coffee.getDescription(), coffee.getCost())
