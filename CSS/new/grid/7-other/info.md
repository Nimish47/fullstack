## UNLOCKED
gap
grid-auto-rows
grid-auto-columns (not important)


## CODING SCENARIOS

1. gap
>> Coding-scenarios
    => gap: 20px;
    => row-gap: 50px;
    => column-gap: 10px;

2. grid-auto-rows

>> coding-scenarios (discuss these scenarios with and without body,html => 100% defined)
    => grid-template-rows defined + grid-auto-rows
        -> auto-rows will apply for rows other than template-rows ones
    => grid-auto-rows: 100px (no template-rows)
        -> all will have 100px height
    => grid-auto-rows: 1fr
        -> all will be equal and divided by drid container height
    => grid-auto-rows: minmax(200px,1fr)
        -> they will start at 200px but if extra space will be distributed evenly


>> learnings
    => default value is auto (explain)
    => It defines the height of rows that you did NOT explicitly define - implicit rows
    => Explicit rows → you define them
    => Implicit rows → browser creates them automatically
        -> You have more items than rows
        -> Items are placed beyond defined rows
        -> Auto-placement needs extra rows
        -> grid-auto-rows controls these rows
    => use for rows for which template-rows not defined (called as implicit rows)
    => different values it can take as in coding scenarios

    => default value = "auto" causes below effects when grid-auto-rows not defined
        Case 1 : grid container has no specified height 
            -> Each implicit row’s height is based on content
            -> Rows can have different heights
            -> nothing, grid cells will have content dependent column-track dimension
            -> code => a basic grid with no grid-template-rows (grid-height not defined)

        Case 2 : grid container has specified height
            -> it will behave like fr, and occupy all remaining space
            -> because grid-auto-rows: auto (defualt value)
            -> in absence of "fr", auto starts behaving like "fr"
            -> hence all vertical remain space, distributed equally
            -> code => a basic grid with no grid-template-rows (grid-height defined) 
     
    => without grid-auto-rows:
            -> column heights can vary creating a bad looking layout

    => What grid-auto-rows does NOT affect
            -> Explicit rows (grid-template-rows)
            -> Column widths
            -> Items you manually place within defined rows            

     => like rows, do we have grid-auto-columns          
            -> yes, but not important 