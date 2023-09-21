#!/usr/bin/env deno run --allow-read --allow-write

const path = Deno.args.at(0);
if (!path) {
  console.log("Please provide a path to a file");
  Deno.exit(1);
}

const text = await Deno.readTextFile(path);

const lines = text.split("\n");

const newLines = lines.map((line) => {
  // if line startsWith 'import'
  // if the string between ' ' or " " does start with 'npm:'
  if (line.startsWith("import") && line.match(/['"]npm:/)) {
    // if line startsWith 'import' and the string between ' ' or " " does not start with 'npm:'
    if (line.startsWith("import") && !line.match(/['"]npm:/)) {
      // add 'npm:' to the string between ' ' or " "
      const newLine = line.replace(/['"](.*)['"]/g, (_, p1) => `"npm:${p1}"`);
      return newLine;
    }
    return line;
  }
  return line;
});

Deno.writeTextFile(path, newLines.join("\n"));
