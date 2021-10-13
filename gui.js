
import { PhotoRental, Customer } from "./rental.js";

const rentals = document.getElementById("gui_rentals"); // Uma <table> no HTML

let tr;
let td;

for (const rentals of PhotoRental.rentals.values()) {
        tr = document.createElement("tr");
        gui_rentals.appendChild(tr);
        for (const field of Object.values(rentals)) {
                td = document.createElement("td");
                td.textContent = field instanceof Date ? `${field.toLocaleString()}` :
                        td.textContent = field instanceof Object ? `${field.name}` : `${field}`;
                tr.appendChild(td);
        }
}

// Form




let form = document.getElementById("guiCustomer");
form.addEventListener("submit", createCustomer);

function createCustomer(submission) {
        const form = submission.target;
        submission.preventDefault();
        const customer = new Customer(form.name.value, form.address.value, form.email.value);

        PhotoRental.customers.set(customer.email, customer);

        alert("Cliente " + form.name.value + " adicionado com sucesso");
}


