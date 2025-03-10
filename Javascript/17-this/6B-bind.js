// another implementation of bind method

// flow:
// employee1 and reusableFunc are all defined
// this inside - getFullName(employee1) and reusableFunc all point to global object
// we bind this of reusableFunc to employee1 object
// it now looks somnething like this:
    // const reusableFunc = function () {
    //     console.log(employee1.getFullName());
    // };
    // notice how this replaced by employee1
// binded function fired    

// notice how reusableFunc is truly 'reusable' as any object can be binded to it and used.


const employee1 = {
    firstname: 'Nishant',
    lastname: 'Nimish ',
    getFullName: function () { return this.firstname + ' ' + this.lastname; }
};

const employee2 = {
    firstname: 'Arjun',
    lastname: 'Yeragasi ',
    getFullName: function () { return this.firstname + ' ' + this.lastname; }
};

const reusableFunc = function () {
    console.log(this.getFullName());
};

const bindFn1 = reusableFunc.bind(employee1);
const bindFn2 = reusableFunc.bind(employee2);

bindFn1();
// Nishant Nimish 

bindFn2();
// Arjun Yeragasi 