TOPIC #NAMED AND DEFAULT EXPORTS

In JavaScript, named exports and default exports are two ways to export and import modules.
In React terms, named exports and default exports are two ways to export and import components and utility functions.

Rule: A module can have as many named exports but only one default export

1. Named Exports
    Can be multiple named exports per file
    Must be imported using curly braces {}.
    Import name must match the exported name.
    Good for utility functions, constants, or multiple exports from a file.

    Format to export:
        export const variableName = value                     [value can be of any data-type]
        export const function variableName () {...logic}      [ to export a function]
        
    Format to import:
        import { variableName1, variableName2, ... } from "./fileName";
        During import we can rename them too,
              import { variableName1 as value1, variableName2 as value2} from "./fileName";  


2. Default Exports
    Each module can have only one default export.
    Can be imported without curly braces {}.
    The import name can be anything.
    Good for exporting a single primary value (e.g., a component, class, or function).

    Format to export:
        export default variableName = value                     [if value is aof primitive/non-pritive data type]
        export default function variableName () {...logic}      [ to export a function]
        To export an arrow fn:
            const variableName = () => {...logic}
            export default variableName


    Format to import:
        import { variableName1, variableName2, ... } from "./fileName";
        During import we can rename them too,
              import { variableName1 as value1, variableName2 as value2} from "./fileName";    

    Format to import:
        import varName from "./fileName";      [Note: varName can be anything, won't matter]         


In similar way, React componenst can also be exported and imported like functions or data-types
See the code in project for more clarity.