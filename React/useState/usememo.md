## The useMemo hook

## remember result of a computization so react does not compute it on each re-render unless needed
## used for remembering a computed value
## caches computed  value
## pure fn to be used
## pure fn to be used inside usememo immemdiately
    ## if fn defined seperately, it should be outside component
    ## else it will be declared in each render
    ## see Child 3b.jsx
## a usememo never takes a parameter
    ## any dependecy directly comes from state/props
    ## this is because it is invoked by react and value is cached
## a usecallback can take a parameter
    ## this is because it is invoked by user    
## we memoize what?
    - computed value from a function
        - only synchronous fn allowed
        - for async/side effects use useEffect
    - an object
        - passed as a prop memoized child component
        - passed in a useEffect dependency
        - passed in a useCallback dependency
## DO NOT INSIDE usememo
    - logging, setting state, fetching, DOM changes 
    - any side effect      
    
## WHAT IS ALLOWED INSIDE USEMEMO FN
    - all rules that apply pure fn
    const memoizedValue = useMemo(() => compute(params), [dependency array]);
        - notice how compute fn is executed and not just declared
        - this differentiates it with useCallback
    ? Memoizing derived state from props.
    prop comparison happens via !==
        hence if dependency is object don't create inline object as reference changes
    Think of useMemo like a computed cache that you tag with dependencies. If those dependencies didn’t change, it returns the same result from last time.    
    useMemo alone does not prevent the component from re-rendering.

## very good scenario
            (useState+useEffect) v/s useMemo alone
            case 1: 
                props -> sync transform and memoize
                pointers:
                    sublime
                    transform should be sync
                    we don't need to update the derived state explicitly (else follow case2)
                    use if: If it's just a view transformation,
            case 2: 
                props -> useEffect has props dependency -> (transform+sideeffects) in useEffect -> store in state
                pointers:
                    complex
                    transform can be sync/async, or other sideEffects
                    other changes allowed sice we store value in usestate
                    use if: If you want interactive mutable data

             conclusion:  If it's just a view transformation and sync job: useMemo alone
                        If you want interactive mutable data/ computation is async: useState+useEffect

## 🔸 Q: What if I use useMemo in a component that's not wrapped with React.memo?
            Still useful if:
                You're doing expensive computation
                You need stable object/array references
                You're using the result inside useEffect or passing it to memoized children
                ✅ It's a performance optimization, not limited to memoized components   

## 💥 What happens when a component unmounts?
        All of its state, refs, effects, and memoized values are discarded.    

## 🔒 useMemo does not persist across unmounts only across renders                                   

## useMemo vs useEffect
    Hook	        Purpose
    useMemo	        Compute and memoize a value during render
    useEffect	    Run side effects after render (DOM, logging, subscriptions, fetching, etc.)                            


## code
    (note: in useMemo fn, follow rules of pure fn)

    D1. take value from a prop and have a compute() that runs everytime before return(),
        memoised_value used in return() , usememo will have prop dependency
    D2. usememo independent - 2 possibilities: usestate vs usememo    
    D3.  compute idea: sort,filter,map
    4. set state from props
        const data = useMemo(() => props.users.filter(u => u.active), [props.users]);
        when props change 'data' will be updated (so prevents stale props and state sync)
        do not use: if state set by props need to be explicitly modified in compoennt
                    use setState+useeffect then
        If you want interactive mutable data, use useState.
        If it's just a view transformation, useMemo is better.
    5.  memoize an object
            - passed as a prop memoized child component
            - passed as a useEffect dependency
            - passed as a useCallback dependency
    6.  code very good scenario 
    7.  memoized value in a useEffect dependency
    8. case 1: props -> sync compute -> memoized -> return() [useMemo]
       case 2: props -> sync compute -> memoize -> useEffect has memo dep -> some sideeffect task (but not setting usestate) [usememo+useeeffect]
       case 3: props -> useffect has props dep -> sideeffect -> set usestate

       case2 vs 3:
            sync vs async
            value av before init render vs value av after init render

## scenario
    parent -> child takes prop data (fetch response in useEffect) ->
    now parent state changes
    -> child will re-render (how to prevent it?)
    Answer: if child prop data (state+fn) is stable, re-render will be prevented
            child component need to be react.memo

## think:
    event handler doubt?
        uscallback is more preferred, since an event hanlder just does some functionality
        it does not return anything, even if it does return a value, you cannnot use it anywhere      