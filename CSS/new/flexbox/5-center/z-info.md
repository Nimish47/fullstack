## flex-weakness

## flex struggles to center an element if container height is content driven

## since when you apply flex on container - all child items aliggn based on flex property (see code to understand issue)



## code-show

1. center a div within a flex-container
>> works : 1-specific.html (because height is defined)

>> won't work : 2-content.html (because height is content-driven)
=> compare and we deduce that ( position: absolute + relative ) still a winner 
=> issue is flex item we wanna position centrally is not taken out of regular flow
=> with content driven need to have two flex items atleast and thus the issue