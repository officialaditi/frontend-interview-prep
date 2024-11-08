// class and constructor - 2

class Person {
  constructor(name, channel, likes = 0) {
    (this.name = name), (this.channel = channel), (this.videoLikes = likes);
  }

  youtube() {
    console.log(
      `Creator Name:${this.name}, Channel: ${this.channel}, likes: ${this.videoLikes}`
    );
  }
  like() {
    this.videoLikes++;
    return `Liked this Video, Current Likes: ${this.videoLikes}`;
  }
}
// we have created 1 class and with that class we have created 2 independent objects that used class properties and method.

const check = new Person("Aditi", "Beyond comfort zone"); // obj-1
const checkAgain = new Person("Piyuesh", "Roadside Coder"); // obj-2
