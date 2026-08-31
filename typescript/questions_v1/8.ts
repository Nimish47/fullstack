// Problem 8

type Product = {
    id: number,
    name: string,
    price: number
}

type Settings = {
    theme: string,
    notifications: boolean
}

type ProductResponse =
    | { success: true, data: Product[] }
    | { success: false, error: string }

type SettingsResponse =
    | { success: true, data: Settings }
    | { success: false, error: string }

type GenericResponse<T> =
    | { success: true, data: T }
    | { success: false, error: string }

function getProducts(input: ProductResponse): Product[] | string {
    if (input.success) return input.data
    else return input.error
}

function getSettings(input: SettingsResponse): Settings | string {
    if (input.success) return input.data
    else return input.error
}

// for products T= Product[]
// for settings T = Setting
function getGeneric<T>(input: GenericResponse<T>): T | string {
    if (input.success) return input.data
    else return input.error
}

// these are good, but explicit
getProducts({ success: true, data: [{ id: 1, name: "Laptop", price: 80000 }] })
getSettings({ success: true, data: { theme: "dark", notifications: true } })
getProducts({ success: false, error: "Products unavailable" })


// generic way - better
getGeneric({ success: true, data: [{ id: 1, name: "Laptop", price: 80000 }] })
getGeneric({ success: true, data: { theme: "dark", notifications: true } })
getGeneric({ success: false, error: "Products unavailable" })