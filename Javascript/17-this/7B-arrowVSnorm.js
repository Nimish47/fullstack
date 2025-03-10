// Use case when to use normal over Arrow


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