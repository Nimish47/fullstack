import React, { createContext, useState } from "react";

// this is main context
// it 'provides' data to child comps - context.provider
// it 'consumes' data from this context - usecontext
export const ThemeContext = createContext();

// Create Provider component - its just a wrapper
function ThemeContextComponent({ children }) {

    // getter
    const [theme, setTheme] = useState(false)

    // setter
    const toggler = () => setTheme(prev => !prev)

  return (
    <ThemeContext.Provider value={{ theme, toggler }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextComponent;