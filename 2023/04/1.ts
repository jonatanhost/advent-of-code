// Read input file and split lines
const input = await Bun.file("input.txt").text();
const lines = input.split(/\r?\n/);

// Create 2D Array using split to separate each character
const array: string[][] = lines.map((row) => row.split(""));

console.log("Hello via Bun!");
