## grid-basics
- understand core concepts
    grid container
    grid items
    grid lines
    cell => trackX x trackY
    grid area => a named rectangular region formed by one or more grid cells.
    column tracks (v.imp)
    row tracks (v.imp) 

## grid-template-columns/rows
- how to create my first grid => grid-template-columns/rows
- what does grid-template-columns/rows actually do?
    they create tracks
- how grid items position themselves within container (default behaviour)?
    - first look at grid-template-column
    - L to R    
- Grid is layout first => items just go and occupy places later
- grid item's width v/s track width?
      No
    - what is the dimension of a grid item?
        if no width/height assigned?
        if width/height assigned?
    - grid track width = that grid item's width?
        No        
    - grid item width > track width
        they overflow
    - grid item width < track width
        can be positioned using justify,align etc    

## what happens if we do not specify grid-template-rows?
Case 1 => grid container has no specified height 
- nothing, grid cells will have content dependent column-track dimension
- code => a basic grid with no grid-template-rows (grid-height not defined)

Case 2 => grid container has specified height
- it will behave like fr, and occupy all remaining space
- because grid-auto-rows: auto (defualt value)
- in absence of "fr", auto starts behaving like "fr"
- hence all vertical remain space, distributed equally
- code => a basic grid with no grid-template-rows (grid-height defined)

## track dimensions - track-width and track-height
=> all these are used to set the dimensions of track
  track-sizing in three ways:
    1. fixed 
    2. media responsive (flexible)
    3. range based

## fixed
    - Done using px, % etc

## media responsive (flexible)
    - Done using fraction units (fr)
    - both rows and columns
    - columns scenarios
        - 1fr 1fr
        - 1fr 200px 
    - row scenarios (imp)
        - with html,body,container => no height
            - 1fr 4fr
            - chatgpt to understand how height calculated
            - 18.5 px is content needed height
        - with [ html,body,container ] => 100% height
            - 1fr 4fr

## content-based track-sizing
Done via:  
    min-content
    max-content

## min-content
    takes only as much content space as largest non-breaking word
    mainly column use

## max-content
   total space in one single line (no wrap)
   mainly column use

## range based
Done via:
    auto
    fit-content()
    minmax

## auto
    starts from "min-content" =>
    mainly oscillates b/w [min-content] and [max-content]
    but sometimes 1 fr (exception)
    used with column and row both

## auto v/s fr
    know the difference b/w thee - very important
    "auto" is very smart and makes life easier
    "auto" without fr => starts behaving like fr if container size exceeds

# min-content, max-content, auto => CODING
    >> column scenarios
        min-content 1fr
        min-content auto
        max-content min-content 
        auto 1fr (diff b/w auto and fr => auto wins)
        auto 200px

    >> row scenarios
        1fr auto (give grid container some size)
        200px auto     

## fit-content() function
    use for both row and column
    code scenario
    fit-content(200px) 300px       

## minmax
    >> play with both row and column wise
    >> code scenarios
        - 200px 1fr
        - 200px 400px
        - auto 1fr
        - 300px auto
        - min-content max-content
        - min-content 1fr

## repeat fn
    - syntactical sugar
    - repeat(numberofcolumn/row tracks, dimension of each track)        

## explain how dimensions get computed when say: repeat (3, minmax(200px, 1fr))
    - 3 column^tracks get created and their minimum width = 200px
    - container < 600 => scrollbar
    - container = 600 => full width occupied of container, no empty space
    - container = 750 =>
        extra space = 750 - (200*3) = 150
        with "fr" => only deals with extra space distribution
        150/3 = 50px distributed to a three grid-items

# explain auto 1fr
    first auto adjusts b/w [min-content] and [max-content]
    then remaining space is taken by 1fr


# number of tracks => auto-fill and auto-fit
    - works only with repeat()
    - don't care about track dimesions but
    - these care only about number of column or row tracks
    - mainly with columns 

## understand repeat(auto-fill, minmax(200px,1fr)) v/s 
## understand repeat(auto-fit, minmax(200px,1fr)) v/s 
    1. compute max number of tracks I can create
    2. container 1000 => 5 tracks
    3. container 1300 => 6 tracks + 100px extra space
            

## track dimensions v/s number of tracks
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

## auto-fill => explain repeat(auto-fill, minmax(200px,1fr))
-  mainly used with columns
- only valid inside repeat()
-  based on grid container size decides how many column tracks to create
-  doesn't care about how many grid items are there
- creates column tracks first => fills grid items in there => unused columns remain empty =>
  extra space(fr) distributed among occupied columns 
>> container size: 1200px
    - tries to maximize column tracks so takes "min" from minmax = 200px for each grid item
    - 1200/200 => max 6 grid column tracks
    - if num of grid items 3 => they occupy 200px each, remaining 600px vacant
    - "fr" has no effect here 
>> container size: 1300px
    - all same except 100px vacant
    - 100px distributed equally among 3 grid items ("fr" effect)
>> container size: 1400px
    - 7 column tracks  now
    - no extra space    

## auto-fit => explain repeat(auto-fit, minmax(200px,1fr))
- mainly used with columns
- only valid inside repeat()
- cares about how many grid items are there
- creates column tracks first => fills grid items in there => unused columns removed => 
  extra space(fr) distributed among occupied columns if available
