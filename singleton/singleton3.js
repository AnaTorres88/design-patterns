
/* Another singleton example */
let instance
 class Singleton {

  constructor(){
    // if instance is defined, return it
    if(instance){
      return instance
    }
    // just a property
    this.state = "duke";

    // if instance is not defined, it will be equal to this
    instance = this;
  }

}


// first time instantiated
let first = new Singleton();

// try to instantiate a second time.
let second = new Singleton();
// the first time is equal to the second, meaning it is the same instance.
console.log(first === second)