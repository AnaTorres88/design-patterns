let Action = Object.freeze({
  deposit: 0,
  withdraw: 1
});

class Command {
  constructor(action, amount) {
    this.action = action;
    this.amount = amount;
    this.success = false;
  }

}

class Account {
  constructor() {
    this.balance = 0;
  }


  process(cmd) {
    switch (cmd.action) {
      case 0:
        this.balance += cmd.amount;

        cmd.success = true;
        this.success = true;

        break;
      case 1:
        if (cmd.amount <= this.balance) {
          this.balance -= cmd.amount;
          cmd.success = true;
          this.success = true;

        } else {
          cmd.success = false;
          this.success = false;
        }
        break;
    }
    return this.success;
  }

}

const account = new Account();

const command = new Command(Action.deposit, 50);
account.process(command);
