import { data } from "autoprefixer";
import "./style.css";

let contacts = [];
async function render() {

  try {
    const response = await fetch(
      "https://671cf16209103098807bb538.mockapi.io/Users"
    );
    contacts = await response.json();
    contactsAmounts();
    contacts.forEach(showContact);
    contacts.forEach(showNumber);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  console.log(contacts)
}
render();

let contactsAmounts = () => {
  if (contacts.length == 0) {
    document.getElementById("contacts_amount").textContent = "No Contacts";
  } else {
    document.getElementById("amount").textContent = contacts.length;
  }
};

function showContact(contact) {
  const firstName = document.createElement("p");
  const lastName = document.createElement("p");
  firstName.innerText = `${contact.FirsName}`;
  lastName.innerText = `${contact.LastName}`;
  document.getElementById("contact_firstName").appendChild(firstName);
  document.getElementById("contact_lastName").appendChild(lastName);
}

function showNumber(contact) {
  const number = document.createElement("p");
  number.innerText = `${contact.Number}`;
  document.getElementById("contact_number").appendChild(number);
}


// save in local storage

console.log(contacts)
function createContact() {
  let addContact = document.getElementById("createContact");
  addContact.addEventListener("click", (e) => {
    let firstName = prompt("Enter first name");
    let lastName = prompt("Enter last name");
    let number = prompt("Enter number");
    localStorage.setItem(firstName+lastName, number);
  console.log(addContact);
  });
}
createContact();
