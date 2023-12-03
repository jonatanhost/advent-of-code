// Read input file and split lines
const input = await Bun.file("input.txt").text();
const lines = input.split(/\r?\n/);

var sum: Number = 0
var tempNr: String = ""
var parts: Number[] = []


var start: number[] = [0,0]
var stop: number[] = [3,3]


// Create 2D Array using split to separate each character
const array: string[][] = lines.map(row => row.split(""));

// Get coordinates and check for special character
function findSpecial(start: number[], stop: number[]) {
  for(var i = start[0]; i <= stop[0]; i++) {
    var cube = array[i];
    for(var j = start[1]; j <= stop[1]; j++) {
      console.log(i,j, " ",cube[j])
      return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(cube[j]);
    }
  }
}
var result = findSpecial([1,1],[3,4])



for(var i = 0; i < array.length; i++) {
  var cube = array[i];
  for(var j = 0; j < cube.length; j++) {
      console.log("cube[" + i + "][" + j + "] = " + cube[j]);

      if(isNaN(cube[j])){
        // Check if tempNr is not an empty string before parsing and pushing
        if (tempNr !== "") {
          const numberToAdd = parseInt(tempNr);
          // Only push the number if it's not NaN
          if (!isNaN(numberToAdd)) {
            parts.push(numberToAdd);
          }
        }
        tempNr = "";
      } else {
        tempNr += cube[j]
      }
  }
}

console.log("Result: ", result)
console.log(parts);