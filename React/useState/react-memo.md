## react.memo

## explain default behaviour of comparer fn in react.memo and
## explain what things we can do in comparer fn

## explain parent-child re-render relationship

## code
    1done. Bad:  <Component config={{ theme: 'dark' }} />
       Good: 
       const config = useMemo(() => ({ theme: 'dark' }), []);
       <Component config={config} />
       This helps React.memo children avoid re-render due to reference changes.

    2.  const filtered = useMemo(() => expensiveFilter(data), [data]);
        return <MemoizedChild list={filtered} />; // prevents re-render of MemoizedChild      

    3. memoized fn (usecallback) passed as prop to a memoized (react.memo) component
            a. single child
            b. may childs like a List from a map fn
                    what happens if some other state changes in parent 
                        compare response with and without usecallback

    4. try anshu use case
        each list is a seperate component
        all lists in one compoenent

    5done.  normal parent - memo child
            props state: memoized
            props fn: memoized
            compare re-rendering: previous vs after

    6done. continue with 5 but:
            memo child:
                usecallback for fns
                and memo for some vals
                and side effects: fetch op in useeffect        
    7. try diff comparer fns                       