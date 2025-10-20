const fs = require("fs");
const path = require("path");

const inDir = path.resolve(__dirname, "../svgs");

const files = fs.readdirSync(inDir);

for (const f of files) {
  if (f.startsWith("icons8_") && f.toLowerCase().endsWith(".svg")) {
    const newName = f.replace(/^icons8_/, "");
    fs.renameSync(path.join(inDir, f), path.join(inDir, newName));
    console.log(`renamed: ${f} -> ${newName}`);
  }
}
