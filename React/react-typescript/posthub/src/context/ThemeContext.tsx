import { createContext, useContext, useMemo, useState, useCallback, type ReactNode } from "react";

type ThemeTypes = 'light' | 'pale' | 'dark'

type Theme = {
    theme: ThemeTypes,
    changeTheme: (newtheme: ThemeTypes) => void
}

type CustomProps = { children: ReactNode };

const ThemeContext = createContext<Theme | null>(null);

function ThemeContextComponent({ children }: CustomProps) {

    const [theme, setTheme] = useState<ThemeTypes>('dark')

    const changeTheme = useCallback((newtheme: ThemeTypes) => {
        setTheme(newtheme);
    }, []);

    const contextValue = useMemo(() => {
        return { theme, changeTheme }
    }, [theme])

    console.log('traffic component context')

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextComponent;


export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("consumer is out of scope of context");
    return context;
};