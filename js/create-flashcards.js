let cardDiv = document.getElementById("new-cards");
let divArray = [];

function addNewCard() {
    // update divArray
    createNewEl(divArray.length);
    divArray.push(updateDiv(divArray.length, ));
}

// Helper Functions for Adding Cards
function createNewEl(i) {
    let newDiv = document.createElement("div");
    newDiv.id = "card" + i;

    let termInput = document.createElement("INPUT");
    termInput.id = "term" + i;
    termInput.setAttribute("type", "text");
    termInput.setAttribute("placeholder", "Term " + i)

    let defInput = document.createElement("INPUT");
    defInput.id = "def" + i;
    defInput.setAttribute("type", "text");
    defInput.setAttribute("placeholder", "Definition")

    createNewCard(newDiv, termInput, defInput)
}

function createNewCard(div, term, def) {
    cardDiv.appendChild(div);
    div.appendChild(term);
    div.appendChild(def);
}

function updateDiv(i, term, def) {
    return {
        place: i,
        term: term,
        def: def,
    };
}

function loopToLast() {
    for (let i = 0; i < divArray.length; i++) {
        
    }
}

// function createNewEl(i) {
//     let divBegin = `<div class="card-div" id="card-${i}>`
//     let divEnd = `</div>`
//     let inTerm = `<input type="text" id="term-${i}" placeholder="Term">`
//     let inDef = `<input type="text" id="def-${i}" placeholder="Definition">`
//     divArray.push(createNewCard(divBegin, divEnd, inTerm, inDef));
// }

// function arrayToString() {
//     let arrayString = "";
//     for (let i = 0; i < divArray.length; i++) {
//         arrayString = arrayString + divArray.divStart + divArray.term + divArray.def + divArray.divEnd;
//     }
//     return arrayString;
// }

function createDeck() {

    cardDiv.innerHTML = "";
}

// Helper Functions for Creating New Decks
