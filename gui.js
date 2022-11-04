// Controls display of HTML

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

// Home
let homeDiv = document.getElementById("home-div");

// Flashcards
let flashcardsDiv = document.getElementById("flashcards-div");

login = false;

// Helper Function
function displayMainDivs(div) {
    if (login === false) {
        div.style.display = "none";
        displaySignUp();
    } else if (login === true) {
        div.style.display = "block";
        signUpDiv.style.display = "none";
        signInDiv.style.display = "none";
    }
}

// Switch between home and flashcards
let homeLink = document.getElementById("home-link");
let flashcardsLink = document.getElementById("flashcards-link");

// Event Listeners
homeLink.addEventListener("click", displayMainDivs(homeDiv));

flashcardsLink.addEventListener("click", displayMainDivs(flashcardsDiv));