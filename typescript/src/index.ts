// understanding the need of generics

// getUsers
type UserType = {
    count: number,
    data: {
        userId: number,
        userName: string
    }[]
}

const allUsers = {
    count: 23,
    data: [
        { userId: 123, userName: 'Aman' },
        { userId: 126, userName: 'Kishan' },
        { userId: 186, userName: 'Purav' }
    ]
}

function getUsers(users: UserType) {
    return users.count
}

// getPosts
type PostType = {
    count: number,
    data: {
        postId: number,
        courierName: string
    }[]
}

const allPosts = {
    count: 99,
    data: [
        { postId: 123, courierName: 'DTDC' },
        { postId: 126, courierName: 'Speed Post' },
        { postId: 186, courierName: 'Fedex' }
    ]
}

function getPosts(posts: PostType) {
    return posts.count;
}

type Datatype<T> = {
    count: number,
    data: T
}

function getData<T>(data: Datatype<T>) {
    return data.count
} 


console.log(getUsers(allUsers))
console.log(getData(allUsers))
console.log(getData(allPosts))