## Grid basics theory

## What is CSS GRID
=> CSS Grid is a two-dimensional layout system
=> It means it handles rows + columns "together", unlike Flexbox (primarily one-dimensional).

## 3 core concepts of Grid 
1. Grid container
    => specified by display: grid

2. Grid Tracks => Rows + Columns
    => specified by grid-template-columns and grid-template-rows

3. Grid lines
    => grid lines are auto generated once a grid is created

# diagram view
    => use chatgpt diagram to understand:
        - grid container total dimension
        - grid container "occupied" dimension
        - grid lines (rows and columns)
        - cells
        - grid items
        - grid tracks dimensions (rows and columns) and all
        - grid areas    

## Grid auto placement
    => If you don’t specify row/column positions, Grid places items in:
        -> Row by row
        -> Left to right
        -> Using the auto-fill algorithm
        -> grid-auto-flow: row; /* default */

## A note on grid item's dimesnion v/s track dimensions
=> Both are different
=> Grid items are placed within track lines
=> What determines a track's dimensions?
    -> grid-template-columns and grid-template-rows determine it
=> What determines a grid item's dimensions?
    -> sum of track sizes it spans
=> width/height
    -> applied to grid item
=> grid-template-columns / rows
    -> Applied to the container
    -> Define available space
    -> Grid-items adapt to it    
=> One sentence to remember
    -> Grid defines the layout first; items adapt to it.    