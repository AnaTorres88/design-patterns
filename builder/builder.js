
/* This builder renders chunks of code */

class Class {
    get indentation() { return 2 };

    constructor(className) {
        this.className = className;
        this.fields = [];
        
    }
    
    implementString() {
        let code = [];
        let classImplementation = `class ${this.className} {\n`; // class Name in the chunk of code as string
        let indent = ' '.repeat(2);

        code.push(classImplementation);
        if(this.fields.length > 0) {
            code.push(`${indent}constructor(`);
            this.fields.forEach((field, idx ) => {
                code.push(`${field.name}`);
                if(idx !== this.fields.length-1) {
                    code.push(`, `);
                }
            });
            code.push(`) {\n`);
            /* 
            // By the end of this code, we have this type of structure as a string  
                	class Person {
                        constructor(name, age) {
            */
            for(let field of this.fields) {
                code.push(`${indent}${indent}this.${field.name} = ${field.name};\n`);
            }
            code.push(`${indent}}\n`);
            /* Here we have completed the following structure, and appended it to the last part
                    this.name = name;
                    this.age = age;
                }
            */
           
        }
        code.push(`}`) // the end of the structure
        return code.join('');
    }
    // This will be called from our Main builder as this.root.toString()
    toString() {
        return this.implementString(0);
    }

    create(name) {
        return new CodeBuilder(name)
    }
}

// sets the name to field.
class Field {
    constructor(name = '') {
        this.name = name;
    }
}

// Main Builder

class CodeBuilder {

    // gets a string as className
  constructor(className) {
    // instantiates a new Class as a root
      this.root =  new Class(className);
  }
  
  addField(name) {
    // Instantiates a new field into the fields property of the root.
     this.root.fields.push(new Field(name));

    // return 'this' to have a fluent interface. This class will be returned. Allows chaining metehods.
    return this;
  }

  // This executes the toString() method of the class we have as root
  toString() {
    return this.root.toString();
  }
  
  build() {
      return this.root;
  }
}

let cb = new CodeBuilder('Person');
cb.addField('name').addField('age'); // the return of 'this' allows to chain the addField() method
console.log(cb.toString());

/*
Expected output
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
*/

/* We're building this chunk of code by calling add Fields and then calling toString() method,
which is also calling the implementString() method. This last method does the heavylifting of creating
the string that represents a JS Class. Notice that this method is "hidden" from the main implementation which makes the code simpler. */