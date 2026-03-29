const { execSync } = require("child_process");
const fs = require("fs");

// Get full history with refs (branch names)
const log = execSync(
  "git log --all --pretty=format:'%H|%P|%d|%s'"
).toString();

fs.writeFileSync("git-log.txt", log);

let mermaid = "```mermaid\ngitGraph\n";

const commits = log.split("\n").reverse();

let createdBranches = new Set();
let currentBranch = "main";

// Always start from main
mermaid += `   commit id: "start"\n`;

commits.forEach((line) => {
  const [hash, parents, refs] = line.split("|");

  const shortHash = hash.substring(0, 6);

  // Extract branch names from refs
  let branchNames = [];
  if (refs) {
    const matches = refs.match(/refs\/heads\/([^) ,]+)/g);
    if (matches) {
      branchNames = matches.map(r => r.replace("refs/heads/", ""));
    }
  }

  // Create branches if found
  branchNames.forEach(branch => {
    if (!createdBranches.has(branch)) {
      mermaid += `   branch ${branch}\n`;
      createdBranches.add(branch);
    }

    mermaid += `   checkout ${branch}\n`;
    currentBranch = branch;
  });

  const parentList = parents.split(" ").filter(p => p);

  // Merge detection
  if (parentList.length > 1) {
    mermaid += `   merge ${currentBranch}\n`;
  } else {
    mermaid += `   commit id: "${shortHash}"\n`;
  }
});

mermaid += "```";

fs.writeFileSync("graph.md", mermaid);