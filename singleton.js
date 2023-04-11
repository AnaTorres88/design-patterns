
let instance
 class Singleton {


  constructor(){
    if(instance){
      return instance
    }

    this.state = "duke";
    instance = this;
  }

}


let first = new Singleton();
let second = new Singleton();
console.log(first === second)
const Singleton = () => {
    
    let instance;
     function SingletonObj() {
         console.log('HELLO WORLD')
     }
        
     return {
         getInstance: () => {
         if(this.instance == null){
             this.instance = new SingletonObj();
         }
         return this.instance;
     }}
 }
 
 const singletonJS = Singleton();
 const singletonJS2 = Singleton();
 console.log( singletonJS.getInstance() === singletonJS2.getInstance() ) // true

 /* ES6 */

 
 class Singleton {
    // Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.
    static instance;
    // any global property
    name = ''
    
    constructor(name = '') {
        if(!!Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
        this.name = name;
    }
}

const instance1 = new Singleton('Harrow');
console.log('Name inside instance is ' + instance1.name);


const instance2 = new Singleton('Gideon');
console.log('Name inside instance is ' + instance2.name)
 
