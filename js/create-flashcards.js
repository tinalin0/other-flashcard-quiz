let cardDiv = document.getElementById("new-cards");

function addNewCard() {
    let divArray = [];
    createNewDiv(divArray.length);
}

// Helper Functions for Adding Cards
function createNewDiv(i) {
    let newDiv = document.createElement("div");
    cardDiv.appendChild(newDiv);
}

function createDeck() {

}

// Helper Functions for Creating New Decks