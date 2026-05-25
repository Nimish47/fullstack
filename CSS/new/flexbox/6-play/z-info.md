## its very difficult to position items within a container at will using only flexbox

## try and play with play.html to understand

## main issue is align self we can align items at will on cross axis, but no property as justify-self so
## can't psoition at will on main axis


## code-show

1. imitate thsi layout
        TLT             RLT

                CEN

        BLT             BRT        

=> we cannot imitate this layout, position wins yet again!

THIS IS WHY FLEXBOX USED FOR 2-D LAYOUTS ONLY


## others
>> main issues is you can move items at will on - cross axis (via align-items)
>> but you cannot on main axis (no such thing as justify-self)

>> centering only good if parent has only one child, that's it