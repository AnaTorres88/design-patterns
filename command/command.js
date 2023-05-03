
// Class that switches off and on lights
class Lights {
    turnOn() {
        console.log( 'lights are on');
    }

    turnOff() {
        console.log( 'lights are off');
    }
}

// the class for the switch
class Switch {
    up;
    down;
    // receives a class
    constructor(up, /* down*/) {
        this.up = up;
        // this.down = down;
    }

    // executes the method inside the received class
    switchOn() {
        this.up.execute();
    }

    swtichDown() {
        this.down.execute();
    }
}

/* Receives a Light clas and execute method turns on the lights by invoking the turnOn method in the received class*/
class LightsOnCommand {
    myNewLight;
    constructor(passedDownLight) {
        this.myNewLight = passedDownLight;
    }

    execute() {
        this.myNewLight.turnOn();
    }
}

// instantiate Lights
const testLight =  new Lights();
// we're passing the Lights class to the LightsOnCommandClass
const testLightsOnCommand =  new LightsOnCommand(testLight);
// the Switch is going to execute the command, so we pass the lightsOn command we instantiated
const newTestSwitch = new Switch(testLightsOnCommand);

// invoking the method inside the Switch
newTestSwitch.switchOn();