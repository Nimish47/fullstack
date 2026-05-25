## Tables in CSS


## Code and Pointers

1. Simple table with below features:
    => 100% width
    => border collapsed
    => cell borders
    => introduce colspan

2. zebra + hoverable + borderless
    => base as 1
    => zebra striped
    => no cell borders
    => hoverable
    => top row and bottom row same color     

3. too much and empty cell
    => base as 1
    => empty cell
    => too much data in the cell
    => play at different screen sizes to see layout
    => this example shows true nature of responsive tables

4. weird layout
    => a weird layout - see youtube example
    => use colspan and rowspan
    => understand how values are determined by actually "playing" and not "theoritically"
    => colspan and rowspan applied only to => th and td

5. horizontal and vertical scrolls - 1
    => here we see the default behaviour
    => long length columns or too many columns
    => idea is to make container (not table) scrollable  at low screen size
    => observe the issue with basic.html (low screen size + scroll down and right)    
    => this issue comes because we have not configured out container that holds table to behave as a scroll container
    => data overflows

6. horizontal and vertical scrolls - 2
    => a fix to 5
    => introduce parent scroll container and props to it  
    => notice how issue fixed
    => overflow:auto

7. horizontal and vertical scrolls - 3
    => our scroll container has a width and height now
    => overflow: auto
    make main container > 100vh
    => idea is to show 2 scrollbars
        -> one for main body and other for table containing block

8. Sticky
    => take 7 as base
    => sticky first row as well as sticky first column
    => needs position:sticky
    => imp 
        -> sticky is applied to <thead>
        -> sticky is applied to individual <td>
        -> both ways we can do it

9. table-layout: fixed I
    => take 1 as base
    => set "fixed" and observe
    => play with text properties (wrap,overflow,ellipses) etc
    => observe how all are same width
    => explain "auto" vs "fixed"

10. table-layout: fixed II
    => take 2 as base
    => set "fixed"
    => custom set "width" of each column
    => min-width won't work, only "width" works

11. table-layout: fixed III
    => explain how at small screens "width" preserved (provided container is scrollable)
    => explain how at large screens "extra width" distributed equally
    => play with different widths for different columns



