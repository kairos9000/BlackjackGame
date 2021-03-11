import "./style";
import "./prerequisites.js";
import { initCardsArray, shuffle, randomInteger } from "./cardsStackPreparation.js";
import { shuffleAnimation, cardDealingAnimation, sleep, collectCards, burnFirstCard } from "./animations.js";
import "./betting.js";

let cardsArray = initCardsArray();
shuffle(cardsArray);
let randomMixIndex = randomInteger(250, 300);
cardsArray.splice(randomMixIndex, 0, "Mix");

// document.querySelector("#startGameButton").addEventListener("click", (event) => dealCards());
dealCards();

async function dealCards() {
    let windowWidth = window.matchMedia("(max-width: 1300px)");

    if (windowWidth.matches) {
        shuffleAnimation("-500px", "-100px", "-300px", "-50px");
    } else {
        shuffleAnimation("-220px", "220px", "-40px", "500px");
    }

    await sleep(4000);

    if (windowWidth.matches) {
        var cardStackPlace = "-50";
        var firstPlayerSeat = ["0", "5"];
    } else {
        var cardStackPlace = "500";
        var firstPlayerSeat = ["370", "290"];
        var secondPlayerSeat = ["-40", "350"];
        var thirdPlayerSeat = ["-450", "290"];
        var bankSeat = ["-40", "0"];
        var playerSeatArray = [];
        playerSeatArray.push(firstPlayerSeat);
        playerSeatArray.push(secondPlayerSeat);
        playerSeatArray.push(thirdPlayerSeat);
        playerSeatArray.push(bankSeat);
    }

    let playerCardValues = ["player1CardValue", "player2CardValue", "player3CardValue", "bankCardValue"];

    burnFirstCard(cardStackPlace, ["-40", "0"], ["-500", "0"]);

    await sleep(2000);

    for (let i = 0; i <= 1; i++) {
        if (i == 1) {
            for (let j in playerSeatArray) {
                for (let z in playerSeatArray[j]) {
                    playerSeatArray[j][z] = parseInt(playerSeatArray[j][z]) + 25;
                    playerSeatArray[j][z].toString();
                }
            }
        }

        for (let j in playerSeatArray) {
            let cardValue = await cardDealingAnimation(cardsArray, cardStackPlace, playerSeatArray[j]);
            let playerValue = document.getElementById(playerCardValues[j]);
            let currPlayerValue = parseInt(playerValue.innerHTML);

            if (cardValue.startsWith("Q") || cardValue.startsWith("K") || cardValue.startsWith("J") || cardValue.startsWith("10")) {
                cardValue = 10;
            } else if (cardValue.startsWith("A")) {
                if (currPlayerValue + 11 > 21) {
                    cardValue = 1;
                } else {
                    cardValue = 11;
                }
            } else {
                cardValue = parseInt(cardValue[0]);
            }
            playerValue.innerHTML = currPlayerValue + cardValue;
            playerValue.style.transform = "rotateZ(-135deg) translateY(-5px) translateX(7px)";
            await sleep(1000);
        }
    }

    await sleep(2000);

    collectCards(["-40", "0"], ["-500", "0"]);
    for (let j in playerCardValues) {
        document.getElementById(playerCardValues[j]).innerHTML = 0;
    }
}
