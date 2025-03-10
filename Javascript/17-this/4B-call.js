// better implementation of call method
// for code flow explanation check bindedB

const employee1 = {
    firstname: 'Nishant',
    lastname: 'Nimish '
};

const employee2 = {
    firstname: 'Arjun',
    lastname: 'Yeragasi ',
};

var reusableFunc = function (country,state) {
    return `${this.firstname} ${this.lastname}-${country}@${state}`
};

const val1 = reusableFunc.call(employee1,'IN','JH');
const val2 = reusableFunc.call(employee2,'IN','BR');

console.log(val1);
// Nishant Nimish -IN@JH

console.log(val2);
// Arjun Yeragasi -IN@BR 