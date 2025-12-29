## grid basics



## code show

1. a very simple grid structure
    - properties: grid-template-columns and grid-template-rows
    - grid lane width and height both specified
    - no width and height assigned to grid items
    - how grid positions items automatically (by default) =>
        - looks at grid-template-columns
        - L to R

2. grid container occupies 100% viewport height (html,body => 100%)
    - scenarios:
        - auto on last row
        - observe with and without height = 100%

3. understanding media responsive track-sizing => fraction units (fr)
    - column wise
        - very easy
    - row wise
        - with html,body,container => no height
            - chatgpt to understand how height calculated
            - 18.5 px is content needed height
        - with [ html,body,container ] => 100% height
    - other scenarios
        - greedy fr => px + fr

4. understand content-based track-sizing
    - min-content
        >> simple, use instead of pixels
        >> mainly for columns
    - max-content
        >> similar to min-content
    - auto (the smart one)
        >> very interseting property
        >> use with both row and columns
    >> play with both row and column wise

    >> column scenarios (all 3) 
        min-content 1fr
        min-content auto
        max-content min-content 
        auto 1fr (diff b/w auto and fr => auto wins)
        auto 200px

    >> row scenarios
        1fr auto (give grid container some size)
        200px auto

5. understand constrained track-sizing
    - fit-content() function
        >> use for both row and column
        >> code scenario
        - fit-content(200px) 300px

    - minmax
    >> play with both row and column wise
    >> code scenarios
        - 200px 1fr
        - 200px 400px
        - auto 1fr
        - 300px auto
        - min-content max-content
        - min-content 1fr

6. combine 3,4,5 with repeat() function
    - just a helper fn
    - repeat(numberofrows, dimension of each track)

7. grid automatically deciding number of columns - based on algorithm
    - combine with repeat() and minmax()
    - auto-fill
        >> code scenarios
        - repeat(auto-fill, 200px)
        - repeat(auto-fill, 1fr) [haha]
        - repeat(auto-fill, minmax(min-content,1fr)) // breaks the structure
    - auto-fit
        - repeat(auto-fit, 200px)
        - repeat(auto-fit, 1fr) [haha]
        - repeat(auto-fit, minmax(min-content,1fr)) // breaks the structure

