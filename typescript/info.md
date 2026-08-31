## Variation occurs at 3 places

## variable declaration
## function parameter
## function return value

## most important tip
    - if a value can have several types of values(union) - always handle for "all" type of values (using js)
    - basically narrowing + js handling

0. primitives
        let name: string;

1. Array
        let arr: string[] = ["Amal","Amaluddin"]
        let arr: (string | number) = ["karan", 28]
        let arr: readonly string[] = ["Amal","Amaluddin"]       // not mutable
        const arr = ["Amal","Amaluddin"] as const   
            // same as
            // const arr: readonly ["Amal", "Amaluddin"] 

2. type
        let amal: User;
        define structure or
        possible values to a variable
        certain keys can be optional

3. Union (OR)
        type Role = 'normal' | 'admin'
        let accesstype: role;
        function findUser(id: number | string) : User | null {...}

4. Discriminated union
        type Payment = {type: "card", card: string} | {type: "upi", upiId: 'string'}
        Notice:
            type value we provide
            type "discriminates"
            other properties "type" we provide
            other properties key need not be same
            need to handle js way as well remember

5. Narrowing
        fn (value: string | number) {}
        if in code you are playing with value => need to handle for both string/number
        value.length => will throw error for number type => so handle gracefully

6. Guards - Handling via js
    if else
    typeof
    instanceof

7. unknown v/s any
        let value: unknown/any;
        value = response from api call
        value.toUpperCase();    // add guard for unknown
        unknown: prove value is string, add Guard
        any: disable typescript, no need for guard

8. any
        let xx: any = 23
        xx = "oranges"    

9. is
        fn validUser(value: unknown) : boolean {... return true/false if valid user}
        fn validUser(value: unknown) : value as User {... return true/false if valid user}
        if(validUser(value)) {
            valid.name, valid.age // ts needs to know if value is of type user, else complains
            }

10. Async Function
        async function getUser(): Promise<User> {...}

11. Function expressions
        type Compute = (value: string) => string;
        const uppercase: Compute = (value) => return value.toUpperCase();

12. Function declarations
        function uppercase(value: string) : string {...}

13. Interface
        interface User {id: number, fName: string}
        interface Admin extends User {                   // intersection
                role: string, 
                deleteAccess: (user: User) => void 
            }
             
14. Intersection (AND)
        type
            type User = { id: number, name: string }
            type Role = { role: string , deleteAccess: (user: User) => void }
            type Admin = User & Role;       // {id: number, name: string, role: string, deleteAccess: (user: User) => void }

        interface
            interface Admin extends User{}  // same as above

15. Generics
        type APIResponse<T> = { data: T }

16. Tuples
        type nameAge: [number, string]
        const userInfo: nameAge = [29, 'Karan']
        userInfo[0], userinfo[1] -> to access

17. readonly
        let names: str[] = ["nice", "biscuits"]
        // cannot be mutated 

18. as const
        const names = ["nice", "biscuits"] as const
        const names: readonly ["nice", "biscuits"] = ["nice", "biscuits"] 
        // similar to readonly cannot be mutated

19. "as"
    const input = document.getElementById("email") as HTMLInputElement;
    input.value 
        - ts will throw error without "as"
        - TS cannot establish what input is
        - Hence we say, believe me TS, its of this type!
        - other use case is response from backend api call

20. Generics
    - function getFirst<T>(items: T[]): T | undefined { 
            return items[0]
        }
            - getFirst([1, 2, 3]);
            - T = number

            - getFirst(["a", "b"]);
            - T = string

            - getFirst([karim, arjun]);         // also valid getFirst<User>([karim, arjun])
            - T = User
    - T comes in -> T comes out
    - Rule of generics: Preserve relationships between types.