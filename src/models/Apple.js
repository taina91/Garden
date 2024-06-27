// class Apple {
//   constructor(
//     age = 0,
//     color = "green",
//     size = "medium",
//     isRotten = false,
//     hasFallen = false
//   ) {
//     this.age = age;
//     this.color = color;
//     this.size = size;
//     this.isRotten = isRotten;
//     this.hasFallen = hasFallen;
//   }

//   ageOneDay() {
//     this.age += 1;
//     if (this.age >= 30) {
//       this.fallFromTree();
//     }
//   }

//   fallFromTree() {
//     this.hasFallen = true;
//   }

//   rot() {
//     if (this.hasFallen) {
//       this.isRotten = true;
//     }
//   }
// }

// module.exports = Apple;

// При разработке принято что, все яблоки по умолчанию сначала зеленые, затем красные
// Так же все яблоки по умолчанию сначала маленькие, затем средние, а потом выростают в большие

class Apple {
  constructor(
    age = 0,
    color = "",
    size = "",
    isRotten = false,
    hasFallen = false
  ) {
    this.age = age;
    this.color = color || age <= 15 ? "green" : "red";
    this.size = size || age <= 10 ? "small" : age <= 20 ? "medium" : "big";
    this.isRotten = isRotten;
    this.hasFallen = hasFallen;
  }

  fall() {
    this.hasFallen = true;
  }

  rot() {
    this.isRotten = true;
  }

  ageOneDay() {
    this.age += 1;
    this.color = this.age <= 15 ? "green" : "red";
    this.size = this.age <= 10 ? "small" : this.age <= 20 ? "medium" : "big";
    if (this.hasFallen && !this.isRotten) {
      this.rot();
    }
    if (this.age >= 30 && !this.hasFallen) {
      this.fall();
    }
  }
}

module.exports = Apple;

// const myApple = new Apple((age = 9));

// console.log(
//   `Возраст: ${myApple.age}, Цвет: ${myApple.color}, Размер: ${myApple.size}`
// );

// myApple.ageOneDay();
// myApple.ageOneDay();

// console.log(
//   `Возраст: ${myApple.age}, Цвет: ${myApple.color}, Размер: ${myApple.size}`
// );

// myApple.ageOneDay();
// myApple.ageOneDay();
// myApple.ageOneDay();
// myApple.ageOneDay();
// myApple.ageOneDay();

// console.log(
//   `Возраст: ${myApple.age}, Цвет: ${myApple.color}, Размер: ${myApple.size}`
// );

// myApple.ageOneDay();
// myApple.ageOneDay();
// myApple.ageOneDay();
// myApple.ageOneDay();
// myApple.ageOneDay();

// console.log(
//   `Возраст: ${myApple.age}, Цвет: ${myApple.color}, Размер: ${myApple.size}`
// );
