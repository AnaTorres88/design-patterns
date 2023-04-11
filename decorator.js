class Beverage {
    description = "Unknown Beverage";
    constructor( addOn, description){
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

class AddOnDecorator {
    constructor(beverage) {
        this.beverage = beverage
    }
    getDescription() {
        return this.beverage.description();
    }
}

class Chocolate extends AddOnDecorator {

    getDescription() {
        return this.beverage.getDescription() + ', Chocolate';
    }
    
    getCost() {
        return 10 + this.beverage.getCost();
    }
}

class Capuccino extends Beverage {
    
    getDescription() {
        description = "Capuccino";
    }
    getCost() {
        return 10 + beverage.getCost();
    }
}
let coffee = new Beverage("Chocolate", "Capuccino");
console.log(coffee.getDescription(), coffee.getCost())

coffee = new Chocolate(coffee);
console.log(coffee.getDescription(), coffee.getCost())
