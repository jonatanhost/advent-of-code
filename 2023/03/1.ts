// Read input file and split lines
const input = await Bun.file("input.txt").text();
const lines = input.split(/\r?\n/);

var sum: Number = 0
var tempNr: String = ""
var parts: Number[] = []

// Create 2D Array using split to separate each character
const array: string[][] = lines.map(row => row.split(""));


for(var i = 0; i < array.length; i++) {
  var cube = array[i];
  for(var j = 0; j < cube.length; j++) {
      console.log("cube[" + i + "][" + j + "] = " + cube[j]);

      if(isNaN(cube[j])){
        console.log("Not a number")
        parts.push(parseInt(tempNr))
        tempNr = ""
      } else {
        tempNr += cube[j]
      }
      console.log(tempNr)
  }
}

console.log("Sum: ", sum)
console.log(parts)