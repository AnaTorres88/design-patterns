class Target {
    request() {
        return 'some New request'
    }
}

class Origin {
    differentRequest() {
        return '.eetpadA eht fo roivaheb laicepS'
    }
}

class Adapter extends Origin {
    adaptee;

    constructor(adaptee) {
        super();
        this.adaptee = adaptee;
    }

    request() {
        // accessing the different method inside adaptee class set in constructor
        const result = this.adaptee.differentRequest().split('').reverse().join('');
        return `Adapter: (TRANSLATED) ${result}`;
    }
}

const target = new Target();
const origin = new Origin();
const adapter = new Adapter(origin);

// Works fine with target
console.log(target.request())
// origin is different interface
console.log(origin.differentRequest())

// We can use the adapter to call the request method, we passed the origin instance
console.log(adapter.request())