// Read input file and split lines
const input = await Bun.file("input.txt").text();
const lines = input.split(/\r?\n/);

var sum: number = 0;

const cardObjects = lines.map((line) => {
    const [firstPart, secondPart] = line.split("|").map(
        (part) => part.trim().split(/\s+/).slice(2).map(Number) // Removing "Card X:" part
    );
    return { card: firstPart, winners: secondPart };
});

cardObjects.forEach((element) => {
    console.log("Game x");

    console.log(element.card);
    for (var card of element.card) {
        let result = element.winners.includes(card);
        console.log("Card: ", card, "Result: ", result);
    }
});

console.log(cardObjects[0].card);
