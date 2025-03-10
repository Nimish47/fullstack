TOPIC # WAYS TO DEFINE AND IMPORT EXTERNAL CSS STYLESHEETS IN A REACT COMPONENT
TOPIC # filename.css v/s filename.module.css
TOPIC # CSS Modules definition

filename.css
    A regular CSS file that applies styles "globally".
    Classes defined in filename.css will be available throughout the React App.
    It does not provide scope isolation, meaning styles can affect other components. (yes!)

filename.module.css
    Uses CSS Modules, which scope styles "locally" to the component. 
    Prevents class name conflicts by generating unique class names (does some hashing etc behind the scenes)
    Classes defined in filename.module.css won't be available throughout the React App.

To verify classes inside filename.css are accessible globally, check:
    index.css -> italicText class which is referenced in About1.jsx and works!

Why we should not use filename.css and rather use filename.module.css?
    See Home.jsx and About1.jsx
    Both use filename.css type referencing
    Both have class : "general"
    Home.css has backgound color of "orange" in "general" class
    About1.css has backgound color of "blue" in "general" class

    However, starting the app, we can see Home.css's "general" overrrides About1.css's "general"
    Hence, a conflict is created, because filename.css has a "global scope".
    We did not import "general" class of Home.css in About1.css, still it override our class.
    That's because it was available globally.

    Now, see About2.jsx
    It implements About2.module.css
    When code is compiled, class of About2.jsx is hashed and a "unique" classname is assigned to it.
    Hence, "general" class of About2.module.css does not get overriden by "general" class of Home.css   

    Want to resolve conflict of About1.jsx
    Just uncomment the code and use About1.module.css
    See magic!!

Note:
    filename.module.css can still be referenced across multiple components but its not a good idea
    filename.module.css purpose is to be used locally for that component

    If you want to use certain classes globally, define them in filename.css (like index.css)   
    And better refer the filename.css type of file at root level, like in index.js 


CSS MODULES
    A CSS Module is a CSS file where all class names and animation names are scoped locally by default.
    Written in the format: filename.module.css 
    CSS Modules allows the scoping of CSS by automatically creating a unique classname of the format [filename]\_[classname]\_\_[hash].
