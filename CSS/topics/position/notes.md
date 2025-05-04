## position property in css
    these properties work best when we want to position an element at a certain place whether w.r.t the
    viewport or the containing block.

## static
    default

## relative
    - positions relative to its original position in viewport
    - top left bottom right can be used
    - dimensions of element don't change
    - space element used to occupy still remains

## absolute
    - element pulled out of document flow, space earlier no longer available.
    - positions relative to visible viewport at initial load.
    - in caseA notice how absolute behaves for header and footer elements (when scrolling)
    - caseA: for headers and footers
    - caseB: relative and absolute together
         position and centre a div inside a parent container
         very powerful combination: 'relative' parent and 'absolute' child
         great use case: centre a div

## fixed
    - relative to visible viewport (at all times)
    - good for header and footer positioning but needs extra padding (to neighbouring element whose content not visible)
    - since relative to visible viewport at all times (of no use with relative, won't be contained by relative!)

## sticky
    - similar to fixed but better (dont need to add padding to neighbour elements) 
    - best for header main footer layout
    - use for simple layouts (and header,footer)
    - for complex layouts use-flexbox,grids



