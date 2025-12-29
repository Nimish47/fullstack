## CSS Overflow

## Coding with pointers

1. Assign width, height to container => 
    child div = story => 
        play with font sizes =>
             play with different overflow values
    ## overflow: visible (default) / scroll / hidden / auto

2. overflow: hidden
    => watch how it hides overflowing content
    => no x, y scroll appears  
    => clips overflow content, no scroll bars appears 

3. overflow: scroll
    => see how scroll appears x,y when content overflows
    => see if content is good, (no overflow needed), still x,y scroll space taken
    => x,y scroll appears wheter contetn overflows or not

4. overflow: auto
    => see its dynamic nature
    => make div's content 
        -> big enough for scrollbars to appear
        -> small enough for scrollbars to vanish

5. horizontal scrollbars
    => use very long words for horizontal scrolls to appear 
    => validate with "auto" and "scroll"

6. overflow: auto + overflow-x: hidden
    => nice combo (look good)
    => but exposed if long word
    => better let it "auto" since it adds x-scroll only if needed
    => x or y scroll appears     only if needed with auto      