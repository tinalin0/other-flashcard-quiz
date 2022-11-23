let cardDiv = document.getElementById("new-cards");
let divArray = [];

function addNewCard() {
    createNewDiv(divArray.length);
    cardDiv.innerHTML = divArray;
}

// Helper Functions for Adding Cards
function createNewDiv(i) {
    let newDiv = document.createElement("div");
    newDiv.id = "card" + i;
    cardDiv.appendChild(newDiv);

    let termInput = document.createElement("INPUT");
    termInput.id = "term" + i;
    termInput.setAttribute("type", "text");

    let defInput = document.createElement("INPUT");
    defInput.id = "def" + i;
    defInput.setAttribute("type", "text");

    divArray.push(newDiv);
}

function createDeck() {

    cardDiv.innerHTML = "";
}

// Helper Functions for Creating New Decks
