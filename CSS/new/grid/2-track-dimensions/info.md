## UNLOCKED
different metrics to size a track
min-content
max-content
fr
auto
fit-content
minmax

## Theory 1: ways to size a track
>> 4 ways to size a track:
    fixed => px,%,em
    flexible => fraction-units(fr)
    content-based => min-content,max-content,auto 
    ranged = fit-content,minmax

## Theory 2: track dimensions v/s number of tracks
>> used for specifying track dimensions =>
    % , px
    min-content
    max-content
    auto
    minmax
    fit-content

>> used for computing "number" of column/row tracks
    auto-fill
    auto-fit 

## Theory 3: General CSS v/s Grid-specific entities
>> generic
    % , px
    min-content
    max-content
    auto
    fit-content

>> grid specific
    minmax
    repeat
    auto-fill
    auto-fit    


## CODE-SCENARIOS

1. fixed dimension track-sizing: use only pixels as row/column dimensions
>> learn and observe
    => use this for fixed dimesnion column and row tracks

2. media responsive track-sizing
>> code-scenarios
    => column: 1fr 1fr
    => column: 1fr 200px
    => row: 1fr 4fr (no container height specify)
        -> observe how height computed
    => row: 1fr 4fr (container height specified)
        -> observe how height computed

>> learn and understand
    => fraction units (fr)
        -> takes remaining free space
        -> calculated "after" fixed/content-based tracks
        -> Distributes remaining space after fixed/content-based sizes.

    => how fr calculates final dimension ( very interesting )
        -> starts at content dimesion
        -> sees extra space available in container
        -> distibutes among all tracks that have dimension in "fr"

3. content based track-sizing
>> code-scenarios
    => column
        -> min-content 1fr
        -> min-content auto
        -> max-content min-content 
        -> auto 1fr
            ~ observe the behaviour
            6. auto 1fr
            ~ first auto adjusts b/w [min-content] and [max-content]
            ~ if cotaniner space allows, auto reaches [max-content] and then "1fr" takes over
            ~ then remaining space is taken by 1fr
            ~ auto first computes its value then fr takes only left-over space
        -> auto 200px
            ~ exception
            ~ observe behaviour of auto in absence of "fr"
            ~ "auto" behaves like 1fr and occupies ll remaining space
    => row scenarios
        -> 1fr auto (give grid container some size)
        -> 200px auto 

>> learn and observe
    => uderstand diff b/w min-content and max-content 
    => min-content:
        -> takes only as much content space as largest non-breaking word
        -> text wraps aggresively
        -> mainly column use 
        -> Mental model: “What is the smallest box that still fits this?”
         
    => max-content
        -> total space in one single line (no wrap) (scroll appears)
        -> no wrapping
        -> content's natural width
        -> mainly column use 
        -> Mental model: “How big would this be if nothing stopped it?”            
    => auto
        -> computed value depends upon:
            ~ content-size
            ~ available space
        -> used with row and columns
        -> value oscillates b/w [min-content, max-content] (with exception)
        -> auto without fr
            ~> if container space allows and there is no "fr" => "auto" behaves like "fr"
            ~> rule: auto tracks are allowed to absorb leftover space if no fr tracks exist.
        -> auto with fr
            ~> "auto" tries to reach max-content and remaining space allocated to "fr"
            ~> "fr" is just leftover space
        -> auto v/s fr
            ~> auto listens to content, fr ignores it.  
            ~> 1 fr means : “Take a share of leftover space regardless of content.”
            ~> auto means : “Take space only if content needs it, otherwise stop.”   (without fr there is a caveat)    
            ~> auto is content-constrained sizing; fr is free-space distribution.        

4. range-based track-sizing: fit-content(limit)
>> code-scenarios
    => fit-content(200px) 300px
>> learn and observe
    => fit-content(limit)
        -> limit can be in pixels or fr
        -> range: [min-content, limit]
        -> puts an upper limit on track sizing

5. range-based track-sizing: minmax() function
>> code-scenarios
    => 200px 1fr
        -> good example to see "fr" behaviour
    => 200px 400px
    => auto 1fr
        => auto vs fr -> already discussed
    => 300px auto
        => "auto" behaviour in full flow
    => min-content max-content
    => min-content 1fr

>> code scenario explain: minmax(200px, 1fr)
=> Means: “Create a column that is at least 200px wide,
=> and at most it can take a share of the remaining free space.”
=> Minimum : 200px , Column will never shrink below 200px (at any cost)
=> Max: 1fr, Column can grow if there is leftover space and after fixed/constraint based content is resolved


>> learn and observe
    => minmax(lowerlimit, upperlimit)
        -> backbone of responsive grids
        -> minmax is grid-specific only
        -> lower and upper limit values can be pixels or "fr"
        -> basically minmax is just a basic range specifiying dimension range of a track
        -> Mental modal: “This lane can grow and shrink — but only within these limits.”
        -> Minmax helps with:
            ~ a lower safety limit (don’t get too small)
            ~ a flexible upper limit (use space if available)
        -> minmax() gives Grid boundaries — flexibility without chaos, something which "fr" and "auto" lack since they have no upper specified boundary   


## Summary - How Grid actually calculates track sizes (simplified)

=> Order matters 👇
    -> Subtract fixed sizes (px, %)
    -> Resolve content-based tracks (auto, min/max-content)
    -> Distribute remaining space to fr units