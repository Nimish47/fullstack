## autofit and auto-rows


## auto-fit:
    useful for responsive design


grid-template-columns: repeat(auto-fit, 300px);

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

## auto-fit with minmax

 grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    first element should be at least 300px
    as soon as next 300px available in screen width push second element to first row and so
    also if less than 300px space available make sure current elements occupy 1fr but never go lower than 300px

    if screen-width < 300px,
         scrollbar appear
    if screen-width: [300px,600px),
         each grid item occupy 1fr and one element per line
         no vacant space
    as soon as screen-width: 600px, second grid item moves to first line



## auto-rows
    when we're uncertain about how many rows our grid layout will have
    or we want all rows to have same height

    gets overriden by grid-template-rows

