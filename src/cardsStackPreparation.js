export function initCardsArray() {
    // Suits of cards; C is Clubs, D is Diamonds, H is Hearts and S is Spades, in german Kreuz, Karo, Herz und Pik
    let cardSuits = ["C", "D", "H", "S"];
    let specialCards = ["A", "J", "K", "Q"];
    let cardsArray = [];

    for (let j = 0; j < 6; j++) {
        for (let i = 2; i <= 10; i++) {
            for (let suit in cardSuits) {
                cardsArray.push(i.toString() + cardSuits[suit]);
            }
        }

        for (let specialCard in specialCards) {
            for (let suit in cardSuits) {
                cardsArray.push(specialCards[specialCard] + cardSuits[suit]);
            }
        }
    }
    return cardsArray;
}

// Shuffling after the principle of the Fisher-Yates-Shuffle, for optimal algorithm complexity and unbiased shuffling
export function shuffle(array) {
    let currIndex = array.length,
        tempValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 != currIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currIndex);
        currIndex -= 1;

        // And swap it with the current element.
        tempValue = array[currIndex];
        array[currIndex] = array[randomIndex];
        array[randomIndex] = tempValue;
    }

    return array;
}

// Returns a random Integer for the special mix card including the min and max values
export function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
