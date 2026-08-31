// problem 5

type User = {
    readonly id: number,
    name: string,
    email: string,
    phone: string,
    city: string
}

type Updates = Partial<Omit<User, "id">>

const users: User[] = [
    { id: 1, name: "Rahul", email: "rahul@gmail.com", phone: "9876543210", city: "Gurgaon" },
    { id: 2, name: "Priya", email: "priya@gmail.com", phone: "9123456789", city: "Delhi" },
    { id: 3, name: "Amit", email: "amit@gmail.com", phone: "9988776655", city: "Mumbai" }
]

function updateuser(id: number, updates: Updates) {

    // find
    let res = users.find(user => user.id === id)
    if (!res) return;

    // compute new user
    // original array also updated
    Object.assign(res, updates)

    // return new user
    return res
}

// consume
const modifiedUser = updateuser(1, { name: 'karan', email: 'karanmakhija@123' })
if (modifiedUser) console.log('User modified', modifiedUser.name)

