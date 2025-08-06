function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const users = JSON.parse(localStorage.getItem("users") || "{}");

  if (users[user] && users[user] === pass) {
    localStorage.setItem("loggedInUser", user);
    window.location.href = "index.html";
  } else {
    alert("Λάθος στοιχεία σύνδεσης.");
  }
}

function register() {
  const newUser = document.getElementById("newUser").value.trim();
  const newPass = document.getElementById("newPass").value.trim();
  const users = JSON.parse(localStorage.getItem("users") || "{}");

  if (users[newUser]) {
    alert("Ο χρήστης υπάρχει ήδη.");
    return;
  }

  users[newUser] = newPass;
  localStorage.setItem("users", JSON.stringify(users));
  alert("Εγγραφή επιτυχής! Μπορείς να συνδεθείς.");
}
