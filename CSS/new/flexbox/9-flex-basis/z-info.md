## flex-basis

by default flex-basis: auto

## code scenarios
(all these flex-specific props are assigned to individual items )
1. flex items have no width + no grow/shrink
    >> flex-basis = 0 + grow/shrink = 0 (no width)
    => takes only content-size

2. flex items acquire fixed width (no grow/shrink)
    >> flex-basis = 200px + grow/shrink = 0 (no width)
    => width locked at 200px
    => scrollbar appears if continer size reduced

3. flex items grow/shrink as per space in container
    >> flex-basis = 200px + grow/shrink = 1 (no width) (flex: 1 1 200px)
    => grows and shrinks based on container size

4. see who wins? width v/s flex-basis
    >> flex-basis: 200px and width: 100px (no grow/shrink)
    => flex-basis wins

5. width is useless here
    >> flex: 1 and width: 200px
    => yes it is, haha