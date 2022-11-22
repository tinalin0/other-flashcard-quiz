let cardDiv = document.getElementById("new-cards");

function addNewCard() {
    let divArray = [];
    createNewDiv(divArray.length);
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
}

function createDeck() {

}

// Helper Functions for Creating New Decks