let transform = "4";

for (let i = 0; i < 10; i++) {
    let card = document.createElement("div");
    card.classList.add("card");

    let cardFront = document.createElement("div");
    cardFront.classList.add("front");
    let q = "Q";
    // Here we do not need to specify the whole path, because webpack is told to
    // search from the "assets" folder for index.js in the webpack.config.dev.js file.
    // For CSS or SCSS Files we need to specify the whole path, because there is no such
    // starting folder given for these type of files
    cardFront.style.backgroundImage = "url('cards/" + q + "C.png')";

    let cardBack = document.createElement("div");
    cardBack.classList.add("back");

    card.appendChild(cardFront);
    card.appendChild(cardBack);

    document.getElementById("cardsAndBankSeat").appendChild(card);

    let windowWidth = window.matchMedia("(max-width: 1300px)");
    cardStackMoveMediaQuery(windowWidth, card); // Call listener function at run time
    transform = parseInt(transform) + 4;
    transform.toString();
}

let parentDiv = document.getElementById("cardsAndBankSeat");
let children = parentDiv.getElementsByClassName("card");

window.addEventListener("resize", function () {
    // Listener if the window-width changes to make the game responsive
    let windowWidth = window.matchMedia("(max-width: 1300px)");
    transform = "4";

    for (let i = 0; i < 10; i++) {
        if (windowWidth.matches) {
            // If media query matches
            children[i].style.transform = "translate(-50px, -" + transform + "px) rotateZ(45deg) rotateY(30deg)";
        } else {
            children[i].style.transform = "translate(500px, -" + transform + "px) rotateZ(45deg) rotateY(30deg)";
        }

        transform = parseInt(transform) + 4;
        transform.toString();
    }
});

function cardStackMoveMediaQuery(windowWidth, card) {
    if (windowWidth.matches) {
        // If media query matches
        card.style.transform = "translate(-50px, -" + transform + "px) rotateZ(45deg) rotateY(30deg)";
    } else {
        card.style.transform = "translate(500px, -" + transform + "px) rotateZ(45deg) rotateY(30deg)";
    }
}
