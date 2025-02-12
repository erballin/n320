// Pre-built Dependencies
const readline = require("readline");

// Installed Dependencies

// Custom Modules
const mathFuncs = require("./functions");

// console.log(mathFuncs.calcSquareArea({ width: 5, length: 7 }));
// console.log(mathFuncs.calcSquareArea({ width: 1, length: 1 }));

const app = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
app.question("Enter the height of the triangle: Height: ", (userHeight) => {
  console.log(userHeight);
  app.question("Enter the base of the triangle: Base: ", (userBase) => {
    console.log(userBase);
    console.log(mathFuncs.calcTriArea({ height: userHeight, base: userBase }));
    app.close();
  });
});
