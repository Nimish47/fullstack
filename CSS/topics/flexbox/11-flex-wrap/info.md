## flex wrap:

applied on whole flex-container

## a tale of two cases:
    in both scenarios flex items have been assigned a certain width.

## case 2: if sum of widths of all flex items < flex container width
    they will take only space w.r.t their width assined.
    extra space will be available horizontally.

## case1: if sum of widths of all flex items > flex container width  
    when flex-wrap not used: 
    each flex item will contract itself equally.
    width of each flex-item less than specified width.
    NOTICE: width is compromised here.
    if you use: min-width, width will be preserved but would add a scrollbar!

    here comes flex-wrap: wrap
    if space not available for next flex item, move to next line
    width is preserved.


   
## VIDEO
    by default a flex shrinks flex-item width if space not available
    to preserve a certain width and to prevent scrollbar (check min-width), there comes flex-wrap: wrap 
    check content above



