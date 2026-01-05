// best example to understand benefit of arrow over normal fn

// normal fns
// callback fn is normal fn (value decided at time of call) 
// and gets independently invoked
// hence points to globalobject
const user1 = {
  name: "Nishant",
  greet() {
    setTimeout(function() {
      console.log(this.name);
    }, 1000);
  },
};

user1.greet(); // undefined

// arrow fns
// value decided at time of creation
// copies "this" of greet() fn - which points to "user2"
const user2 = {
  name: "Nishant",
  greet() {
    setTimeout(() => {
      console.log(this.name);   // locks to greet()'s this at definition time
    }, 1000);
  },
};

user2.greet();  //Nishant