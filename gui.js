function displaySignUp() {
    signUpDiv.style.display = "block";
    signInDiv.style.display = "none";
}

function displaySignIn() {
    signUpDiv.style.display = "none";
    signInDiv.style.display = "block";
}

// // Helper Function
// function displayMainDivs(div) {
//     if (login === false) {
//         div.style.display = "none";
//         displaySignUp();
//     } else {
//         div.style.display = "block";
//         signUpDiv.style.display = "none";
//         signInDiv.style.display = "none";
//     }
// }