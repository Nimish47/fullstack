// this in Event Listeners (only possible in browsers):
//     normal: 'this' refers to DOM node on which event was fired
//     arrow:  *whatever is outer scope of function that calls 'this'

// cant be verified in node

document.getElementById('testBtn').addEventListener('click', function() {
    console.log('this in a event', this);
})