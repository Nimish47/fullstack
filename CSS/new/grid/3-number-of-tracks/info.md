## UNLOCKED
specifying number of tracks - manually or algorithm based
repeat() function
auto-fit
auto-fill

## Theory 1: How number of tracks are computed or specified
>> manually
    => we specify manually using grid-template-columns/rows 
    => if all are same dimension, can use repeat()

>> algorithm based
    => auto-fill
    => auto-fit

## CODE SCENARIOS

1. repeat() function 
>> code scenarios
    => repeat(6, 200px)
    => repeat(6, all_minmax_values)
    => repeat(3, minmax(200px, 1fr)) (explanation below)
        -> 3 column^tracks get created and their minimum width = 200px
        -> container < 600 => scrollbar
        -> container = 600 => full width occupied of container, no empty space
        -> container = 750 =>
            ~ extra space = 750 - (200*3) = 150
            ~ with "fr" => only deals with extra space distribution
            ~ 150/3 = 50px distributed to a three grid-items

>> learn and observe 
    => repeat(number_of_tracks, dimension_of_each_track)
    => can be sused with both column and row track
    => syntactical sugar where each row/clumn track have similar logic/value to calculate dimension
    => auto-fill and auto-fit can only be used within repeat()


2. auto-fit and auto-fill
>> Coding-scenarios
    => repeat(auto-fill, minmax(200px,1fr))
        -> container size: 1200px
            ~ tries to maximize column tracks so takes "min" from minmax = 200px for each grid item
            ~ 1200/200 => max 6 grid column tracks
            ~ if num of grid items 3 => they occupy 200px each, remaining 600px vacant
            ~ "fr" has no effect here 
        -> container size: 1300px
            ~ all same except 100px vacant
            ~ in 100px I cannot create a new column (lower limit is 200)
            ~ Hence, 100px distributed equally among 3 grid items ("fr" effect)
        -> container size: 1400px
            ~ 7 column tracks now
            ~ same as 1200px case      

    => repeat(auto-fit, minmax(200px,1fr))
        -> container size: 1200px
            ~ tries to maximize column tracks so takes "min" from minmax = 200px for each grid item
            ~ 1200/200 => max 6 grid column tracks
            ~ if num of grid items 3 => they occupy 200px each, remaining 600px vacant
            ~ vacant column tracks collapse, remain 600px distributed among occupied colun tracks evenly 
         -> similar logic for other container sizes    

    => repeat(auto-fill, 300px)

    => repeat(auto-fill, 1fr)
        -> only one track column as 1fr occupies full width

    => repeat(auto-fit, 300px)
        -> extra space unused
        -> same as auto-fill
    
    => repeat(auto-fit, 1fr)
        -> same as auto-fill

>> Learn and observe
    => auto-fill
        -> based on grid container size decides how many column tracks to create
        -> doesn't care about how many grid items are there
        -> creates column tracks first => fills grid items in there => unused columns remain empty =>
        extra space(fr) distributed among "occupied" columns 

    => auto-fit
        -> cares about how many grid items are there
        -> creates column tracks first => fills grid items in there => unused columns removed => 
        extra space(fr) distributed among "occupied" columns if available 

     => how auto-fill thinks?
        -> Grid creates as many columns as fit
        -> Even if you have fewer items, empty columns still exist
        -> Empty columns still take up space  (but there is a caveat)
        -> Mental model: “Lay out the tracks first — content is optional.”

     => how auto-fit thinks?
        -> Creates as many columns as fit
        -> If there are fewer items:
        -> Empty columns collapse to zero
        -> Existing items stretch to fill space
        -> Mental model: "Only create tracks that are actually used.” 

    => auto-fit and auto-fill : Similarities
        -> used to compute "number of tracks"
        -> works only with repeat()
        -> don't care about track dimesions but
        -> these care only about number of column or row tracks
        -> mainly with columns 
        -> both try to maximize the number of columns created
        -> The difference b/w auto-fit and auto-fill shows only when there is extra space
        -> both are grid-specific properties

    => a quick note on auto-fit and auto-fill
        -> both tell the grid - “Create as many columns as can fit.” but 
        -> But what happens to unused columns is the key difference.

    => auto-fit v/s auto-fill : Common Differences
        -> auto-fill: leaves vacant column tracks as it is
        -> auto-fit: collapses vacant column tracks to 0 and speace generated evenly among occupied coplumn tracks

    => auto-fit and auto-fill ( without minmax )
        -> behaves exactly the same
        -> repeat(auto-fit, 300px) same as repeat(auto-fill, 300px)
        -> repeat(auto-fit, 1fr) same as repeat(auto-fill, 1fr)
        -> the reason is minmax gives auto-fit the freedom to stretch else vacant speace remain unoccupied 
        -> Without minmax, columns never stretch
        -> mimnmax() is what makes auto-fit responsive  

    => auto-fill and auto-fit (similarities and differences)
        -> both auto-fill and auto-fit start by creating as many cols as possible but
        -> auto-fit : shrinks unused cols + tracks try to distribute "all" remaining space among themselves
        -> auto-fill : leaves unused cols as it is + tracks distribute space only before next column gets added on    
        -> auto-fit is more popular as it is used to create RESPONSIVE GRIDS

    => auto-fit: misconception
        -> This is a common misunderstanding
        -> auto-fit controls how many columns exist
        -> It does not change how many columns an item spans    
        -> "Grid items stretch inside their own cell, not across cells." : very important


    => minmax(px,fr) + repeat() + auto-fit = FIRE COMBO 
        -> industry standard responsive grid code    
        -> why so?
            ~ As many columns as fit
            ~ Each column ≥ lower_limit
            ~ Columns stretch evenly
            ~ Collapse automatically on smaller screens

