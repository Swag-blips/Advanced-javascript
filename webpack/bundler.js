const fs = require("fs");
const babylon = require("babylon");
const traverse = require("@babel/traverse").default;
function createAsset(filename) {
  const content = fs.readFileSync(filename, "utf-8");

  const ast = babylon.parse(content, {
    sourceType: "module",
  });

  console.log(ast);

  traverse(ast, {
    ImportDeclaration: ({ node }) => {
      console.log(node);
    },
  });
}

createAsset("./entry.js");
