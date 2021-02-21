import "./style";
import { ListOutput } from "./component/ListOutput";

let transform = "4";
document.querySelector("#startGameButton").addEventListener("click", (event) => {
    for (let i = 0; i < 10; i++) {
        let card = document.createElement("div");
        card.classList.add("card");

        let cardFront = document.createElement("div");
        cardFront.classList.add("front");
        let q = "Q";
        cardFront.style.backgroundImage = "url('/cards/" + q + "C.png')";

        let cardBack = document.createElement("div");
        cardBack.classList.add("back");

        card.appendChild(cardFront);
        card.appendChild(cardBack);

        transform = parseInt(transform) + 4;
        transform.toString();
        card.style.transform = "translate(500px, -" + transform + "px) rotateZ(35deg)";

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
