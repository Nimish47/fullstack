// problem 6

// type
type APIResponse<T> = {
    items: T[],
    page: number,
    totalPages: number
}


// filterResponse()
function filterResponse<T>(data: APIResponse<T>) {
    return data.items
}

// mock data
const apiResponse = {
    items: [
        { id: 1, amount: 5000 },
        { id: 2, amount: 8200 }
    ],
    page: 1,
    totalPages: 4
}

const apiResponse2 = {
    items: [
        { id: 101, subject: "Login problem" },
        { id: 102, subject: "Payment failed" }
    ],
    page: 1,
    totalPages: 3
}

// consume
const resp = filterResponse(apiResponse)

// print
if (resp.length > 0) resp.forEach(item => console.log(item));