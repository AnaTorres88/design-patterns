
class Lights {
    turnOn() {
        console.log( 'lights are on')
    }

    turnOff() {
        console.log( 'lights are off')
    }
}

class Switch {
    up;
    down;
    constructor(up, /* down*/) {
        this.up = up;
        // this.down = down;
    }

    switchOn() {
        this.up.execute();
    }

    swtichDown() {
        this.down.execute();
    }
}

class LightsOnCommand {
    myNewLight;
    constructor(passedDownLight) {
        this.myNewLight = passedDownLight;
    }

    execute() {
        this.myNewLight.turnOn();
    }
}

const testLight =  new Lights();
const testLightsOnCommand =  new LightsOnCommand(testLight);
const newTestSwitch = new Switch(testLightsOnCommand);

newTestSwitch.switchOn();