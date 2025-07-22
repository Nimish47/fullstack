## usecallback


## usememo vs usecallback
## pure fn to be used inside usecallback immemdiately
    ## if fn defined seperately, it should be outside component
    ## else it will be declared in each render
    ## see usememo > Child 3B.jsx

## combine with react.memo
    ## when passing as a prop to a memoized component like clickEvent
        ## useCallback should not have any dependency
        ## see-> react.memo -> case2b
        ## adding selected as dependency will void the idea of memoization
        ## in this case an updater fn is best option (to avaoid staleness)
     ## however when used individually, can add dependency
        ## see useCallback -> case1.jsx   


## code
    1. memoize a fn and use it as a useeffect dependency
