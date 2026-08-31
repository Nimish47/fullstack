// problem 4

// type APIRespose


// type Result
type User = {
    id: number,
    name: string,
    email: string,
    phone?: string | null
}


const apiResponse: unknown[] = [
    { id: 1, name: "Rahul", email: "rahul@gmail.com", phone: "9876543210" },
    { id: 2, name: "Priya", email: "priya@gmail.com" },
    { id: 3, name: "Amit", email: "amit@gmail.com", phone: null },
    { id: "oops", name: "Wrong ID", email: "wrong@gmail.com" },
    "garbage data",
    null
]

function isUser(value: unknown): value is User {
    return (
        typeof value === "object" &&
        value !== null &&
        "id" in value &&
        "name" in value &&
        "email" in value &&
        typeof value.id === "number" &&
        typeof value.name === "string" &&
        typeof value.email === "string"
    );
}

// function transformData
function transformData(value: unknown[]) {
    let response: User[] = []

    // filter
    response = value.filter(user => isUser(user))

    // transform
    response = response.map(user => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user?.phone
        }
    })

    return response;
}

const result = transformData(apiResponse)

if (result.length === 0) {
    console.log("No users found");
} else {
    result.forEach(user => {
        console.log(user.name);
    });
}