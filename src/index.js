import "./style";
import "./prerequisites.js";
import { initCardsArray, shuffle, randomInteger } from "./cardsStackPreparation.js";
import { shuffleAnimation, cardDealingAnimation, sleep, collectCards, burnFirstCard } from "./animations.js";

let cardsArray = initCardsArray();
shuffle(cardsArray);
let randomMixIndex = randomInteger(250, 300);
cardsArray.splice(randomMixIndex, 0, "Mix");

// document.querySelector("#startGameButton").addEventListener("click", (event) => dealCards());
// dealCards();

async function dealCards() {
    let windowWidth = window.matchMedia("(max-width: 1300px)");

    if (windowWidth.matches) {
        shuffleAnimation(cardsArray, "-500px", "-100px", "-300px", "-50px");
    } else {
        shuffleAnimation(cardsArray, "-200px", "200px", "0px", "500px");
    }

    await sleep(4000);

    if (windowWidth.matches) {
        var cardStackPlace = "-50";
        var firstPlayerSeat = ["0", "5"];
    } else {
        var cardStackPlace = "500";
        var firstPlayerSeat = ["370", "304"];
        var secondPlayerSeat = ["-40", "364"];
        var thirdPlayerSeat = ["-450", "304"];
        var bankSeat = ["-40", "0"];
        var playerSeatArray = [];
        playerSeatArray.push(firstPlayerSeat);
        playerSeatArray.push(secondPlayerSeat);
        playerSeatArray.push(thirdPlayerSeat);
        playerSeatArray.push(bankSeat);
    }

    burnFirstCard(cardStackPlace, ["-50", "0"], ["-500", "0"]);

    await sleep(2000);

    for (let i = 0; i <= 1; i++) {
        if (i == 1) {
            for (let j in playerSeatArray) {
                for (let z in playerSeatArray[j]) {
                    playerSeatArray[j][z] = parseInt(playerSeatArray[j][z]) + 50;
                    playerSeatArray[j][z].toString();
                }
            }
        }

        for (let j in playerSeatArray) {
            cardDealingAnimation(cardsArray, cardStackPlace, playerSeatArray[j]);
            await sleep(1000);
        }
    }

    await sleep(2000);

    collectCards(["-50", "0"], ["-500", "0"]);
}
