## Two scenarios discussed with flex-grow:

1. with flex-shrink = 0
2. flex-shrink at default value



if width assign and flex-shrink = 0 
    below threshold i.e 600px scrollbar appear

else with flex-shrink as default,
    they contract


to show power of flex-grow
    increase width [upwards] from 600px (sumo of all flex-items),
    then you'll see power of flex-grow

flex-grow only applicable when extra space available

if no flex-grow on any flex-items, extra space in container remain vacant

flex shrink exact opposite


## code-show
(show on chrome devtools)

1. flex-shrink: 0 to all flex-items + flex-grow: different values to specific flex items
>> 1-basic.html
=> observe how flex-items grow with different speed as cross threshold
=> threshold = sum of individual flex-items (after this flex-grow come into action)
=> play with different values
=> item that does not have flex-grow remains at fixed width
=> different flex-items can grow with diff speed

2. all flex items grow equally
>> 2-all.css
=> observe how flex-items grow with same speed as we increase available width
=> threshold = sum of individual flex-items (after this flex-grow come into action)