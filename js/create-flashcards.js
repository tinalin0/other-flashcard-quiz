let cardDiv = document.getElementById("new-cards");
let divArray = [];

function addNewCard() {
    createNewEl(divArray.length);
    cardDiv.innerHTML = arrayToString(divArray);
}

// // Helper Functions for Adding Cards
// function createNewEl(i) {
//     let newDiv = document.createElement("div");
//     newDiv.id = "card" + i;
//     cardDiv.appendChild(newDiv);

//     let termInput = document.createElement("INPUT");
//     termInput.id = "term" + i;
//     termInput.setAttribute("type", "text");

//     let defInput = document.createElement("INPUT");
//     defInput.id = "def" + i;
//     defInput.setAttribute("type", "text");

//     divArray.push(newDiv);
// }

function createNewEl(i) {
    let divBegin = `<div class="card-div" id="card-${i}>`
    let divEnd = `</div>`
    let inTerm = `<input type="text" id="term-${i}" placeholder="Term">`
    let inDef = `<input type="text" id="def-${i}" placeholder="Definition">`
    divArray.push(createNewCard(divBegin, divEnd, inTerm, inDef));
}

function createNewCard(divStart, divEnd, term, def) {
    return {
        div: divStart + divEnd,
        divStart: divStart,
        divEnd: divEnd,
        term: term,
        def: def,
    };
}

function arrayToString() {
    let arrayString = "";
    for (let i = 0; i < divArray.length; i++) {
        arrayString = arrayString + divArray.divStart + divArray.term + divArray.def + divArray.divEnd;
    }
    return arrayString;
}

function createDeck() {

    cardDiv.innerHTML = "";
}

// Helper Functions for Creating New Decks
