## UNLOCKED
grid-row
grid-column 

## CODING SCENARIOS

1. grid-lines

>> coding -scenarios
    => basic design : navbar, sidebar, content, footer, ad
    => use 12 column and 12 row structure
    => use (-ve) grid lines as well (like -1,-2)
        -> play with -ve values reverse side + span etc
    => use span (for relative placement)
    => full width coverage
    => overlapping of grid items and z-indexes

>> learnings and observations

=> what is grid-area?
    -> one or more collection of cells
    -> they must form a rectangle

=> about grid-lines
    -> once grid tracks dimensions defined, grid tracks created
    -> we have grid lines both - row and column wise
    -> number of grid lines = tracks + 1
    -> line numbering starts from 1 to (tracks +1)
    -> as a shorthand, last line value = -1, second last = -2 and so on... 
        ~ grid lines are never numbered in -ve, 
        ~ its just a shorthand
    -> range: [1,tracks+1]
    -> via google devtools we can debug grid lines
    -> only used to position a grid item across cells
    -> grid-lines always and always form a rectangle - a guarantee
    -> There is no syntax in Grid to
        ~ skip a cell in the middle
        ~ create an L-shape
    -> CSS Grid is a rectangular coordinate system — every grid item is a rectangle, always.    

=> grid-lines weaknesses
    -> don't use grid lines for centering a div? why
        ~ manually we need to pace it which is troublesome
        ~ position wins hands on
    -> can use for TL,TR,BL,BR => but position still wins
    -> don't use for fixed navbars and footers
        ~ just make grid container scrollable vertically and you'll see

=> cheatcode
        Concept	    Meaning
        Line	    Boundary
        Track	    Space between lines
        Cell	    One row × one column
        Area	    Rectangular group of cells  

        -> Tracks are the space.
           Lines are the coordinates.
           Items are rectangles between lines.     