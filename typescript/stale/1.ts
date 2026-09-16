type User = {
    id: number;
    name: string;
    email: string;
};

function searchUsers(query: string) {
    let resp: User[] = []

    // search logic
    if (query === "iamadmin") {
        const users: User[] = [
            {
                id: 1,
                name: "Kamran",
                email: "kamran@1234"
            }
        ];
        resp = users
    }

    return resp;
}

const result = searchUsers("pops");

if (result.length === 0) {
    console.log("No users found");
} else {
    result.forEach(user => {
        console.log(user.name);
    });
}