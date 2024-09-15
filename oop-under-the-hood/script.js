class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  bark() {
    return `${this.name} says woof`;
  }
  sleep() {
    return `${this.name} is sleeping`;
  }
}

const elton = new Dog("elton", "aussie");
const wyatt = new Dog("wyatt", "aussie");

// function Dog(name, breed) {
//   this.name = name;
//   this.breed = breed;
//   this.bark = function () {
//     return `${this.name} says woof`;
//   };
//   this.sleep = function () {
//     return `${this.name} is sleeping`;
//   };
// }

// const elton = new Dog("elton", "german sherperd");
// const shelby = new Dog("shelby", "localedog");

// function User(username, email) {
//   this.username = username;
//   this.email = email;
//   this.isAdmin = false;
// }

const wayne = new User("wayne", "wayne@test.com");
