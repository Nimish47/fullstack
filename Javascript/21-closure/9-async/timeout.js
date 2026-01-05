// agenda: closure with timeouts

// points
// closure behave the same with timeouts
// they remember "reference"
// behaviour again depends on whether you remember : let/const OR var


// case:: 
// pass let,const,var to a timeout fn
// outer fn returns timeout
// outer fn executed and removed from stack
// try to update let,const,var
// see if setTimout retuerns stale value


