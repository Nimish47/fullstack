## UNLOCKED
justify-items
align-items
justify-self
align-self
justify-content
align-content


## CODING SCENARIOS

1. Grid alignment

>> Coding scenarios
-   alignment within a cell
        => make 3x3 full viewport layout
        => 9 cells
        => give grid items some specific dimensions
        => play around 
        => values: start,center,end,stretch
        => notice what happens when we swich to start/center/end from strecth => background color
        => move around grid items top-left-right, bottom-left-right, center of cell
        => center a div (provided container has some valid height) (use devtools to center)
        => play around

-   alignment of (grid-occupied-area) w.r.t total grid-area
        => structure => 
            -> parent container (100% height, 100% width)
                    ~ grid container (80% height, 80% width)
        => 3x3 grid structure defiend
        => but only 4 items are there
        => now apply justify-content and align-content to show how alignment occurs
        => misconception: 
            ~ grid container does not align w.r.t parent - NO
            ~ (grid-occupied-area) aligns w.r.t total grid-area - YES

>> learnings and observations
=>  alignment concept in grids work in 2 ways:
    1. alignment of a grid item w.r.t it's grid cell
        ~ "align-items" and "justify-items" used => for all grid items
        ~ "align-self" and "justify-self" => for specific grid items
        ~ align/justify-items v/s self:
            > items apply for all grid-items in grid container
            > self only for that particular grid item
    2. alignment of (grid-occupied-area) w.r.t total grid-area
        ~ align-content and justify-content used

=> key pointers : *-items
    -> different values: start | center | end | stretch;
    -> "align" for vertical and "justify" for horizontal
    -> Default values (*-items):
        ~ justify-items: stretch;
        ~ align-items: stretch;
        ~ That’s why grid items fill their cells by default.
    -> use these properties to center a div in grid    

=> key pointers : *-content
    -> different values: start | center | end | space-between | space-around | space-evenly;
    -> "align" for vertical and "justify" for horizontal
    -> These do nothing if the grid already fills the container.