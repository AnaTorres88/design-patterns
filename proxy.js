// Combining protection proxy and a Property proxy

class Person
{
  constructor(age=0)
  {
    this.age = age;
  }

  drink() { return 'drinking'; }
  drive() { return 'driving'; }
  drinkAndDrive() { return 'driving while drunk'; }
}

class ResponsiblePerson
{
  constructor(person)
  {
    this.person = person;
  }
  get age() {return this.person.age}
  set age(newAge) {
      if(this.person.age === newAge) {
          return
      }
      this.person.age = newAge
  }
  drive() {
    if(this.person.age >= 16) {
        return this.person.drive();
    } else {
        return 'too young'
    }
        
  }
  drink() {
    if(this.person.age < 18) {
       return 'too young'
    } else {
        return this.person.drink();
    }
  }
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

rp.age = 20;

expect(rp.drive()).toEqual('driving');
expect(rp.drink()).toEqual('drinking');
expect(rp.drinkAndDrive()).toEqual('dead');
