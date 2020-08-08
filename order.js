document.querySelector('input[name="oldal"]')

let pageNumber = document.querySelector('input[name="oldal"]')

let pagePrice = 15000;

let rolunkPrice = 14000;

let checkBox = document.getElementById("rolunk-checkbox");

function calcAmount() {
    let pagePrice = 15000;
    let pageNumber = document.querySelector('input[name="oldal"]');
    let amountNumber = parseInt(pageNumber.value);
    if (isNaN(amountNumber)) {
        amountNumber = 0;
    }
    showTotalAmount(pagePrice, amountNumber)
}

function showTotalAmount(pagePrice, amountNumber) {
    if (amountNumber > 12) {
        alert("Maximum 12 oldalt kérhetsz, több esetén kérj egyedi ajánlatot!")
        return;
    } else if (amountNumber < 3) {
        alert("Minimum 3 oldalas legyen a weboldal, Onepage esetén a blokkok számát írd be!")
    }
    let amount = amountNumber * pagePrice;

    if (document.getElementById("rolunk-checkbox").checked == true) {

        amount = amountNumber * pagePrice + rolunkPrice;
    }

    if (amount < 50000) {

        amount += 25000
    }
    let showAmount = document.querySelector("span.show-amount")
    showAmount.innerHTML = amount;
}

var temperatures = [20, 15, 22, 21, 12, 24, 30];
var maxTemperature = [15, 20, 25, 30];
var offers = ["Két oldal egy áráért", "Ajándék logó tervezés", "SEO komplett tanácsadás", "Ajándék galéria modul"];

function weatherWidget() {
    const day = document.querySelector('#day').value;
    const temperatureC = document.querySelector('#temperature');
    const offer = document.querySelector('#offer')
    temperatureC.innerHTML = temperatures[day];
    for (let i = 0; i < maxTemperature.length; i++) {
        if (temperatures[day] <= maxTemperature[i]) {
            offer.innerHTML = offers[i];
            break
        }
    }
}

let sum = 0;
let db = 0;

for (let i = 0; i < temperatures.length; i++) {
    sum += temperatures[i];
    let average = document.querySelector('#average');
}
for (let i = 0; i < temperatures.length; i++) {
    db++;

}
let ave = sum / db

average.innerHTML = ave.toFixed(1);

let min = temperatures[0]
let minimum = document.querySelector('#min');
let max = temperatures[0]
let maximum = document.querySelector('#max');

for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > min); {
        min = temperatures[i];
        continue
    }
}

minimum.innerHTML = min

for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] < max); {
        max = temperatures[i];
        continue
    }
}

maximum.innerHTML = max

let invoiceDiv = document.querySelector('#invoice')

Element.prototype.showInvoice = function() {
        this.style.display = "block";
}

function showInvoiceDiv () {
    invoiceDiv.showInvoice()
}

/*let requiredInput = document.querySelectorAll('#kötelező')*/

/*for (let i = 0; i < requiredInput.length; i++){
    requiredInput[i].style.borderColor = "red"
}*/

let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "*Kötelező";

let parent = document.querySelector("div.form-group:nth-child(1)")
parent.appendChild(helpText);

let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function(event) {
    event.preventDefault();

let inputs = document.querySelectorAll("input")
let values = {};
for (let i = 0; i < inputs.length; i++) {
    values [inputs[i].name] = inputs [i].value;
}

console.log(values);

});

let alertCloseButtons = document.querySelectorAll(".close[data-dismiss='alert']");
let alertCloseFunction = function(event) {
    this.parentElement.style.display = "none"
}
for (let i=0; i < alertCloseButtons.length; i++){
    alertCloseButtons[i].addEventListener("click", alertCloseFunction)
}

switch (new Date().getDay()) {
    case 0:
      day = "Vasárnap";
      break;
    case 1:
      day = "Hétfő";
      break;
    case 2:
       day = "Kedd";
      break;
    case 3:
      day = "Szerda";
      break;
    case 4:
      day = "Csütörtök";
      break;
    case 5:
      day = "Péntek";
      break;
    case 6:
      day = "Szombat";
  }

  /*Optionok hozzáadása a selection formtípushoz*/
  let orderLogo = ["Van", "Nincs", "Tőled rendelem meg!"];

  let orderLogoSelect = document.querySelector("#logo");

  let index = 0;

  while(index < orderLogo.length) {
      let option = document.createElement("option");
      option.value = index;
      option.innerHTML = orderLogo[index];
      orderLogoSelect.appendChild(option);
      index++;
  }