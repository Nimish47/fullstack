## variable declaration - primitives
=> let food: string = "pizza"
=> buyFood(item: string){}

## variable declaration - object
@ type Address = {
    long: string,
    lat: string
}

@ type User = {
    id: number
    name: string
    age: number,
    address?: Address
}

@ addUser(newUser: User){}

=> let mohan: User = {
    id: 1,
    name: 'mohan',
    age: 18
    }

=> addUser({id: 444, name: Pappu, age: 35})

## variable declaration - array
=> let ageArr: number[] = [10,20,30]
=> let ageArr: Array<number> = [10,20,30]
=> let ageArr: User[] = [mohan,pankaj]
=> let users: Array<User> = [mohan,pankaj]


## variable declaration - const
=> const name:'apple' = 'apple' (think)
=> let name: 'pops' = 'pops' (think)

## variable declaration - any
let flag:any = true
flag = 2
flag = "yes"

## union operator
@ type UserRole = "guest" | "admin" | "normal"

@ type User = {
    id: number
    name: string
    age: number,
    role: UserRole
}

=> updateCounter(counter: string | number){}
=> findUser(id: number): User | undefined {}

## function return value
=> findUser(id: number): User {}
=> findUser(id: number): User | undefined {}
=> findUserName(id: number): string {}
=> printNewUser(newUser: user): void {}

## Partials // all optional

@ type User = {
    id: number
    name: string
    age: number,
}

=> function addUser(newUser: Partial<User>): User {
    const id = Math.random()
    return {...newUser, id} 
}

addUser({name:'Karan', age: 25})
addUser({name:'Karan'}) // valid but will throw error since fn return type s User


## Omit // all except omitted values

@ type User = {
    id: number
    name: string
    age: number,
}

=> function addUser(newUser: Omit<User, "id">): User {
    const id = Math.random()
    return {...newUser, id} 
}

addUser({name:'Karan', age: 25})
addUser({name:'Karan'}) // will throw error since age is not omitted 

=> function addUser(newUser: Omit<User, "id"> | "name"): User {} // for multi omits

## Generics
function getLastItem<Type>(array:Type[]): Type | undefined{}

getLastItem([1,3,4])
getLastItem("apple", "banana")
getLastItem([{id: 23, name:"karan"}, {..}])

=> getLastItem<User>(mohan)     // explicit while calling