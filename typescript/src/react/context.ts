function createContext<T>(initialValue: T) {

    let val: T = initialValue // important

    return {
        value: val
    }
}

function useContext<T>(context: { value: T }) {
    return context.value
}

type Themes = "black" | "blue" | "red"

const themeContext = createContext<Themes>("black")
const response = useContext(themeContext)

console.log(response)