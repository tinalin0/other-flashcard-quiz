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
let login = false;

function checkHomeDisplay() {
    if (login === false) {
        homeDiv.style.display = "none";
    } else if (login === true) {
        homeDiv.style.display = "block";
        signUpDiv.style.display = "none";
        signInDiv.style.display = "none";
    }
}