/* Observable ES5 */
function Observable() {
    this.observers = []
}

// subscribe method will add the observers to the array inside the Observabe function (class)
Observable.prototype.subscribe = function(func) {
    this.observers.push(func);
  }

// unsubscribe method will stop the object of keep updating

Observable.prototype.unsubscribe = function(func) {
    this.observers = this.observers.filter(observer => observer !== func);
}

// will execute the functions

Observable.prototype.notify = function(data) {
    this.observers.forEach(observer => observer(data));
}

//methods
const logger = (data) => {
    console.log(`${Date.now()} ${data}`);
}

const toast = (data) => {
    console.log(`Showing: ${data}`);
}

const toastify = (data) => {
    toast(data);
}

// Create the observable and subscribe our functions
const observable = new Observable();
observable.subscribe(logger);
observable.subscribe(toastify);

function handleClick() {
  observable.notify("User clicked button!");
}

function handleToggle() {
  observable.notify("User toggled switch!");
}

handleToggle();
handleClick();

// Expected
/*
// NOTE: Date will always change
    1683501723948 User toggled switch!
    Showing: User toggled switch!
    1683501723961 User clicked button!
    Showing: User clicked button!
 */
//https://matcha.fyi/observer-pattern-javascript/