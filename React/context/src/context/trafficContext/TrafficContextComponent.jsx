import React, { createContext, useContext, useMemo, useState } from "react";

// this is main context
// it 'provides' data to child comps - context.provider
// it 'consumes' data from this context - usecontext
const TrafficContext = createContext();

// Create Provider component - its just a wrapper
function TrafficContextComponent({ children }) {

    // getter
    const [stop, setStop] = useState(false)

    // setter
    // const stopTraffic = () => setStop(prev => !prev)

    const value = useMemo(() => {
        return { stop, stopTraffic: () => setStop(prev => !prev) }
    }, [stop])

    return (
        <TrafficContext.Provider value={value}>
            {/* <TrafficContext.Provider value={{ stop, stopTraffic }}> */}
            {children}
        </TrafficContext.Provider>
    );
}

export default TrafficContextComponent;

// Create a custom hook (for cleaner usage)
export const useTraffic = () => {
    const context = useContext(TrafficContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
};