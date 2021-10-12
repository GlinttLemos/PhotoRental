
import { PhotoRental } from "./rental.js";

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