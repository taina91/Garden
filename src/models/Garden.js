// const Tree = require("./Tree");

// class Garden {
//   constructor(cntTree = 0, applesPerTree = cntTree * 2) {
//     this.trees = [];
//     this.age = 0;

//     for (let i = 0; i < cntTree; i++) {
//       const tree = new Tree();
//       for (let j = 0; j < applesPerTree; j++) {
//         tree.generateApple();
//       }
//       this.addTree(tree);
//     }
//   }

//   addTree(tree) {
//     this.trees.push(tree);
//   }

//   getCountTree() {
//     return this.trees.length;
//   }

//   getCountApple() {
//     return this.trees.reduce((count, tree) => count + tree.getAppleCount(), 0);
//   }

//   passOneDay() {
//     this.age += 1;
//     this.trees.forEach((tree) => tree.ageApples());

//     if (this.age % 30 === 0) {
//       this.trees.forEach((tree) => tree.bornApple());
//     }
//   }
// }

// module.exports = Garden;

// const Tree = require("./Tree");

class Garden {
  constructor(cntTree = 0, applesPerTree = cntTree * 2) {
    this.trees = [];
    this.age = 0;

    for (let i = 0; i < cntTree; i++) {
      const tree = new Tree(applesPerTree);
      this.addTree(tree);
    }
  }

  addTree(tree) {
    this.trees.push(tree);
  }

  getCountTree() {
    return this.trees.length;
  }

  // возвращает количество яблок которые сейчас на деревьях
  getCountApple() {
    return this.trees.reduce((count, tree) => count + tree.getAppleCount(), 0);
  }

  passOneDay() {
    this.age += 1;
    this.trees.forEach((tree) => tree.ageApples());

    if (this.age % 30 === 0) {
      this.trees.forEach((tree) => tree.addApple());
    }
  }
}

module.exports = Garden;

// const myGarden = new Garden(10);

// myGarden.passOneDay();

// console.log(myGarden.getCountApple(), myGarden.getCountTree());

// for (let i = 0; i < 10; i++) {
//   console.log(`Дерево ${i}`);
//   for (let j = 0; j < 20; j++) {
//     console.log(
//       `Яблоко ${j}: ${myGarden.trees[i].apples[j].age}, ${myGarden.trees[i].apples[j].color}, ${myGarden.trees[i].apples[j].size}`
//     );
//   }
// }
