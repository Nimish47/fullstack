## flex properties in detail:

## default values:
    flex: 1 is same as:
        flex: 1 1 0 which is same as:
            flex-grow: 1
            flex-shrink: 1
            flex-basis: 0

##  meaning of flex: 1 1 0
    start at width 0px (flax basis)
    if space available grow

## flex values are relative to each other (flex items)

## flex-basis:
    starting width of flex items
    flex-basis: 200px means start from 200px and grow/shrink as per specified value(s)

## flex grow:
    as width crosses (increases from flex-basis) this comes into action

## flex-shrink:
    as width crosses (decreases from flex-basis) this comes into action

## cases:
    basically, play with different values of flex-basis, flwx-shrink and flex-grow
    and see how the flex items behave. Couple of weird scenarios are listed below. 

## imp:
    flex basis default value is 0px.
    it overrides width property
    it gets overriden by max-width and min-width        

## in case1.html
    huge difference when:
        flex: 1 1 500px 
            v/s
        width: 500px and flex: 1 1 0px

        above both scenario are not same
        to see the stark difference compare at screen width: 1000px    

## for now, ignore this scenario: (special-scenario)
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 0;

    as verified in code:
        it will occupy only available space needed


## another abrupt case:
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 500px;    

    suppose two items with same value(s),and screen size decreases from 1000px,
    flex-shrink is 0
    so,
        as observed it shrinks in a weird way, can't explain. 


## VIDEO
    check above descriptions        


   



