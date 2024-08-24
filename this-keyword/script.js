// class Cat {
//   constructor(firstName) {
//     this.firstName = firstName;
//   }

//   static getRandomCat() {
//     console.log("THIS IS", this);
//   }

//   dance(style = "tango") {
//     return `Meow, i am ${this.firstName} and i like to ${style}`;
//   }
// }

// const fluffy = new Cat("fluffy");
// const kitty = new Cat("kitty");

// const fluffyDance = fluffy.dance;
// console.log(fluffyDance.call(fluffy, "salsa"));
// // storing this in a variable would result in an error

// function whatIsThis(s) {
//   console.log("what is this", this);
// }
// ///'

// const obj = {
//   whatIsThis: whatIsThis,
// };

// whatIsThis();

// // call
