// Code flow
/**
 * Very similar to 4-asynchronousTimeout with below differences
 * orderPizza is an asynchronous type function
 * homework function is called two times sequencially and each call takes good amount of time
 * after 1st execution of homework, cb will be there in event queue ready to execute
 * however call stack is not empty!
 * Now comes the most important thing!
 *      After first time execution of homework, there are two scenarios:
 *          1. homework executes again (2nd call)
 *          2. cb pushed to render ques and to call stack as stack empty
 *      Now which ever above is fast will move to call stack and by executing below code,
 *      we can see:
 *              homework and even last console PUSHED RETURN POPPED first
 *              finally when call stack empty, cb PUSHED RETURN POPPED  
 * 
 * MORAL: PUSH from callback queue stack takes much longer or has less preference TO code appearing in sequence
 */


const start = () => {
    console.log('Good Morning! New Maid here')
}

const cleaning = () => {
    console.log('Cleaning Utensils')
}

const deliverPizza = () => {
    setTimeout(function cb() {
        console.log('Receive Pizza')
    }, 1000);
}

const orderPizza = () => {
    console.log('Ordered Pizza')
    deliverPizza()
}

const homework = () => {
    console.log('Homework started')
    let i = 0;
    while (i < 10000000000) {
        i++
    }
    console.log('Homework finished')
}

const maidDuties = () => {
    start()
    cleaning()
    orderPizza()
    homework()
    homework()
    console.log('Going home! Bye Bye')
}

maidDuties()
// Good Morning! New Maid here
// Cleaning Utensils
// Ordered Pizza
// Homework started
// Homework finished
// Homework started
// Homework finished
// Going home! Bye Bye
// Receive Pizza
