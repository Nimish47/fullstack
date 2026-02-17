## steps to follow

## test fns (for good/average/perfect scenarios)
=> functions that take good amount of time (in seconds)

## Watch procoderr to get started

## Write a memoize utility
    1. sum(a,b)
    2. two parameters
    3. don't create wrapper but transform sum() directly

## Write a memoize utility (AVERAGE)
    1. "any" fn that takes primitives as args
    2. use object approach
    3. use json.stringify approach
    4. test with mutiple types of fns
    5. utility is wrapper fn

## Write a memoize utility (GOOD)
    1. "any" fn taht takes primitives/non-primitives as args
    2. use map approach
    3. no json.stringify
    4. test with multiple fns
    5. an ideal utility for most cases
    6. utility is wrapper fn

## Write a memoize utility (PERFECT)
    1. all features as GOOD memoize
    2. cache has a "limit"
    3. test with many fns
    4. utility is wrapper fn

## how react's dependency array is a cache key - theory to visit!