// Read input file and split lines
const input = await Bun.file("input.txt").text();
const lines = input.split(/\r?\n/);

var sum: number = 0;

const cardObjects = lines.map((line) => {
    // Split the line at " | " and then process each part
    const [firstPart, secondPart] = line.split(" | ");

    // For the first part, remove "Card X:" and then split into numbers
    const firstNumbers = firstPart.trim().split(/\s+/).slice(2).map(Number);

    // For the second part, just split into numbers
    const secondNumbers = secondPart.trim().split(/\s+/).map(Number);

    return { card: firstNumbers, winners: secondNumbers };
});

cardObjects.forEach((element) => {
    console.log("Game x");

    let points = 0;

    console.log(element.card);

    console.log(element.winners);
    for (var card of element.card) {
        let result = element.winners.includes(card);
        console.log("Card: ", card, "Result: ", result);

        // If card is a winner
        if (result) {
            points += 1;
        }
        console.log("Points: ", points);
    }
    cardObjects.splice(0, 0, element);
    sum += points;
});

console.log(cardObjects);
console.log("Sum: ", sum);
