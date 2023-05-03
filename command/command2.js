
// Main Calculator class
class Calculator {
    constructor() {
        this.value = 0;
        this.history = [];
    }

    // we receive a command
    executeCommand(command) {
        this.value = command.execute(this.value);
        this.history.push(command);
    }

    undo() {
        // this works using the reference in the popped command
        const command = this.history.pop();
        this.value = command.undo(this.value);
    }
}

/* Commands for different operations that can be performed by a calculator. Notice how all of them have an execute and an undo method*/
class AddCommand {
    constructor(valueToAdd) {
        // this is the parameter for the methods
        this.valueToAdd = valueToAdd;
    }

    execute(currentValue) {
        return currentValue + this.valueToAdd
    }

    undo(currentValue) {
        return currentValue - this.valueToAdd
    }
}

class SubtractCommand {
    constructor(valueToSubtract) {
      this.valueToSubtract = valueToSubtract
    }
  
    execute(currentValue) {
      return currentValue - this.valueToSubtract
    }
  
    undo(currentValue) {
      return currentValue + this.valueToSubtract
    }
  }
  
  class MultiplyCommand {
    constructor(valueToMultiply) {
      this.valueToMultiply = valueToMultiply
    }
  
    execute(currentValue) {
      return currentValue * this.valueToMultiply
    }
  
    undo(currentValue) {
      return currentValue / this.valueToMultiply
    }
  }
  
  class DivideCommand {
    constructor(valueToDivide) {
      this.valueToDivide = valueToDivide
    }
  
    execute(currentValue) {
      return currentValue / this.valueToDivide
    }
  
    undo(currentValue) {
      return currentValue * this.valueToDivide
    }
  }
  
  class AddThenMultiplyCommand {
    constructor(valueToAdd, valueToMultiply) {
      this.addCommand = new AddCommand(valueToAdd)
      this.multiplyCommand = new MultiplyCommand(valueToMultiply)
    }
  
    execute(currentValue) {
      const newValue = this.addCommand.execute(currentValue)
      return this.multiplyCommand.execute(newValue)
    }
  
    undo(currentValue) {
      const newValue = this.multiplyCommand.undo(currentValue)
      return this.addCommand.undo(newValue)
    }
  }

  // Instantiate Calculator
  calculator = new Calculator();
  // Call method executeCommand and we pass an Addition command with a number parameter of 10
  calculator.executeCommand(new AddCommand(10));
  // Asking for a value
  console.log(calculator.value)