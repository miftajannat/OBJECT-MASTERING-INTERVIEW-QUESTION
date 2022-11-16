const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    //eder/object er moddhe kono function thakle take method bole
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount) {
        console.log(this);
        this.salary = this.salary - amount;
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
// one object method apply to another object. there are two ways to do this.

//bind method ektar sathe ekta object er method k bind kore dite hobe.bind ektar sathe r ekta badha ba atkanu
//call method ektar sathe ekta object er method k call kore dite hobe.
//call method is in callApply3.js C for comma(,)
//apply method is in callApply4.js A for array[]


//  normalPerson.chargeBill(2000);
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(3000);
console.log(heroPerson.salary); // Answer: 20000
console.log(normalPerson.salary); // Answer: 15000

const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(1500);
console.log(friendlyPerson.salary); // Answer: 33500