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


//call method ektar sathe ekta object er method k call kore dite hobe directly onno object k call korte parbe nijer kono function create korte hoi na
// normalPerson.chargeBill.call(heroPerson, 900, 100, 10, 50);
// normalPerson.chargeBill.call(heroPerson, 3000, 300, 30, 150);
// console.log(heroPerson.salary); // Answer: 20460

normalPerson.chargeBill.call(friendlyPerson, 900, 100, 10, 50);
console.log(friendlyPerson.salary); // Answer: 34140
console.log(normalPerson.salary); // Answer: 15000