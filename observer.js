
function Observable() {
    this.observers = []
}
Observable.prototype.subscribe = function(func) {
    this.observers.push(func);
  }

Observable.prototype.unsubscribe = function(func) {
    this.observers = this.observers.filter(observer => observer !== func);
}

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

//https://matcha.fyi/observer-pattern-javascript/