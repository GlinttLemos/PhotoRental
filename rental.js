

const PhotoRental = {
        name: "PhotoRental"

}

class Equipment {

        constructor(name, category, dailyPrice, eqvalue) {
                this.name = name;
                this.category = category;
                this.dailyPrice = dailyPrice;
                this.eqvalue = eqvalue;
        }
}

class Customer {
        constructor(name, address, email) {
                this.name = name;
                this.address = address;
                this.email = email;
        }
}

class Rental {

        constructor(customer, initialDate, numDays, endDate, equipment) {
                this.customer = customer;
                this.initialDate = initialDate;
                this.numDays = numDays;
                this.endDate = endDate;
                this.equipment = equipment;

        }


        get totalcost() {
                return (`${this.numDays}` * `${this.equipment.dailyPrice}`) + "€"

        }



}

//add categories

const Cat = {
        C: "Cameras",
        L: "Lenses",
        A: "Accessories",
        S: "Storage"
}

//add equipments

const e1 = new Equipment("Canon 5D", Cat.C, 300, 5000);
const e2 = new Equipment("Canon 1D", Cat.C, 500, 8000);
const e3 = new Equipment("Sony 7", Cat.C, 300, 5000);
const e4 = new Equipment("Nikon D6", Cat.C, 250, 4000);
const e5 = new Equipment("Canon 70-200", Cat.L, 300, 5000);
const e6 = new Equipment("Tripod", Cat.A, 300, 5000);
const e7 = new Equipment("2TB SSD", Cat.S, 300, 5000);

//add customers

const jose = new Customer("José", "Rua das flores", "jose.santos@site.pt");
const maria = new Customer("Maria", "Rua das pedras", "maria.ferreira@site.pt");
const joana = new Customer("Joana", "Rua das aves", "joana.alves@site.pt");

//add rentals

const r1 = new Rental(jose, "10-10-2021", 3, "10-13-2021", e1, Rental.totalcost);
const r2 = new Rental(maria, "11-10-2021", 5, "11-15-2021", e4, Rental.totalcost);
const r3 = new Rental(joana, "12-10-2021", 10, "10-20-2021", e6, Rental.totalcost);

//collections

const equipments = [] //array equipments
const customers = new Map();
const rentals = new Set();

equipments.push(e1);
equipments.push(e2);
equipments.push(e3);
equipments.push(e4);
equipments.push(e5);
equipments.push(e6);
equipments.push(e7);

customers.set(jose.email, jose);
customers.set(maria.email, maria);
customers.set(joana.email, joana);

rentals.add(r1);
rentals.add(r2);
rentals.add(r3);

//objet tree

Object.defineProperties(PhotoRental, {
        equipments: { value: equipments, writable: false },
        customers: { values: customers, writable: false },
        rentals: { values: rentals, writable: false }

});