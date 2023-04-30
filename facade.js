
class IngredientsFetch {
    ingredients = [];

    addIngredient(ingredient) {
        this.ingredients.push(ingredient)
    }
    getIngredients() {
        return this.ingredients;
    }
}
class ButterBlock {
    preparingButter() {
        console.log('Preparing butter into a BIG block')
    }
}
class WorkingTheDough {
    steps = [
        'Roll the dough into the block',
        'Flat the dough',
        'Roll the dough again'
    ];

    rollAndFoldButter(times, time) {
        for(let i = 0; i < times; i++) {
            this.steps.forEach(step => console.log(step))
        }
        console.log(`For: ${time} minutes`);
    }

    prepareDoughSheet() {
        console.log('Single folding the flat dough, then cutting it');

        return { number: 1}
    }

    cutCroissants(croissantDough) {
        return `From ${croissantDough.number} we can make ${croissantDough.number * 6} croissants`;
    }
}
class DoughPreparation {

     steps = [
        'Activate the yeast, dissolve into wark milk',
        'Add sugar and melted cooled butter',
        'Add flour and salt'
    ];

    prepareDough() {
        console.log('Preparing the bowl for ingredients')

        for(let i = 0; i < this.steps; i++) {
            this.steps.forEach(step => console.log(step))
        }
        console.log('Ready to Mix')

    }

    mixDough(time) {
        console.log(`Mixing... for... ${time} minutes` )
    }
}

class BakingOven {
    oven = {};
    on() {
        console.log('Setting on');
    }
    off() {
        console.log('Setting off');
    }
    scale(scale) {
        this.oven.scale = scale;
    }
    bakingTime(minutes) {
        this.oven.time = minutes
    }
    bakingTemp(degrees) {
        this.oven.bakingtemp = degrees
    }
    preHeat(degrees) {
        this.oven.preheat = degrees
    }
    getPreheatSettings() {
        return `Preheating Oven to ${this.oven.preheat} ${this.oven.scale} degrees`
    }
    getOvenSettings(meal) {
        return `Baking ${meal} to ${this.oven.bakingTemp} ${this.oven.scale} degrees`
    }
}

class CroissantsMaker {
    
    constructor() {
        this.ingredients = new IngredientsFetch();
        this.butter = new ButterBlock();
        this.doughWorker = new DoughPreparation();
        this.doughFolder = new WorkingTheDough();
        this.baker = new BakingOven();
    }

    addIngredient(ingredient) {
        this.ingredients.addIngredient(ingredient);
    }
    preparingDough() {
        const ingredients = this.ingredients.getIngredients();
        this.doughWorker.prepareDough();
        this.doughWorker.mixDough(10);
        this.butter.preparingButter();
        this.doughFolder.rollAndFoldButter(5, 15);
        const croissantsDough = this.doughFolder.prepareDoughSheet();
        const croissants = this.doughFolder.cutCroissants(croissantsDough);
        console.log(croissants);
    }
    bakingCroissants() {
        this.baker.on();
        this.configureOven();
       console.log(this.baker.getPreheatSettings());
       console.log(this.baker.getOvenSettings());
       console.log('Baking...DOONE!');
    }
    configureOven() {
        this.baker.scale('Celsius');
        this.baker.bakingTime(20);
        this.baker.preHeat(180);
        this.baker.bakingTemp(240);
    }
}
const croissantMaker = new CroissantsMaker();
const ingredients = ['Milk', 'Yeast', 'Melted Butter', 'Salt', 'Sugar'];
ingredients.forEach(ingredient => croissantMaker.addIngredient(ingredient));
croissantMaker.preparingDough();
croissantMaker.configureOven();
croissantMaker.bakingCroissants();
