 /* ES6 */

 class Singleton {
    // Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.
    static instance;
    // any global property
    name = ''
    
    constructor(name = '') {
        // coerce to boolean, if it is defined, return it
        if(!!Singleton.instance) {
            return Singleton.instance;
        }
        // if it's not defined, it'll be this
        Singleton.instance = this;
        this.name = name;
    }
}

const instance1 = new Singleton('Harrow');
console.log('Name inside instance is ' + instance1.name);


const instance2 = new Singleton('Gideon');
console.log('Name inside instance is ' + instance2.name)
 
// Expected. Instance to be Gideon