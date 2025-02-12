// Ask the user if they want to continue,
// Wait 2 secs if so,
// Ask again
// Else close app.

// things to use: readline, setTimeOut

// Pre-built Dependencies
const readline = require("readline");

const app = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askToContinueAfterPause(pause) {
  setTimeout(() => {
    app.question("Do you want to continue? (y/n): ", (answer) => {
      if (answer === "y") {
        askToContinueAfterPause(2000);
      } else if (answer === "n") {
        console.log("goodbye.");
        app.close();
      } else {
        console.log("unknown input.");
        askToContinueAfterPause(0);
      }
    });
  }, pause);
}
askToContinueAfterPause(2000);
