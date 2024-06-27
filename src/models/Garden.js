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
