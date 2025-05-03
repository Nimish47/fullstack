## autofit , minmax and auto-rows


## auto-fit:
    use when you want number of columns to be dynamic
    or you are not sure about how many columns are needed
    needs repeat funtion to work properly

## minmax
    very powerful property
    can be used individually or with autofit

## grid-template-columns: repeat(auto-fit, 300px);

    use when unclear on number of columns
    first element should be at least 300px
    as soon as next 300px available in screen width push second element to first row and so...

        it means:
            each grid item occupy a minimum 300px
            if screen-width < 300px,
                scrollbar appear
            if screen-width: [300px,600px),
                each grid item occupy 300px and one element per line (remaining space vacant)
                to cover this vacant space problem we use minmax along with autofit
            as soon as screen-width: 600px, second grid item moves to first line
            same way it contines   

## auto-fit with minmax and repeat
 grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
 
    use when unclear on number of columns
    first element should be at least 300px
    as soon as next 300px available in screen width push second element to first row and so
    also if less than 300px space available make sure current elements occupy 1fr but never go lower than 300px

    if screen-width < 300px,
         scrollbar appear
    if screen-width: [300px,600px),
         each grid item occupy 1fr and one element per line
         no vacant space
    as soon as screen-width: 600px, second grid item moves to first line

## minmax individually
    very powerful property (in terms of responsive designing)
    minmax(min-width,max-width)   //as the name suggests
    minmax is an individual property and not dependent on repeat or autofit
    Take an example:
        grid-template-columns: minmax(100px,150px) minmax(200px,250px) minmax(300px,500px);

            it has 3 grid columns
            1st one will occupy a minimum of 100px and max of 150px
            2nd one will occupy a minimum of 200px and max of 250px
            3rd one will occupy a minimum of 300px and max of 500px

            if screen width < 600px
                scroll bar appears
                they all occupy min-widths

            if 600px < screen width < 900px
                no scrollbar
                their width somewhere b/w min and max width,depend on screen size

            if screen width > 900px
                no scroll bar
                they all occupy max-widths
                Note: in this scenario, if screen size, there is a gap
                    If screen size = 1200px,
                            they all occupy max-widths, still 300px vacant
                            why don't we use fraction units.
                            Hence a better use of minmax here woould be:
                                grid-template-columns: minmax(100px,1fr) minmax(200px,2fr) minmax(300px,3fr);


## auto-rows
    when we're uncertain about how many rows our grid layout will have
    or we want all rows to have same height

    gets overriden by grid-template-rows



## VIDEO
    explain auto-rows individually
    explain minmax individually first
        using px
        using fr
    explain auto-fit individually (and repeat)
    explain auto-fit with minmax (and repeat)    