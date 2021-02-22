import "./style";
import "./prerequisites.js";
import { shuffle } from "./card_shuffling/shuffle.js";

let array = [];
for (let i = 0; i < 100; i++) {
    array.push(i);
}
document.querySelector("#startGameButton").addEventListener("click", (event) => {
    console.log(event);
    shuffle(array);
    console.log(array);
});
