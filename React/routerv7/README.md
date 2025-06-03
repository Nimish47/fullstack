## React Router oomfs


## to run a production build:
   npm run build
   npx serve -s build

## Router v7 Intro:
      React Router v7 builds upon the architecture changes introduced in React Router v6.4, and it continues to use concepts 
      like Data Routers, Loaders, Actions, and Deferred Data. Let's break this down clearly:

      📌 React Router v6.4 – A Major Shift
         In v6.4, React Router introduced the "Data Router" architecture, which was a significant departure from earlier versions.
         It made React Router more like a full-featured routing framework by adding the ability to:
               Load data before rendering components (loaders)
               Handle form submissions (actions)
               Provide error handling at route level
               Use <Await /> and defer() for lazy data loading

      ✅ What Does "Data Router" Mean?
         Instead of just matching routes and rendering components, React Router now:
               Handles data loading (loader)
               Handles mutations / submissions (action)
               Handles pending UI states (useNavigation)
               Handles errors at route level (via ErrorBoundary)
               All this is controlled via a route configuration.


## useParams:
    Always returns strings: Even if the param looks like a number, it’s a string.

    Must be inside a route: useParams only works inside components rendered by <Route>. If you call it outside of that context, it will return an empty object or throw an error.

    param works well with useEffect dependency (like state)

 ## useLocation:
    used to access below properties:
        | Property   | Description                                                 |
        | ---------- | ----------------------------------------------------------- |
        | `pathname` | The path of the URL (`/home`, `/about`)                     |
        | `search`   | The query string part of the URL (e.g. `?id=10&sort=asc`)   |
        | `state`    | Any state passed using the `state` property in `navigate()` |
    
 ## loaders:
    return response.json();

    - when fetching data from loader function we return a promise and not 
      function but it still works       
    - its because React Router's loader functions can return either a value or a Promise.
    - React Router sees the Promise and waits for it to resolve.
    - The resolved data is then passed to your component via useLoaderData().
    - when loader handles an error, it shows our custom UI, however key thing is that 
      the route remains the same!

## useParams vs uselocation vs useSearchParams

## <Link> vs <Navigate> 
   both navigate to a route
   we can send state data with both but both have different use cases

## A thing on navigate()
    if you use navigate() to navigate to the same route you're currently on with the same location object (path + search + hash), the component will not re-render by default.

      Change Type	                        Will Re-render?
         Same path	                        ❌ No
         Different query	                  ✅ Yes
         Different state	                  ✅ Yes (if used)
         Force navigate with replace	      ✅ Possibly   

## A thing on navigate() and loaders
   "state" passed in navigate() cannot be accessed in navigated route's loader
   "query params" can be accessed 
   "url" can be accessed        

## A thing on query params:
   query params can be modified via both: old and new way
   set method
   but i dont see a feasible usecase for that, perhaps in future

## to understand {replace: true} in navigate:
   excellent usecase is in refreshHandler function of:
      QueryHandler.jsx
    remove replace and back button: play around to see power of replace param  


## useSearchParams benefit over useLocation
   handle query very easily, reducing bolierplate
   like a setState, so accessible everywhere in component

## useLocation benefit over useSearchParams:
   - much more than just handling query
   - provides access to PATHNAME and STATE and more which are not possible by just using useSearchParams

## useSearchParams and useLocation both can't be used in loaders.
   have to use the request object of loader function

## data-APIs introduced in react-router-v7
   React Router v7 (and React Router v6.4+) introduces Data APIs, which are key to building modern, data-driven single-page apps (SPAs) with features like data fetching, mutations, deferred loading, and error handling tightly integrated with the routing system.

         # loaders
         # actions
         # errorElement
         

