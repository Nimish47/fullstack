import { createContext, useContext, useMemo, useReducer } from "react";
import { documentReducer, INITIAL_DOCS } from "./documentReducer";

const DocumentContext = createContext();

function DocumentContextComponent({ children }) {
    const [documents, dispatch] = useReducer(documentReducer, INITIAL_DOCS)

    // if documents is not added as a dependency,
    // even if documents actually change, 
    // "value" won't get updated, hence
    // it would contain stale data
    const value = useMemo(() => {
        return { documents, dispatch }
    }, [documents])

    return (
        <DocumentContext.Provider value={value}>
            {children}
        </DocumentContext.Provider>
    );
}

export default DocumentContextComponent;

export const useDocument = () => {
    const context = useContext(DocumentContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
};