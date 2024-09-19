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


// function User(username, email) {
//   this.username = username;
//   this.email = email;
//   this.isAdmin = false;
// }

const wayne = new User("wayne", "wayne@test.com");
