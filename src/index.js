import "./style";
import { ListOutput } from "./component/ListOutput";

document.querySelector("#startGameButton").addEventListener("click", (event) => {
    for (let i = 0; i < 10; i++) {
        let card = document.createElement("div");
        card.classList.add("card");

        let cardFront = document.createElement("div");
        cardFront.classList.add("front");
        cardFront.style.backgroundImage = "url('/assets/cards/KC.png')";

        let cardBack = document.createElement("div");
        cardBack.classList.add("back");

        card.appendChild(cardFront);
        card.appendChild(cardBack);

        document.getElementById("cardsAndBankSeat").appendChild(card);
    }
});
// const listOutput = new ListOutput();

// const elementInputName = document.getElementById("input-name");
// const elementButtonAdd = document.getElementById("button-add");

// elementButtonAdd.addEventListener("click", () => {
//     const value = elementInputName.value.trim();

//     if (value.length > 0) {
//         listOutput.add(value);
//     }

//     elementInputName.value = "";
// });
