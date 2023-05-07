// main class of the simpest iterator
class SomeIterator {
    items=[];
    idx = 0;
    constructor(items) {
        // assign the initial items when instantiating the class
        this.items = items
    }

    addItem(item) {
        this.items.push(item)
    }
    // methods to traverse
    isNext() {
        return this.items.length > this.idx;
    }
    next() {
        return this.items[this.idx++];
    }
}

const items = ['1', {isObject: true}, 2.5, true];
// Instantiate the iterator class with those items as parameter.
const iterator = new SomeIterator(items);
// if there's an element that goes next, print it in console 
if(iterator.isNext()) {
    console.log(iterator.next());
}