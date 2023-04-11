class SomeIterator {
    items=[];
    idx = 0;
    constructor(items) {
        this.items = items
    }

    addItem(item) {
        this.items.push(item)
    }

    isNext() {
        return this.items.length > this.idx;
    }
    next() {
        return this.items[this.idx++];
    }
}

const items = ['1', {isObject: true}, 2.5, true];
const iterator = new SomeIterator(items);
if(iterator.isNext()) {
    console.log(iterator.next())
}