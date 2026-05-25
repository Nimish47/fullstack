## position: absolute

## code-show

1. 1-basic
>> position: absolute + no offsets
    => item removed from doc flow
    => occupies content driven space only
>> postion: absolute + offsets
    => item positioned w.r.t to current visible viewport
    => quickly exposed if scrollbar availble
    => fake viewport positioning 

2. relative parent + absolute child
:: Imitate this layout

        Top-Left             Top-Right

                    Centre

        Bottom-Left             Bottom-Right   

>> container with specified height
    => works
    => 2-position

>> container with content-driven height
    => works
    => 3-dynamic

=> takeaway is that position property is excellent to formulate such a layout

3. position can never be fixed
>> 4-issue
=> can only position w.r.t container
=> illusions that its positioned w.r.t viewport like fixed but but can never be fixed


## other observations
- by default width collapses to content-size
- for 100% width with "absolute" applied => check code
