const path = require("path");

const functionsFolder = path.resolve("functions", "cow");

console.log("Functions index.js:", path.join(functionsFolder, "index.js"));

console.log("Functions functions:", path.join(functionsFolder, "functions"));

console.log("Basename of functions directory:", path.basename(functionsFolder));
