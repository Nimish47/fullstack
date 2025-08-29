
export const syncLoaderFn = ({ params }) => {
    console.log('inside sync loader')
    if (params.source === 'loader') {
        // some gibberish to throw error
        // without a errorElement this will crash the app
        console.log([].map())
    }
}