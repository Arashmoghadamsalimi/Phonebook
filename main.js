import { data } from "autoprefixer";
import "./style.css";

let contacts = [];
contacts = await fetch("https://671cf16209103098807bb538.mockapi.io/Users");
console.log(contacts.length);

let contactsAmounts = () => {
  if (contacts.length == 0) {
    document.getElementById("contacts_amount").textContent = "No Contacts";
  } else {
    document.getElementById("amount").textContent = contacts.length;
  }
};

contacts.forEach(showContact);
function showContact() {
  const firstName = document.createElement("p");
  const lastName = document.createElement("p");
  firstName.innerText = "${contacts.FirsName}";
  lastName.innerText = "${contacts.LastName}";
  document.getElementById("contact_firstName").appendChild(firstName);
  document.getElementById("contact_lastName").appendChild(lastName);
}
contacts.forEach(showNumber);
function showNumber() {
  const number = document.createElement("p");
  firstName.innerText = "${contacts.Number}";
  document.getElementById("contact_number").appendChild(number);
}

async function render() {
  if (contacts.ok) {
    let json = await contacts.json();
    console.log(json);
  } else {
    alert("HTTP-Error: " + contacts.status);
  }
  contactsAmounts();
  showContact();
  showNumber();
}
render();
