class Recipe {
    addFlour() {
    }
    addLiquid() {
    }
    addYeast() {
        console.log('Adding Yeast');
    }
    addSugar() {
    }
    addButter() {
    }
    knead() {
        console.log('kneading');
    }
    letRest() {
        console.log('Letting mix rest for some hours');
    }
    shapeAndExtend() {
        console.log('Shaping dough')
    }
    pressDough() {
    }
    bake() {
        console.log('Cooking...')
    }
    ready() {
        console.log('Let them cool and EAT!! :)')
    }
    templateMethod() {
        this.addLiquid();
        this.addYeast();
        this.addSugar();
        this.addButter()
        this.knead();
        this.letRest();
         this.shapeAndExtend();
        this.pressDough();
        this.bake();
        this.ready();
    }
}

class FlourTortillas extends Recipe  {
    //steps for making flour tortillas

    addFlour() {
        console.log('add Tortillas flour');
    }
    addLiquid(){
        console.log('add Water');
    }
    addYeast() {}
    letRest() {
        console.log('Letting mix rest for half hour');
    }
    shapeAndExtend() {
        console.log('Shaping dough into little balls');
    }
    pressDough() {
        console.log('Press dough to make the tortilla shape');
    }
    bake() {
        console.log('Cooking tortillas on a griddle')
    }
}

class Bread extends Recipe {
    // Steps for making bread
    addFlour() {
        console.log('Add flour to make bread');
    }
    addLiquid() {
        console.log('Add milk');
    }
    addYeast() {
        console.log('Adding Yeast');
    }
    addSugar() {
        console.log('Adding sugar');
    }
    addButter() {
        console.log('Adding a bar of butter');
    }
    knead() {
        console.log('kneading');
    }
    letRest() {
        console.log('Letting mix rest for 3 hours');
    }
    shapeAndExtend() {
        console.log('Shaping dough into three medium sized balls and let them rest');
    }
    pressDough() {}
    bake() {
        console.log('Baking bread in an oven at 300 celsius degrees')
    }
}

function clientCode(concreteClass) {
    // calls concrete classs which extends abstract class templateMethod
    concreteClass.templateMethod();
}
console.log('This is the tortillas recipe \n')
clientCode(new FlourTortillas());
console.log('-----------------------------\n')

console.log('This is the Bread recipe \n')

clientCode(new Bread());
