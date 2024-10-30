import { data } from "autoprefixer";
import "./style.css";

let contacts = [];

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
    console.log(contacts);
    localStorage.setItem("contacts", contacts);
  });
}
createContact();

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
  const number = document.createElement("p");
  firstName.innerText = `${contact.firstName}`;
  lastName.innerText = `${contact.lastName}`;
  number.innerText = `${contact.number}`;
  document.getElementById("contact_firstName").appendChild(firstName);
  document.getElementById("contact_lastName").appendChild(lastName);
  document.getElementById("contact_number").appendChild(number);
}

// function search() {
//   let query = document.getElementById("search")
//   let matchingContact = contacts.filter((contact) => {
//     let firstName = contact.firstName.tolowercase();
//     let lastName = contact.lastName.tolowercase();
//     let number = contact.number;
    
//     return (
//       firstName.includes(query) ||
//       lastName.includes(query) ||
//       number.includes(query) ||
//     );
//   });
// }
// search()

function render() {
  localStorage.getItem("contacts", contacts);
  contactsAmounts();
  contacts.forEach(showContact);
}
render();