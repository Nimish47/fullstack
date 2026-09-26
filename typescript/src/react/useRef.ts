function useRef<T>(intialValue: T) {

    let val: T = intialValue // important
    
    return {
        current: val
    }
}

type Fruits = "mango" | "banana" | "orange"

// consume
const ref1 = useRef<Fruits>("banana")
console.log(ref1.current)