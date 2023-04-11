
// Create a subject class
class Subject {
    constructor() {
        this.observers=[];
    }
    notify(data) {
        this.observers.forEach(observer => observer.notify(data))
    }
    subscribe(observer){
        this.observers.push(observer)
    }
    unsubscribe(observer) {
        const idx = this.observers.indexOf(observer);
        if(idx > -1 ) {
            this.observers.splice(idx, 1);
        }
    }
}

// Will notify
class SomeFn {
    constructor() {
    }
    notify(data) {
        console.log(`Hello ${data}`);
    }
}

const subject = new Subject();

subject.subscribe(new SomeFn());
subject.notify('World');

setTimeout(() => {
  subject.notify('Foo')
}, 1000);

// Represents creatures and villains for a game

class Creature {
    constructor(name, type, power) {
        this.name = name;
        this.type = type;
        this.power = power;
        this.hasPowerChanged = false;
        this.subject = new Subject();
    }

    setNewPowerLevel(newValue, powerChanged) {
        this.power = newValue;
        this.hasPowerChanged = powerChanged;
        this.subject.notify(this); // ref to THIS class
    }
}

class CreatureSlayer {
    constructor(name) {
        this.name = name;
    }

    notify(creature) {
        if(creature.hasPowerChanged) {
            console.log(`This creature has now a power level of ${creature.power}`);
        }
    }
}

const creature1 =  new Creature('White fang', 'Werewolf', 90 );
const creature2 =  new Creature('Countess Karnstein', 'Vampire', 140 );

const slayer = new CreatureSlayer('Slayer1');
const slayer2 = new CreatureSlayer('Slayer2');

/* Will notify to all the creature slayers that a creature has changed power level*/
//creature1.subject.subscribe(slayer);
//creature1.subject.subscribe(slayer2);
//creature1.setNewPowerLevel(100, true);

/*
This creature has now a power level of 100
This creature has now a power level of 100
*/