## handling an error in React: key points
      
   ## breakthrough changes react router v6.4+ and createBrowserRouter   
      ## starting react router v6.4+ and "createBrowserRouter", everything is route based.
      ## at top we have root component like App for '/' route.

   ## idea of error handling
      ## idea is that if some unfortunate error occurs in React App, we take our app to a very pretty fallback UI
         so that it keeps good impression to end user
      ## we log errors somewhere for us to examine
      ## fallback UI should be clean and not show any actual error
      ## actual error to be stored in some file/console/server etc to be examined later     

   ## an error can happen at below places in React App lifecycle
            1. loaders,actions
            2. route components
            3. child components of route components
                  ## child components can be route or non-route based
                  ## child components can have further nested childs and so on.
            4. errors during initial render phase
                  ## since in react all components are loaded at initial load only, so this is not an issue
            5. useEffect
                  A. synchronous task
                  B. asynchronous task      
            6. event handlers
                  ## event handlers occur when user does something or anytime after initital render phase
                  ## event handlers logic can have synchronous/asynchronous code
            7. domain right but wrong url like: http://localhost:3000/about/dwdw      

   ## how to handle which above scenarios:
      ## errorElement (by router v6.4+)
               ## most scenarios handled by this guy 
               ## 1,2,3,4,5A all handled by this guy
               ## cannot handle errors in components loaded after initial load (non-route-component)
                     ## this is because react router wouldn't know
               ## cannot handle 5B (async so after initial load obviously)
               ## cannot handle 6 as they take place event handlers trigger after initial render (obviously)

       ## try catch (and navigate)
               ## 5B and 6 can be handled by it
               ## for fallback ui use navigate

        ## wildcard route
               ## 7
               ## check last route in index.js       

   ## whats up with ERROR BOUNDARY
       ## no need if you use router 6.4+ and creteRouterBrowser
       ## no longer cataches errors in apps build with router 6.4+ and createRouterBrowser
       
       ## [errrorElement + try catch] solves almost all problems

       ## just for visual: check errroboundary folder

       ## definition for interview:
         ## An Error Boundary is a component that catches JavaScript errors in its child component tree, logs those errors, and displays a fallback UI instead of the component tree that crashed.

         ## It only catches errors during rendering, lifecycle methods, and constructors in class components or inside the render phase of functional components.

   ## final say on error handling in react:
      🔥 There’s no unified, ergonomic way to handle both render-time and event-time errors across a large app without a mix of errorElement, manual try/catch, wildcard route and others.

      Lets see what happens in future!  
   
## errorElement of router v6.4+
   ## The errorElement is part of React Router’s routing system.

   ## why use it?
      ## render a fallback UI component when an error occurs during data loading or "initial rendering" of a route.
      ## It allows developers to "gracefully" handle and display errors.
      ## React Router passes the error to your error component via the useRouteError() hook

   ## It only handles errors thrown from:
      ## loader functions
      ## action functions (form-related)
      ## component rendering (INITIAL RENDER)
            ## errros in main route component initial rendering
            ## errors in "non-route child component (Badbubble for ex)" of a "route component (About for ex)",
               during initial render.
      ## navigation (e.g., redirect issues)

   ## cannot handle errors:
      ## errors in onClick 
      ## errors in useEffect

   ## error bubbling:
      ## if multiple errorELements from root to nested child "route" it:
            ## Falls back to nearest defined errorElement up the route tree   
      ## if we have a root errorElement then it handles:
            ## errors in all loaders/action fns down the tree
            ## error during initial render of route component  (except useEffect)    

   ## to print error messages use logic in: EoorErrorElement
      ## since error can come from different sources.     

   ## summary and piece of advice:
      ## use a combination of errorELement and error boundary
      ## use errorElement to handle errors in loaders/actions
      ## for any error in component use ERROR BOUNDARY, because:
         ## handles more variety of errors in components (like onCLick,useEffect)
         ## gets more preference over errorELement
      ## for errors in loaders/actions, use errorElement since ERROR BOUNDARY cant handle them

   ## errorElement test scenarios    
      ## error in any loader: handled
      ## error in route component [ONLY AT INTIAL LOAD]:
            ## any error at initial load is handled except:
                  ## async activities in useEffect: not handled
                  ## sync activities in useEffect at (initial load): hanlded
      ## error in child of route component (child has no seperate route)
                  ## async activities in useEffect: not handled
                  ## sync activities in useEffect at (initial load): hanlded 
      ## ANY KIND OF ACTIVITY IN ROUNTE AND CHILD COMPONENTS AFTER INITIAL LOAD: NOT HANDLED
                  ## ex: event handlers like onCLick etc.
      ## async acts whether in useEffect or event Handler:
                  ## cant be handled by a errorElement
                  ## enclose it in try catch and for fallback ui use navigate(See code in worstBubbl.jsx)                              

   ## explanation of why errorELement can handle errors due to synchronous activities in useEffect
      ## before react 18, this was not possible. errorElement could not handle useEffect errors.
      ## React 18 introduced automatic error recovery with useEffect, and React Router v6.4+ integrates deeply with this behavior
      ## If a useEffect in a route component (or a child of it) throws synchronously during its execution (not in an async callback), React Router can capture that via errorElement
      ## Because: React 18 causes this to re-render the route, and React Router's error boundary (errorElement) gets another chance to catch it.


   ## Source-map-explorers
   