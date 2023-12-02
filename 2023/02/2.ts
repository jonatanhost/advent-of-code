// Read file and split into lines
const input = await Bun.file("input.txt").text();
const lines = input.split(/\r?\n/);

const max = { red: 12, green: 13, blue: 14 };

var sum = 0;
let game = 0;
var over: boolean = false;

for (var line of lines) {
    over = false;

    const temp = line.split(": ");

    const regMatch = temp[0].match(/\b\d+\b/);

    if (regMatch) {
        game = parseInt(regMatch);
    }

    let games = temp[1].split(";");

    // Process each part to create an array of objects
    const results = games.map((part) => {
        // Split each part into color-count pairs
        const pairs = part.split(",");

        // Create an object from each pair
        const obj: { [key: string]: number } = {};
        pairs.forEach((pair) => {
            const [count, color] = pair.trim().split(" ");
            obj[color] = parseInt(count, 10);
        });

        return obj;
    });

    console.log(results);
    const minBlue = Math.max(...results.map((item) => item.blue || 0));
    const minRed = Math.max(...results.map((item) => item.red || 0));
    const minGreen = Math.max(...results.map((item) => item.green || 0));
    console.log(minBlue, minGreen, minRed);

    var power = minBlue * minRed * minGreen;
    console.log(power);

    sum += power;
}

console.log(sum);
