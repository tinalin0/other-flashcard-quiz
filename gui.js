// Controls display of HTML
let login = false;

// HTML Variables
let signInDiv = document.getElementById("login-div");
let signUpDiv = document.getElementById("sign-up-div");
let signInLink = document.getElementById("sign-in-link");
let signUpLink = document.getElementById("sign-up-link");

// Event Listener
signUpLink.addEventListener("click", displaySignUp);

function displaySignUp() {
    signUpDiv.style.display = "block";
    signInDiv.style.display = "none";
}

signInLink.addEventListener("click", displaySignIn);

function displaySignIn() {
    signUpDiv.style.display = "none";
    signInDiv.style.display = "block";
}

// Switch between home and flashcards
let homeLink = document.getElementById("home-link");
let flashcardsLink = document.getElementById("flashcards-link");

// Home
let homeDiv = document.getElementById("home-div");
// Event Listener
homeLink.addEventListener("click", displayMainDivs(homeDiv));

// Flashcards
let flashcardsDiv = document.getElementById("flashcards-div");
// Event Listener
flashcardsLink.addEventListener("click", displayMainDivs(flashcardsDiv));


// Helper Function
function displayMainDivs(div) {
    if (login === false) {
        div.style.display = "none";
        displaySignUp();
    } else {
        div.style.display = "block";
        signUpDiv.style.display = "none";
        signInDiv.style.display = "none";
    }
}