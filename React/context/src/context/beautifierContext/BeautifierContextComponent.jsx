import React, { createContext, useState } from "react";

// this is main context
// it 'provides' data to child comps - context.provider
// it 'consumes' data from this context - usecontext
// needs to be created outside component since it gets exported 
export const BeautyContext = createContext();

// Create Provider component - its just a wrapper
function BeautifierContextComponent({ children }) {

    // getter
    const [beautify, setBeautify] = useState(false)

    // setter
    const toggleBeautifier = () => setBeautify(prev => !prev)

    return (
        <BeautyContext.Provider value={{ beautify, toggleBeautifier }}>
            {children}
        </BeautyContext.Provider>
    );
}

export default BeautifierContextComponent;