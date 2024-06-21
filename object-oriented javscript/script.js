class Triangle {
  constructor(a, b) {
    if (!Number.isFinite(a) || a <= 0) throw new Error(`invalid a: ${a}`);
    if (!Number.isFinite(b) || b <= 0) throw new Error(`invalid a: ${b}`);

    this.a = a;
    this.b = b;
  }

  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }

  sayHi() {
    return `the triangle with side A of ${this.a} and side B of ${
      this.b
    } and with an area of ${this.getArea()} says hi`;
  }
}

const tri1 = new Triangle(5, 12);
const tri2 = new Triangle(132, 15);

console.log(tri1, tri2);
console.log(tri1.sayHi());

// Inheritance and Super
class ShyTriangle extends Triangle {
  describe() {
    return "(runs and hides)";
  }
}

// practice with classe bank account

class BankAccount {
  constructor(accountHolder, accountNumber, balance = 0) {
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amt) {
    if (amt > 0) {
      this.balance += amt;
      console.log(`You deposited $${amt}. new Balance is: $${this.balance}`);
    } else {
      console.log(`Can't deposit a negative amount`);
    }
  }

  withdraw(amt) {
    if (amt > this.balance) {
      console.log(` You cant withdraw that much`);
    } else {
      this.balance -= amt;
      console.log(` you withdrew $${amt} . New balance is $${this.balance}`);
    }
  }
}

const a = new BankAccount("123", "james dean");

console.log(a);
console.log(a.deposit(200));
console.log(a.deposit(200));