>> container size: 1200px
    - tries to maximize column tracks so takes "min" from minmax = 200px for each grid item
    - 1200/200 => max 6 grid column tracks
    - if num of grid items 3 => they occupy 200px each, remaining 600px vacant
    - vacant column tracks collapse, remain 600px distributed among occupied colun tracks evenly

## auto-fit v/s auto-fill
- auto-fill: leaves vacant column tracks as it is
- auto-fit: collapses vacant column tracks to 0 and speace generated evenly among occupied coplumn tracks

## CODING => auto-fill and auto-fit
- repeat(auto-fill, minmax(200px,1fr))
- repeat(auto-fill, 300px)
- repeat(auto-fill, 1fr)

- repeat(auto-fit, minmax(200px,1fr))
- repeat(auto-fit, 300px)
- repeat(auto-fit, 1fr)

## auto-fit and auto-fill - without minmax
- behaves exactly the same
- repeat(auto-fit, 300px) same as repeat(auto-fill, 300px)
- repeat(auto-fit, 1fr) same as repeat(auto-fill, 1fr)

- minmax gives auto-fit the freedom to stretch else vacant speace remain unoccupied

## categorization
>> generic
    % , px
    min-content
    max-content
    auto
    minmax
    fit-content

>> grid specific
    repeat
    auto-fill
    auto-fit

## gap
    gap: 20px;
    row-gap: 50px;
    column-gap: 10px;

## grid-lines related
- once grid tracks dimensions defined, grid tracks created
- we have grid lines both - row and column wise
- number of grid lines = tracks + 1
- range: [1,tracks+1]
- via google devtools we can debug grid lines
- only used to position a grid item across cells
- grid-lines always and always form a rectangle
>> coding and cases
    - basic design : navbar, sidebar, content, footer, ad
    - use 12 column and 12 row structure
    - use (-ve) grid lines as well (like -1,-2)
        - play with -ve values reverse side + span etc
    - use span and understand difference
    - full width coverage
    - overlapping of grid items and z-indexes
>> think
    - don't use grid lines for centering a div? why
        - manually we need to pace it which is troublesome
        - position wins hands on
    - can use for TL,TR,BL,BR => but position still wins
    - don't use for fixed navbars and footers
        - just make grid container scrollable vertically and you'll see


## what happens when we only write display: grid to a container and no other properties (container has specified height)?
- 1 row track and 1 column track
- 1 cell = container dimensions
- explain via centering a div => using align/justify-items


## alignment related
- alignement concept in grids work in 2 ways:
    1. alignment of a grid item w.r.t it's grid cell
        - "align-items" and "justify-items" used => for all grid items
        - "align-self" and "justify-self" => for specific grid items
    2. alignment of (grid-occupied-area) w.r.t total grid-area
        - align-content and justify-content used

## alignment within a cell - CODING
    - make 3x3 full viewport layout
    - 9 cells
    - give grid items some specific dimensions
    - play around 
    - values: start,center,end,stretch
    - notice what happens when we swich to start/center/end from dtrench => background color
    - move around grid items top-left-right, bottom-left-right, center of cell
    - center a div (provided container has some valid height)
    - play around

## alignment of (grid-occupied-area) w.r.t total grid-area - CODING
    - structure => 
        -  parent container (100% height, 100% width)
                - grid container (80% height, 80% width)
    - 3x3 grid structure defiend
    - but only 4 items are there
    - now apply justify-content and align-content to show how alignewment occurs
    - misconception: 
        - grid container does not align w.r.t parent - NO
        - (grid-occupied-area) aligns w.r.t total grid-area - YES


## grid areas
- syntactical sugar over grid-lines
- string => row track, name => column track
- based on column and rows, you need to write grid-template-areas
- refer that to individual item via grid-area
- writing grid-area is the main art here
- grouped names should form a rectangle, else invalid
-   "navbar navbar"
    "sidebar content"
    "footer footer";
- in above pattern:
    navbar/footer => horizontal rectangle
    sidebar/content => a square kind of
- in above pattern:
    important to write navbar twice, since we have 2 column tracks in grid-template-columns (v.important)
    see it as a grid => rows and columns should match  as grid-template 
- show how to design a grid area when video
    - start by grid-area then
    - write grid-template-column/rows

- how to write:
    - look at : template-columns and rows
    - deduce how many col and row tracks
    - your grid area should have equal number of tracks
    - see pattern above 

## grid-line v/s grid-areas
- grid line for dynamic content (span)
- grid line for overlap content (not possible with areas alone)

## grid-auto-rows
- default value is auto (explain)
- use for rows for which template-rows not defined
- different values it can take as below:
>> coding scenarios
    (discuss these scenarios with and without body,html => 100% defined)
    - grid-template-rows defined + grid-auto-rows
            auto-rows will apply for rows other than template-rows ones
    - grid-auto-rows: 100px (no template-rows)
        all will have 100px height
    - grid-auto-rows: 1fr
        all will be equal and divided by drid container height
    - grid-auto-rows: minmax(200px,1fr)
        they will start at 200px but if extra space will be distributed evenly


 ## grid-auto-columns 
    - not useful, don't study      


## grid-auto-flow
    - pretty advanced, not needed right now