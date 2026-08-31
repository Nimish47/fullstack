// problem 7
type APIResponses<T> =
    | { success: true, data: T }
    | { success: false, error: T }

type Successdata = {
    id: number,
    name: string,
    email: string
}

type Failuredata = string


// responseHandler()
function responseHandler<T>(apiResponse: APIResponses<T>) {
    return apiResponse.success ? apiResponse.data : apiResponse.error
}


// hard data
const goodData: APIResponses<Successdata> = {
    success: true,
    data: { id: 501, name: "Rahul", email: "rahul@gmail.com" }
}

const badData: APIResponses<string> = {
    success: false,
    error: "Email already registered"
}

// consume
const resp1 = responseHandler(goodData)
const resp2 = responseHandler(badData)

// print
console.log(resp1)
console.log(resp2)