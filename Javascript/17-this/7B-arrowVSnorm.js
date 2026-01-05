// Use case when to use normal over Arrow

// updated
//here employee 2 cannot confine this of arrow
// because employee2 is object and has no scope

const employee1 = {
    firstname: 'Nishant',
    lastname: 'Nimish ',
    getFullName: function () { return this.firstname + ' ' + this.lastname; }
};

const employee2 = {
    firstname: 'Nishant',
    lastname: 'Nimish ',
    getFullName: () =>  { return this.firstname + ' ' + this.lastname; }
};


console.log(employee1.getFullName())        // Nishant Nimish
console.log(employee2.getFullName())        // undefined undefined