// object name = normalPerson
// object property = firstName
// object property = lastName
// object property = salary
// method name = getFullName
// method name = chargeBill


const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    //eder/object er moddhe kono function thakle take method bole
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount) {
        this.salary = this.salary - amount;
        return this.salary;
    }
}
// console.log(normalPerson)----- Answer
// {
//     firstName: 'Rahim',
//     lastName: 'Uddin',
//     getFullName: [Function: getFullName]
//   }
console.log(normalPerson.firstName); // Answer: Rahim

normalPerson.chargeBill(150);
normalPerson.chargeBill(3000);
console.log(normalPerson.salary); // Answer: 11850