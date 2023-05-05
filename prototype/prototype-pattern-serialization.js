// Address class expects streetAddress, city and country strings
class Address {
    constructor(streetAddress, city, country) {
        this.streetAddress = streetAddress;
        this.city = city;
        this.country = country;
    }
// builds and returns an adress string
    toString() {
        return `Address: ${this.streetAddress}, ` +
            `${this.city}, ${this.country}`;
    }
}

// class Person, receives a name string and address object (the Address class). 
class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    // Returns a string built with name and address properties
    toString() {
        return `${this.name} lives at ${this.address}`;
    }
    // Logs a greet, it also calls toString() method from the passed Address class
    greet() {
        console.log(
            `Hi, my name is ${this.name}, ` +
            `I live at ${this.address.toString()}`
        );
    }
}

/* Serializer class defines types in its initialization. Those types are the Person and Adress classes */
class Serializer {
    constructor(types) {
        this.types = types;
    }

    markRecursive(object) {
        // anoint each object with a type index
        // object.constructor returns [class Person]
        let idx = this.types.findIndex(t => {
            return t.name === object.constructor.name;
        });
        // If index exists, create property based on that index
        if (idx !== -1) {
            object['typeIndex'] = idx;

            // For for every key, checks if that property is an object, in that case, runs this function recursively
            for (let key in object) {
                if (object.hasOwnProperty(key) && object[key] != null)
                    this.markRecursive(object[key]);
            }
        }
    }

    // Reconstructs object recursively
    reconstructRecursive(object) {
        if (object.hasOwnProperty('typeIndex')) { // Looks for the [class Person] or [class Address]
            let type = this.types[object.typeIndex];
            let obj = new type(); // instantiates that Person or Address
            for (let key in object) { // For for every key, checks if that property is an object, in that case, runs this function recursively
                if (object.hasOwnProperty(key) && object[key] != null) {
                    obj[key] = this.reconstructRecursive(object[key]);
                }
            }
            delete obj.typeIndex;
            return obj;
        }
        return object;
    }

    // This is the method that clones the objects (object initialized using Person)
    clone(object) {
        this.markRecursive(object);
        let copy = JSON.parse(JSON.stringify(object));
        return this.reconstructRecursive(copy);
    }
}

let john = new Person('John',
    new Address('123 London Road', 'London', 'UK'));

let jane = JSON.parse(JSON.stringify(john));

jane.name = 'Jane';
jane.address.streetAddress = '321 Angel St';

john.greet();
// this won't work
// jane.greet();

// try a dedicated serializer
let s = new Serializer([Person, Address]);
jane = s.clone(john);

jane.name = 'Jane';
jane.address.streetAddress = '321 Angel St';

console.log(john.toString());
console.log(jane.toString());