// Global Variables
let login = false;

// Global Arrays
let users = loadUsers();

// Sign in and Sign up Variables

// Div
let signInDiv = document.getElementById("login-div");
let signUpDiv = document.getElementById("sign-up-div");

// Links to switch
let signInLink = document.getElementById("sign-in-link");
let signUpLink = document.getElementById("sign-up-link");

// Buttons
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');

// Home Variables

// Div
let homeDiv = document.getElementById("home-div");

// Btns = Array
let homeBtn = document.getElementsByClassName("home-btn");

// Flashcard Variables

// Div
let flashcardsDiv = document.getElementById("flashcards-div");

// Btns - Array
let flashcardsBtn = document.getElementsByClassName("flashcards-btn");

// Event Listeners

// SIGN UP BTN CLICKED
signUpBtn.addEventListener("click", signUpHandler);

// SIGN IN BTN CLICKED
signInBtn.addEventListener("click", signInHandler);

// Switch Logins
signUpLink.addEventListener("click", displaySignUp);

signInLink.addEventListener("click", displaySignIn);

// Switch Flashcard and Home
for (let i = 0; i < homeBtn.length; i++) {
    homeBtn[i].addEventListener("click", displayHomeDiv);
}

for (let i = 0; i < flashcardsBtn.length; i++) {
    flashcardsBtn[i].addEventListener("click", displayFlashDiv);
}