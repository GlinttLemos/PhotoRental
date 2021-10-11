class equipment {
        #eqvalue;
        constructor(item, dailyPrice, eqvalue) {
                this.item = item;
                this.dailyPrice = dailyPrice;
                this.#eqvalue = eqvalue;
        }
}

class customer {
        constructor(name, address, email) {
                this.name = name;
                this.address = address;
                this.email = email;
        }
}

class rental {
        constructor(customer, initialDate, endDate, equipment) {
                this.customer = customer;
                this.initialDate = new date(initialDate);
                this.endDate = new date(endDate);
                this.equipment;
        }

}

