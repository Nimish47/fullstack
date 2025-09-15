## How to empty the complete state ?
     for a specifi feild:
        buyIceCream: (state, action) => { state.count = state.count - action.payload }
      to empty whole object:
           buyIceCream: (state, action) => { return {} }

## 2 things understand with Immute
     1. how to update a particular property
     2. how to update whole state?           

     