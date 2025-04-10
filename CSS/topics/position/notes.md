## position property in css

## static

## relative
    - positions relative to its original position in viewport
    - top left bottom right can be used
    - dimensions of element don't change

## absolute
    - positions relative to visible viewport at initial load.
    - in caseA notice how absolute behaves for header and footer elements (when scrolling)
    - caseA: for headers and footers
    - caseB: relative and absolute together


## fixed
    - relative to visible viewport (at all times)
    - good for header and footer positioning but needs extra padding (to neighbouring elements)
    (of same height as neighbouring elements)
    - since relative to visible viewport at all times (of no use with relative, won't be contained by relative!)

## sticky
    - similar to fixed but better (dont need to add padding to neighbour elements) 
    - best for header main footer layout
    - use for simple layouts (and header,footer)
    - for complex layouts use-flexbox,grids



