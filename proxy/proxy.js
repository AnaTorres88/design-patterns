// Combining protection proxy and a Property proxy

// Class person, receives a number which is assigned to age property
class Person {
  constructor(age = 0) {
    this.age = age;
  }

  drink() { return 'drinking'; }
  drive() { return 'driving'; }
  drinkAndDrive() { return 'driving while drunk'; }
}

// ResponsiblePerson class
class ResponsiblePerson {
  constructor(person) {
    this.person = person;
  }
  // getter for age property
  get age() { return this.person.age }

  // if age gets changed, it'll udpdate the age of the person
  set age(newAge) {
    if (this.person.age === newAge) {
      return
    }
    this.person.age = newAge
  }
  // checks if person's age is higher than 16 and returns a permission to drive
  drive() {
    if (this.person.age >= 16) {
      return this.person.drive();
    } else {
      return 'too young'
    }

  }
    // checks if person's age is higher than 18 and returns a permission to drink

  drink() {
    if (this.person.age < 18) {
      return 'too young'
    } else {
      return this.person.drink();
    }
  }

  // If person drink and drives will die
  drinkAndDrive() {
    return 'dead'
  }
}


// Test used in the course
let p = new Person(10);
let rp = new ResponsiblePerson(p);

expect(rp.drive()).toEqual('too young');
expect(rp.drink()).toEqual('too young');
expect(rp.drinkAndDrive()).toEqual('dead');

// age is changed
rp.age = 20;

expect(rp.drive()).toEqual('driving');
expect(rp.drink()).toEqual('drinking');
expect(rp.drinkAndDrive()).toEqual('dead');
