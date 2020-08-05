document.querySelector('input[name="oldal"]')

let pageNumber = document.querySelector('input[name="oldal"]')

let pagePrice = 15000;

let rolunkPrice = 14000;

let checkBox = document.getElementById("rolunk-checkbox");

function calcAmount() {
    let pagePrice = 15000;
    let pageNumber = document.querySelector('input[name="oldal"]');
    let amountNumber = parseInt(pageNumber.value);
    let amount = amountNumber * pagePrice;
    if (isNaN(amountNumber)) {
        amountNumber = 0;
    }
    if (amountNumber > 12) {
        alert("Maximum 12 oldalt kérhetsz, több esetén kérj egyedi ajánlatot!")
        return;
    } else if (amountNumber < 3) {
        alert("Minimum 3 oldalas legyen a weboldal, Onepage esetén a blokkok számát írd be!")
    }
    if (document.getElementById("rolunk-checkbox").checked == true) {

    amount = amountNumber * pagePrice + rolunkPrice;
    }

    let showAmount = document.querySelector("span.show-amount")

    showAmount.innerHTML = amount;
}