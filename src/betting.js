document.querySelector("#bettingSlider").addEventListener("input", (event) => {
    let value = document.getElementById("bettingSlider").value;
    let tmpValue = value * 100;
    document.getElementById("currBettingAmount").innerHTML = tmpValue.toLocaleString("de-DE") + "€";
    if (value <= 25) {
        tmpValue = value * 200;
        document.getElementById("doubleButton").innerHTML = "Double ~ " + tmpValue.toLocaleString("de-DE") + "€";
    } else {
        document.getElementById("doubleButton").innerHTML = "Double ~ 5.000€";
    }
});

document.querySelector("#minButton").addEventListener("click", (event) => {
    document.getElementById("bettingSlider").value = 1;
    document.getElementById("currBettingAmount").innerHTML = "100€";
    document.getElementById("doubleButton").innerHTML = "Double ~ 200€";
});

document.querySelector("#maxButton").addEventListener("click", (event) => {
    document.getElementById("bettingSlider").value = 50;
    document.getElementById("currBettingAmount").innerHTML = "5.000€";
    document.getElementById("doubleButton").innerHTML = "Double ~ 5.000€";
});

document.querySelector("#doubleButton").addEventListener("click", (event) => {
    let value = document.getElementById("bettingSlider").value;
    if (value <= 25) {
        document.getElementById("bettingSlider").value = value * 2;
        let tmpValue = value * 200;
        document.getElementById("currBettingAmount").innerHTML = tmpValue.toLocaleString("de-DE") + "€";
        if (value * 400 > 5000) {
            document.getElementById("doubleButton").innerHTML = "Double ~ 5.000€";
        } else {
            tmpValue = value * 400;
            document.getElementById("doubleButton").innerHTML = "Double ~ " + tmpValue.toLocaleString("de-DE") + "€";
        }
    } else {
        document.getElementById("bettingSlider").value = 50;
        document.getElementById("currBettingAmount").innerHTML = "5.000€";
        document.getElementById("doubleButton").innerHTML = "Double ~ 5.000€";
    }
});
