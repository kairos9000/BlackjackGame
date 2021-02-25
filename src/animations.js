let currCardIndex = 0;

export async function shuffleAnimation(cardsArray, rightStack, leftStack, mixingStack, originalStackPlace) {
    let parentDiv = document.getElementById("cardsAndBankSeat");
    let children = parentDiv.getElementsByClassName("card");

    for (let i = 0; i < 10; i += 2) {
        children[i].style.transform = "translate(" + rightStack + ", 5px)";
        await sleep(20);
    }
    await sleep(200);
    for (let j = 1; j < 10; j += 2) {
        children[j].style.transform = "translate(" + leftStack + ", 5px)";
        await sleep(20);
    }

    await sleep(1000);

    for (let i = 0; i < 10; i++) {
        children[i].style.transform = "translate(" + mixingStack + ", 5px)";
        await sleep(20);
    }

    await sleep(500);

    let transform = "4";
    for (let i = 0; i < 10; i++) {
        children[i].style.transform = "translate(" + originalStackPlace + ", -" + transform + "px) rotateZ(45deg) rotateY(30deg)";
        transform = parseInt(transform) + 4;
        transform.toString();
    }
}

export async function cardDealingAnimation(cardStack, cardStackPlace, playerSeat) {
    let card = document.createElement("div");
    card.classList.add("card");

    let cardFront = document.createElement("div");
    cardFront.classList.add("front");
    let cardFrontPicture = cardStack[currCardIndex];
    cardFront.style.backgroundImage = "url('cards/" + cardFrontPicture + ".png')";
    currCardIndex += 1;

    let cardBack = document.createElement("div");
    cardBack.classList.add("back");

    card.appendChild(cardFront);
    card.appendChild(cardBack);

    card.style.zIndex = "-5";

    document.getElementById("cardsAndBankSeat").appendChild(card);

    card.style.transform = "translate(" + cardStackPlace + "px, -4px) rotateZ(45deg) rotateY(30deg)";

    await sleep(200);

    card.style.zIndex = "1";
    card.style.transform = "translate(" + playerSeat[0] + "px, " + playerSeat[1] + "px)";

    await sleep(500);

    card.style.transform = "translate(" + playerSeat[0] + "px, " + playerSeat[1] + "px) rotateY(180deg)";
}

export function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
