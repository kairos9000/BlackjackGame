let currCardIndex = 0;
let cardEndStack = 0.13;

export async function shuffleAnimation(rightStack, leftStack, mixingStack, originalStackPlace) {
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
        children[i].style.transform = "translate(" + mixingStack + ", 0px)";
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

export async function burnFirstCard(cardStackPlace, middlePosition, endStackPosition) {
    let card = document.createElement("div");
    card.classList.add("card");

    let cardFront = document.createElement("div");
    cardFront.classList.add("front");
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

    card.style.transform = "translate(" + middlePosition[0] + "px, " + middlePosition[1] + "px)";

    await sleep(1000);

    card.style.transform = "translate(" + endStackPosition[0] + "px, " + endStackPosition[1] + "px) rotateZ(-45deg) rotateY(-30deg)";
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

export async function collectCards(collectingPosition, endStackPosition) {
    let parentDiv = document.getElementById("cardsAndBankSeat");
    let children = parentDiv.getElementsByClassName("card");

    for (let i = currCardIndex + 2; i < children.length; i++) {
        children[i].style.transform = "translate(" + collectingPosition[0] + "px, " + collectingPosition[1] + "px)";
    }

    await sleep(1000);

    for (let i = currCardIndex + 2; i < children.length; i++) {
        endStackPosition[1] = parseFloat(endStackPosition[1]) - cardEndStack;
        endStackPosition[1].toString();

        children[i].style.transform = "translate(" + endStackPosition[0] + "px, " + endStackPosition[1] + "px) rotateZ(-45deg) rotateY(30deg)";
    }
}

export function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
