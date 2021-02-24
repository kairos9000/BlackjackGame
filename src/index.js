import "./style";
import "./prerequisites.js";
import { initCardsArray, shuffle, randomInteger } from "./cardsStackPreparation.js";
import { shuffleAnimation, cardDealingAnimation } from "./animations.js";

document.querySelector("#startGameButton").addEventListener("click", (event) => {
    console.log(event);
    let cardsArray = initCardsArray();
    shuffle(cardsArray);
    let randomMixIndex = randomInteger(250, 300);
    cardsArray.splice(randomMixIndex, 0, "Mix");

    let windowWidth = window.matchMedia("(max-width: 1300px)");
    if (windowWidth.matches) {
        shuffleAnimation(cardsArray, "-500px", "-100px", "-300px", "-50px");
    } else {
        shuffleAnimation(cardsArray, "-200px", "200px", "0px", "500px");
    }
});
