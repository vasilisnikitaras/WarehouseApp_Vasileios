// Έλεγχος σύνδεσης
if (!localStorage.getItem("loggedInUser")) {
  window.location.href = "login.html";
}

// Μετά συνεχίζει ο υπόλοιπος κώδικας:

const translations = {
  el: {
    title: "Αποθήκη Vasileios",
    addBtn: "Προσθήκη",
    themeBtn: "Σκοτεινή λειτουργία",
    clearBtn: "Καθαρισμός",
    placeholderName: "Όνομα αντικειμένου",
    placeholderQty: "Ποσότητα",
  },
  en: {
    title: "Vasileios Warehouse",
    addBtn: "Add",
    themeBtn: "Dark Mode",
    clearBtn: "Clear",
    placeholderName: "Item name",
    placeholderQty: "Quantity",
  },
  fr: {
    title: "Entrepôt Vasileios",
    addBtn: "Ajouter",
    themeBtn: "Mode sombre",
    clearBtn: "Effacer",
    placeholderName: "Nom de l'article",
    placeholderQty: "Quantité",
  }
};

const itemNameInput = document.getElementById("itemName");
const itemQtyInput = document.getElementById("itemQty");
const itemsList = document.getElementById("itemsList");
const langSelect = document.getElementById("lang");

function addItem() {
  const name = itemNameInput.value.trim();
  const qty = itemQtyInput.value.trim();
  if (!name || !qty) return;

  const div = document.createElement("div");
  div.className = "item";
  div.innerHTML = `<span>${name}</span><span>${qty}</span>`;
  itemsList.appendChild(div);

  itemNameInput.value = "";
  itemQtyInput.value = "";
}

function clearItems() {
  itemsList.innerHTML = "";
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  const themeBtn = document.getElementById("themeBtn");
  themeBtn.textContent = translations[langSelect.value].themeBtn;
}

function updateLanguage() {
  const lang = langSelect.value;
  document.getElementById("title").textContent = translations[lang].title;
  document.getElementById("addBtn").textContent = translations[lang].addBtn;
  document.getElementById("themeBtn").textContent = translations[lang].themeBtn;
  document.getElementById("clearBtn").textContent = translations[lang].clearBtn;
  itemNameInput.placeholder = translations[lang].placeholderName;
  itemQtyInput.placeholder = translations[lang].placeholderQty;
}

langSelect.addEventListener("change", updateLanguage);
updateLanguage();



const user = localStorage.getItem("loggedInUser");
document.getElementById("welcomeUser").textContent = `Καλωσήρθες, ${user}`;



function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}
