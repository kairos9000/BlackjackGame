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
