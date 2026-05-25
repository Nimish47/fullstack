// simple callback hell via timeouts

// 'Buy groceries' 1s
// 'Cut vegetables' 1s
// 'Cook food' 2s
// 'serve food' 1s
// 'Clean utensils'

setTimeout(() => {
    console.log('Buy grocery')
    setTimeout(() => {
        console.log('Cut veggies')
        setTimeout(() => {
            console.log('cook foof')
            setTimeout(() => {
                console.log('serve food')
                console.log('clean utensils')
            }, 1000);
        }, 2000);
    }, 1000);
}, 1000);