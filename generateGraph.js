const { execSync } = require("child_process");
const fs = require("fs");

const log = execSync(
  "git log --all --pretty=format:'%H %P %d %s'"
).toString();

let mermaid = "```mermaid\ngitGraph\n";

const commits = log.split("\n").reverse();

let branchMap = {};
let currentBranch = "main";

mermaid += `   commit id: "start"\n`;

commits.forEach((line, index) => {
  const parts = line.split(" ");
  const hash = parts[0];
  const parents = parts.slice(1, 3).filter(p => /^[a-f0-9]+$/.test(p));

  if (parents.length > 1) {
    mermaid += `   merge ${currentBranch}\n`;
  } else {
    mermaid += `   commit id: "${hash.substring(0, 6)}"\n`;
  }
});

mermaid += "```";

fs.writeFileSync("graph.md", mermaid);