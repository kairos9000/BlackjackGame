import "./style";
import "./prerequisites.js";
import { initCardsArray, shuffle, randomInteger } from "./cardsStackPreparation.js";

document.querySelector("#startGameButton").addEventListener("click", (event) => {
    console.log(event);
    let cardsArray = initCardsArray();
    shuffle(cardsArray);
    let randomMixIndex = randomInteger(250, 300);
    cardsArray.splice(randomMixIndex, 0, "Mix");
    console.log(cardsArray);
});
