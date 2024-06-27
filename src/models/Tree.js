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
