// const Apple = require("./Apple");

// class Tree {
//   constructor() {
//     this.apples = [];
//   }

//   addApple(apple) {
//     this.apples.push(apple);
//   }

//   getAppleCount() {
//     return this.apples.filter((apple) => !apple.hasFallen).length;
//   }

//   ageApples() {
//     this.apples.forEach((apple) => apple.ageOneDay());
//     this.apples.forEach((apple) => {
//       if (apple.hasFallen && apple.age - 1 > 28) {
//         apple.rot();
//       }
//     });
//   }

//   generateApple() {
//     const age = Math.floor(Math.random() * 31);
//     const color = "green"; // Можно добавить рандомизацию цвета
//     const size = "medium"; // Можно добавить рандомизацию размера
//     this.addApple(new Apple(age, color, size));
//   }

//   bornApple() {
//     this.addApple(new Apple());
//   }
// }

// module.exports = Tree;

// const Apple = require("./Apple");

class Tree {
  constructor(cntApple = 0) {
    this.apples = [];
    for (let i = 0; i < cntApple; i++) {
      const age = Math.floor(Math.random() * 31);
      this.addApple(new Apple(age));
    }
  }

  addApple(apple = new Apple()) {
    this.apples.push(apple);
  }

  // возвращает количество яблок которые сейчас на деревьях
  getAppleCount() {
    return this.apples.filter((apple) => !apple.hasFallen).length;
  }

  ageApples() {
    this.apples.forEach((apple) => apple.ageOneDay());
    // удаляем сгнившие яблоки
    this.apples = this.apples.filter((apple) => !apple.isRotten);
  }
}

module.exports = Tree;

// const myTree = new Tree(15);

// console.log(`Сколько яблок: ${myTree.getAppleCount()}`);

// for (let i = 0; i < 15; i++) {
//   console.log(
//     `Возраст: ${myTree.apples[i].age}, Цвет: ${myTree.apples[i].color}, Размер: ${myTree.apples[i].size}`
//   );
// }

// myTree.ageApples();
// myTree.ageApples();
// myTree.ageApples();

// console.log("\npass 3 days\n");

// console.log(`Сколько яблок: ${myTree.getAppleCount()}`);
// for (let i = 0; i < myTree.apples.length; i++) {
//   console.log(
//     `Возраст: ${myTree.apples[i].age}, Цвет: ${myTree.apples[i].color}, Размер: ${myTree.apples[i].size}`
//   );
// }

// myApple.ageOneDay();

// console.log(
//   `Возраст: ${myApple.age}, Сгнило: ${myApple.isRotten}, Упало: ${myApple.hasFallen}`
// );
