const fs = require("fs");
const path = require("path");

fs.writeFileSync(
  "garbageDigimon.json",
  JSON.stringify([
    { name: "Agumon", rank: 2 },
    { name: "Numemon", rank: 2 },
  ])
);

const garbageDigimonData = fs.readFileSync("garbageDigimon.json");

console.log(garbageDigimonData.toString());

const dataPath = path.resolve("data");

if (!fs.existsSync(dataPath)) {
  fs.mkdirSync(dataPath);
}

fs.writeFileSync(path.join(dataPath, "user.json"), "{}");

fs.writeFileSync(path.join(dataPath, ".gitIgnore"), "# Folder extensions to ignore...");

fs.appendFileSync(path.join(dataPath, ".gitignore"), `\n\nnode_modules`);
