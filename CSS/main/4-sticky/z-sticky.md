## mainly learn this for theoritical purposes
## no need to use it

## for navbars => can be used, but so can be "fixed"
    ## benefit is that no need for manually setting padding

## for footers, a big no => see code

## basically appears naturally at a position until a threshhold is reached, then becomes fixed
## but fixed not to screen, but w.r.t container (that's why can't be used for footers)

## sticky applied => width and height remain the same

## issue2 explains clearly the difference b/w fixed vs sticky

## fixed 
    fixed to viewport

## sticky
    relative to parent container
    container should have some valid height
    show the behaviour using issue2.html        


## sticky -> show different stages
    initially relative to [ container ]
    we scroll down -> it reaches threshold (w.r.t to [ viewport ]) -> becomes fixed
    we scroll further down and reach end of parent container
    the element scrolls away

## sticky - short
    initially - relative to parent (calculated by offset value)
    threshold reached -> now relative to viewport
    parent exit - sticky element scrolls away 

## fixed -> show different stages
    initially relative to viewport
    stays as long we scroll down, whether we exit current parent or not,
    the fixed element remains relative to viewport only