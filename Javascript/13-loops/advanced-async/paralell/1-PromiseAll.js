// Paralell execution using Promise.all

const see = () => new Promise((resolve) => setTimeout(() => resolve('SEE TV'), 1000));
const eat = () => new Promise((resolve) => setTimeout(() => resolve('EAT FOOD'), 1000));
const listen = () => new Promise((resolve) => setTimeout(() => resolve('LISTEN LECTURE'), 2000));

const promiseArr = [see(),eat(),listen()]

const shaktiman = async () => {
    const response = await Promise.all(promiseArr)
    console.log(response)
}

shaktiman()

// [ 'SEE TV', 'EAT FOOD', 'LISTEN LECTURE' ]