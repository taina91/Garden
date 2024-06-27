const autoload = require("./utils/autoload.js");
const path = require("path");

autoload(path.join(__dirname, "models"));

const myGarden = new Garden(30);

console.log(`Initial number of trees: ${myGarden.getCountTree()}`);
console.log(`Initial number of apples: ${myGarden.getCountApple()}`);

myGarden.passOneDay();
myGarden.passOneDay();
myGarden.passOneDay();

console.log(`Initial number of trees: ${myGarden.getCountTree()}`);
console.log(`Initial number of apples: ${myGarden.getCountApple()}`);

myGarden.passOneDay();

console.log(`Initial number of trees: ${myGarden.getCountTree()}`);
console.log(`Initial number of apples: ${myGarden.getCountApple()}`);

myGarden.passOneDay();

myGarden.addTree(new Tree());

for (let i = 0; i < 30; i++) {
  myGarden.passOneDay();
}

console.log(`Number of trees after 30 days: ${myGarden.getCountTree()}`);
console.log(`Number of apples after 30 days: ${myGarden.getCountApple()}`);
