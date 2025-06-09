// import {defer} from 'react-router-dom'

// const URL_1 = 'https://jsonplaceholder.typicode.com/users'
// const URL_2 = 'https://jsonplaceholder.typicode.com/comments'
// const URL_3 = 'https://jsonplaceholder.typicode.com/photos'

// const fetchTileOneData = async () => {
//     const response = await fetch(URL_1);
//     return response.json()
// }

// const fetchTileTwoData = async () => {
//     const response = await fetch(URL_2);
//     return response.json()
// }

// const fetchTileThreeData = async () => {
//     const response = await fetch(URL_3);
//     return response.json()
// }

// // const fetchTileFourData = () => { }


// export const loadDufferData = async () => {
//     // tile one data to loaded first mandatorily
//     const tileOneData = await fetchTileOneData()
//     return defer({
//         tileOneData,
//         tileTwoData: fetchTileTwoData,
//         tileThreeData: fetchTileThreeData()
//     })
// }
