## UNLOCKED
grid-template-areas
grid-area


## CODING SCENARIOS

1. Grid areas

>> coding scenarios
    => make same layout you made using grid-lines 

>> learnings
    => what is grid area?
        -> a rectangular region formed by one or more grid cells. 
        -> write layouts like ASCII art
    => syntactical sugar over grid-lines
    => string => row track, name => column track
    => based on column and rows, you need to write grid-template-areas
       and refer that to individual item via grid-area
    => writing grid-area is the main art here
    => grouped names should form a rectangle, else invalid
    => "navbar navbar"
       "sidebar content"
       "footer footer";
            -> in above pattern:
                ~ navbar/footer => horizontal rectangle
                ~ sidebar/content => a square kind of
            -> in above pattern:
                ~ important to write navbar twice, since we have 2 column tracks in grid-template-columns (v.important)
                ~ see it as a grid => rows and columns should match  as grid-template 
    => show how to design a grid area when video
        -> start by grid-area then
        -> write grid-template-column/rows

    => guidelines on how to write grid-areas:
        => look at : template-columns and rows
        => deduce how many col and row tracks
        => your grid area should have equal number of tracks
        => see pattern above 

    => grid-areas and grid-lines - similarities
        -> grid-areas are just syntax sugar over grid-lines
        -> internally it converts the grid-areas to grid-lines
        -> Mixing areas and lines is allowed & common

    => grid-line over grid-areas
            -> use grid line for dynamic content (span)
            -> use grid line for overlap content (not possible with areas alone)

