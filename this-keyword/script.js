class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }

  dance(style = "tango") {
    return `Meow, i am ${this.firstName} and i like to ${style}`;
  }
}

const fluffy = new Cat("fluffy");

// storing this in a variable would result in an error
console.log(fluffy.dance());

function whatIsThis() {
  console.log("what is this", this);
}
///'

const obj = {
  whatIsThis: whatIsThis,
};

whatIsThis();
