
/* A Singleton in a function */
const Singleton = () => {
    
    let instance;
    function SingletonObj() {
        console.log('HELLO WORLD');
    }

    // Make this method accessible with return keyword
    /* If instance is null. Instantiate the singleton, else, return it*/
    return {
        getInstance: () => {
            if(this.instance === null) { 
                this.instance = new SingletonObj();
            }

            return this.instance;
        }
    }
}
 
const singletonJS = Singleton();
const singletonJS2 = Singleton();
console.log( singletonJS.getInstance() === singletonJS2.getInstance() ) // true

