import { shrink } from "bun";

// Read input file and split lines
const input = await Bun.file("input.txt").text();
const lines = input.split(/\r?\n/);

var sum: Number = 0;
var tempNr: String = "";
var parts: Number[] = [];

var startPos: number[] = [0, 0];
var stopPos: number[] = [3, 3];

// Create 2D Array using split to separate each character
const array: string[][] = lines.map((row) => row.split(""));

// Get coordinates and check for special character
function findSpecial(start: number[], stop: number[]) {
    console.log("Start: ", start, ", Stop: ", stop);
    for (var i = start[0]; i <= stop[0]; i++) {
        var cube = array[i];
        for (var j = start[1]; j <= stop[1]; j++) {
            console.log(i, j, " ", cube[j]);
            return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(cube[j]);
        }
    }
}

for (var i = 0; i < array.length; i++) {
    var cube = array[i];
    for (var j = 0; j < cube.length; j++) {
        console.log("Loop, cube[" + i + "][" + j + "] = " + cube[j]);

        if (isNaN(cube[j])) {
            // Check if tempNr is not an empty string before parsing and pushing
            if (tempNr !== "") {
                if (startPos) {
                    stopPos = [i + 1, j];
                    var result = findSpecial(startPos, stopPos);
                    console.log(result);
                    if (result) {
                        const numberToAdd = parseInt(tempNr);
                        // Only push the number if it's not NaN
                        if (!isNaN(numberToAdd)) {
                            parts.push(numberToAdd);
                        }
                    }

                    // Reset start and stop postition
                    startPos = [];
                    stopPos = [];
                }
            }
            tempNr = "";
        } else {
            startPos = [Math.max(0, i - 1), Math.max(0, j - 1)];
            tempNr += cube[j];
        }
    }
}

console.log("Result: ", result);
console.log(parts);
