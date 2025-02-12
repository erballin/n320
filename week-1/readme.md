## Week 1

### Running a node script

Run it:

- directly in terminal
  ```console
  node index.js
  node ./functions
  ```
- through npm package script shortcut (package.json)
  ```json
  "scripts": {
    "start": "node index.js",
    "fun": "node ./functions"
  },
  ```

### Exporting and Importing files in Node.js

Exporting:

```JS
module.exports = {
  quadraticFormula,
};
```

Importing:

```JS
const MathFunctions = require("./functions"); // Note: will run the whole script when imported.

MathFunctions.quadraticFormula(1, 2, 1); //Call function
```
