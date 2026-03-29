const { execSync } = require("child_process");
const fs = require("fs");

const log = execSync("git log --oneline --graph").toString();

const content = `
## Git Graph

\`\`\`mermaid
gitGraph
   commit id: "init"
\`\`\`

\`\`\`
${log}
\`\`\`
`;

fs.writeFileSync("graph.md", content);