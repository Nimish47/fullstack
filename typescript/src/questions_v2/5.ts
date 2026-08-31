// problem 5

// type User
type UserInfo = {
    id: number,
    name: string,
    email: string,
    bio: string,
    avatar: string
}

type filterType = Partial<Omit<UserInfo, "id">>

// updateProfile()
function updateProfile(id: number, filterObj: filterType) {
    let user = listOfUsers.find(item => item.id === id)
    if (!user) return

    if (filterObj.name) user.name = filterObj.name
    if (filterObj.email) user.email = filterObj.email
    if (filterObj.bio) user.bio = filterObj.bio
    if (filterObj.avatar) user.avatar = filterObj.avatar

    return user;
}


// array of users
const listOfUsers = [
    { id: 42, name: "Rahul", email: "rahul@gmail.com", bio: "Frontend developer", avatar: "/avatars/rahul.png" },
    { id: 73, name: "Priya", email: "priya@gmail.com", bio: "Product designer", avatar: "/avatars/priya.png" },
    { id: 91, name: "Amit", email: "amit@gmail.com", bio: "Backend developer", avatar: "/avatars/amit.png" }
]

// consume
const finalUser = updateProfile(42, {
    email: "rahul.new@gmail.com"
})

// print
if (finalUser) console.log(finalUser)