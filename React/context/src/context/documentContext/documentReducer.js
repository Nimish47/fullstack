export const INITIAL_DOCS = [
    { id: 1, task: 'Fill ITR', assigned: 'Madhu Shukla', flag: false },
    { id: 2, task: 'MDECL Bill Pay', assigned: 'Pawan Kheja', flag: false },
    { id: 3, task: 'Property tax', assigned: 'Aaris Kalra', flag: false },
    { id: 4, task: 'Car Serviving', assigned: 'Alicia Gomez', flag: false },
    { id: 5, task: 'Audit Theatre', assigned: 'Vikram Kapoor', flag: false }
]

export function documentReducer(state, action) {

    if (action.type === "DELETE_TASK") {
        return state.filter(doc => doc.id !== action.payload.id)
    }

    if (action.type === "FLAG_TASK") {
        return state.map(doc => {
            if (doc.id === action.payload.id) return { ...doc, flag: !doc.flag }
            return doc;
        })
    }

    return state;
}