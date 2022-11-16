const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    //eder/object er moddhe kono function thakle take method bole
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount, tips, tax, phoneBill) {
        console.log(this);
        this.salary = this.salary - amount - tips - tax - phoneBill;;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000
}

const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Golam',
    salary: 35000
}

//directly use in apply method
normalPerson.chargeBill.apply(heroPerson, [3000, 100, 100, 100]);
normalPerson.chargeBill.apply(heroPerson, [900, 100, 10, 50]);

console.log(heroPerson.salary); // Answer: 20640  