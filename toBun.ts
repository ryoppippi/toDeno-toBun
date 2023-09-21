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
    // remove 'npm:' to the string between ' ' or " "
    const newLine = line.replace(/['"]npm:(.*)['"]/g, (match, p1) => {
      return `"${p1}"`;
    });
    return newLine;
  }
  return line;
});

Deno.writeTextFile(path, newLines.join("\n"));

