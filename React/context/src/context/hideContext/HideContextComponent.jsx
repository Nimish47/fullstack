import React, { createContext, useState } from "react";

// this is main context
// it 'provides' data to child comps - context.provider
// it 'consumes' data from this context - usecontext
export const HideContext = createContext();

// Create Provider component - its just a wrapper
function HideContextComponent({ children }) {

    // getter
    const [hide, setHide] = useState(false)

    // setter
    const toggleHide = () => setHide(prev => !prev)

  return (
    <HideContext.Provider value={{ hide, toggleHide }}>
      {children}
    </HideContext.Provider>
  );
}

export default HideContextComponent;