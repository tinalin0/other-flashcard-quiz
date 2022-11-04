// User Signup and Login
let login = false;
document.addEventListener("load", displayMainDivs(homeDiv));
document.addEventListener("load", displayMainDivs(flashcardsDiv));

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');

// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

// Array
let users = loadUsers();

function signUpHandler() {
  let userName = document.getElementById("username").value;
  let passWord = document.getElementById("password").value;
  let confirmPassword = document.getElementById("conf-password").value;
  if (confirmPassword === passWord) {
    let index = findByUsername(userName);
    if (index >= 0) {
     alert("Username already in use");
    } else {
      users.push(newUser(userName, passWord));
      alert("Sign up completed");
      login = true;
      displayMainDivs(homeDiv);
    }
  }
  saveUsers();
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
  let userIn = document.getElementById("userIn").value;
  let passIn = document.getElementById("passIn").value;

  let index = findByUsername(userIn);
  if (index >= 0) {
    let ans = checkPass(index, passIn);
    if (ans >= 0) {
      alert("Login Successful");
      login = true;
      displayMainDivs(homeDiv);
    } else {
      alert ("Login Unsuccesful");
    }
  } else {
    alert("Login Unsuccesful");
  }
}

// HELPER FUNCTIONS
function newUser(userName, passWord) {
  return {
    username: userName,
    password: passWord,
  };
}

function findByUsername(userName){
  for (let i = 0; i < users.length; i++) {
    if (userName === users[i].username){
      return i;
    }
  }
  return -1;
}

function checkPass(i, pass){
  if (pass === users[i].password){
    return i;
  }
  return -1;
}

// Save User and Load User
function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}

function loadUsers() {
  let usersStr = localStorage.getItem("users");
  return JSON.parse(usersStr) ?? [];
}