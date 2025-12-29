## UNLOCKED
grid basics
grid tracks - rows and columns
display: grid
grid-template-columns
grid-template-rows
grid-auto-flow (too advanced to discuss)
grid-auto-rows (detailed later)
html,body :100%

# CODE SCENARIOS COVERED

1. basic grid: define rows and columns
    >> subcondition => play with differnt types of container heights        
    >> learn and observe:
        => grid-container, grid-items, grid-lines, 
        => row and column tracks
        => cell (area formed by intersection of row and column line)
        => what does grid-template-columns/rows actually do? => they create tracks
        => grid container architecture is decided first (based on grid-template-columns/rows and then grid items are placed within it)
        => Grid is layout first , items just go and occupy places later
        => how grid-items are auto placed in a grid container?
            -> they look at grid-template-column and layout is decided
            -> then grid-items are placed left to right and top to bottom 
                ~> because of a property grid-auto-flow whose default value is "row"   
        => identify row/column track dimension
        => google debug grid structure
        => identify grid-lines  
        => learn to compute 2 things (v.important)
            -> number of column/row tracks
            -> dimension of row/column track
                ~> 2 column track can have different width
                ~> 2 row track can have different heights
        => if grid-template columns: 1fr 200px 2fr 
            -> tell me how many column tracks (Answer: 3)                       


2. only display: grid (no row and cols defined)
    >> subcondition => play with differnt types of container heights
    >> learn and observe:
        => using this case we can centrally align a div within container
        => observe what happens to grid items once we turn container to a grid!
        => identify track dimensions 
            -> especially when container has 100% height
            -> 1 row track and 1 column track
            -> 1 cell = container dimensions
            -> explain via centering a div => using align/justify-items            

3. basic grid: define rows/columns +  width/height of grid-items
    >> subcondition:
        => grid-track-dimension defined but no grid-item dimension
        => grid-track width > grid-item-width
            -> show via chrome devtool
            -> in this case we can use grid alignment properties like justify, align etc
        => grid-track width < grid-item-width 
            -> grid item overflows track boundary

    >> learn and observe:
        => understand diff b/w track and grid item
            -> grid item is placed within a cell
        => understand concept of cell
        => grid-track-dimension = grid-item-dimension
            -> Hell No
        => via chrome devtools observe box model when we have different grid-item dimensions and how they adjust

4. basic grid: only columns defined
    >> subcondition => play with differnt types of container heights

    >> learn and observe
        => understand concept of implicit and explicit row
        => what happens when we do not define grid-template-rows?
            -> because we did not define rows they will be considered implicit
            -> implicit rows have a default property: grid-auto-rows whose default value is "auto"  
                ~> no container height defiend: "auto" = content dependent
                ~> container height defined: "auto" = 1fr (occupies remaining space)








