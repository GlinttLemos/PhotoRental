
import { PhotoRental, Customer } from "./rental.js";

const rentals = document.getElementById("gui_rentals"); // Uma <table> no HTML

let tr;
let td;

for (const rentals of PhotoRental.rentals.values()) {
        tr = document.createElement("tr");
        gui_rentals.appendChild(tr);
        for (const field of Object.values(rentals)) {
                td = document.createElement("td");
                td.textContent = field instanceof Date ? `${field.toLocaleString()}` : `${field}`;
                td.textContent = field instanceof Object ? `${field.toLocaleString()}` : `${field}`;
                tr.appendChild(td);
        }
}

// Form




let form = document.getElementById("guiCustomer");
form.addEventListener("submit", createCustomer); // Aquando de registo de "listeners" (também chamados "handlers" ou "delegates"), é preciso nomear o evento e fornecer o nome da função a invocar

function createCustomer(submission) {
        const form = submission.target;
        submission.preventDefault();
        const customer = new Customer(form.name.value, form.address.value, form.email.value);

        PhotoRental.customers.set(customer.email, customer);


}


