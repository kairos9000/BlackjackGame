import "./style";
import "./prerequisites.js";
import { initCardsArray, shuffle, randomInteger } from "./cardsStackPreparation.js";
import { shuffleAnimation, cardDealingAnimation, sleep } from "./animations.js";

let cardsArray = initCardsArray();
shuffle(cardsArray);
let randomMixIndex = randomInteger(250, 300);
cardsArray.splice(randomMixIndex, 0, "Mix");

document.querySelector("#startGameButton").addEventListener("click", (event) => dealCards());

async function dealCards() {
    let windowWidth = window.matchMedia("(max-width: 1300px)");

    if (windowWidth.matches) {
        var cardStackPlace = "-50";
        var firstPlayerSeat = ["0", "5"];
    } else {
        var cardStackPlace = "500";
        var firstPlayerSeat = ["370", "354"];
        var secondPlayerSeat = ["-40", "414"];
        var thirdPlayerSeat = ["-450", "354"];
        var bankSeat = ["-40", "0"];
        var playerSeatArray = [];
        playerSeatArray.push(firstPlayerSeat);
        playerSeatArray.push(secondPlayerSeat);
        playerSeatArray.push(thirdPlayerSeat);
        playerSeatArray.push(bankSeat);
    }

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
}
