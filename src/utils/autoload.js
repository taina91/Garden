const path = require("path");
const fs = require("fs");

function autoload(dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      autoload(filePath);
    } else if (file.endsWith(".js")) {
      const moduleName = path.basename(file, ".js");
      global[moduleName] = require(filePath);
    }
  });
}

module.exports = autoload;
