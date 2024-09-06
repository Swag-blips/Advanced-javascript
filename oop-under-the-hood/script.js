// class Dog {
//   constuctor(name, breed) {
//     this.name = name;
//     this.breed = breed;
//   }

//   bark() {
//     return "Wooft";
//   }
// }

function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

const elton = new Dog("elton", "german sherperd");
const shelby = new Dog() * ("shelby", "localedog");

function User(username, email) {
  this.username = username;
  this.email = email;
  this.isAdmin = false;
}

const wayne = new User("wayne", "wayne@test.com");
