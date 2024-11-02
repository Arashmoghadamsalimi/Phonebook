import { data } from "autoprefixer";
import "./style.css";

let contacts = [];
let contactsFromStorage = localStorage.getItem("contacts");

function createContact() {
  let addContact = document.getElementById("createContact");
  addContact.addEventListener("click", (e) => {
    let firstName = prompt("Enter first name");
    let lastName = prompt("Enter last name");
    let number = +prompt("Enter number");
    let contact = {
      firstName,
      lastName,
      number,
    };
    contacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contacts));
  });
}
createContact();

let contactsAmounts = () => {
  contactsFromStorage
  if (contactsFromStorage.length == 0) {
    document.getElementById("contacts_amount").textContent = "No Contacts";
  } else {
    document.getElementById("amount").textContent = contactsFromStorage.length;
  }
};

function showContact(contact) {
  const firstName = document.createElement("p");
  const lastName = document.createElement("p");
  const number = document.createElement("p");
  firstName.innerText = `${contact.firstName}`;
  lastName.innerText = `${contact.lastName}`;
  number.innerText = `${contact.number}`;
  document.getElementById("contact_firstName").appendChild(firstName);
  document.getElementById("contact_lastName").appendChild(lastName);
  document.getElementById("contact_number").appendChild(number);
}

function search() {
  let query = document.getElementById("search");
  let matchingContact = contactsFromStorage.filter((contact) => {
    let firstName = contactsFromStorage.firstName.tolowercase();
    let lastName = contactsFromStorage.lastName.tolowercase();
    let number = contactsFromStorage.number;

    return (
      firstName.includes(query) ||
      lastName.includes(query) ||
      number.includes(query)
    );
  });
  matchingContact()
}
search();

function render() {

  contactsAmounts();
  contactsFromStorage.forEach(showContact);
  console.log(contactsFromStorage);
}
render();
console.log(contactsFromStorage.length);