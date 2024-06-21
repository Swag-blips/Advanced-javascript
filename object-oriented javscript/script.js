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

class ColorTriangle extends Triangle {
  constructor(a, b, color) {
    super(a, b);
    this.color = color;
  }
}

const color1 = new ColorTriangle(12, 12, "green");
console.log(color1);

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

/* CHALLENGE */

/* Ebook Exercise
1. Create a class named Book with a constructor that initializes a title, author, and year properties. The title and author should be strings and the year should be a number
2. Create a subclass named Ebook that extends Book.
3. The Ebook class should have an additional property fileSize which is a number and a method download() that returns a string with the title of the ebook and its fileSize.

*/

class Book {
  constructor(title, author, year) {
    if (typeof title !== "string") throw new Error(`not a string`);
    if (typeof author !== "string") throw new Error(`not a string`);
    if (!Number.isFinite(year) || year <= 0) throw new Error(`not a number`);

    this.title = title;
    this.author = author;
    this.year = year;
  }
}

class Ebook extends Book {
  constructor(title, author, year, fileSize) {
    if (!Number.isFinite(fileSize)) throw new Error(`not a number`);
    super(title, author, year);
    this.fileSize = fileSize;
  }

  download() {
    return `${this.title} has a file size of ${this.fileSize}`;
  }
}

const firstBook = new Book("dawn", "wayne", 2003);
const firstEbook = new Ebook("hello", "damien", 2005, 24);

console.log(firstEbook.download());
