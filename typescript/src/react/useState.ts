function useState<T>(initialValue: T) {
    let state: T = initialValue;    // important

    function setState(newValue: T) {
        state = newValue;
    }

    return [state, setState];
}

// application
type UserTypes = {
    id: number,
    name: string
}

const [user, setUser] = useState<UserTypes | null>(null)
console.log(user)