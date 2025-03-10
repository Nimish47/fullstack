# ENVIRONMENT VARIABLES IN A REACT APP CREATED USING CREATE-REACT-APP

# what is an environment variable? definition kya hai?
    - An environment variable is a key-value pair used to store configuration settings for software applications.
    - Environment variables are essential for separating configuration from code.
    - These variables help manage settings that may change depending on the environment without modifying the 
      the actual code.
    
# why use environment variables?
    1. Configuration Management: Store settings like API URLs, database connections, and authentication keys    separately from the code.
    2. Security: Prevent hardcoding sensitive information (although in frontend apps like React, they are still exposed).
    3. Portability: Makes applications easier to deploy in different environments.
    4. Flexibility: Allows different configurations for development, staging, and production.

# how many environments provided by React App build using create-react-app?
    Three, development, test and production.

# explain development environment in detail
    "Development mode" refers to a software environment where applications are built, tested, and debugged before being deployed to "production mode"

    Key Features of Development Mode:
        Debugging Tools Enabled – More error messages, warnings, and stack traces are available.
        Hot Reloading – Changes in the code automatically update the application without restarting.
        Unoptimized Performance – Code is not minified or optimized, making debugging easier.       
        
    React apps run in development mode by default when using:
        npm start

    React apps run in production mode by default when using:
        npm run build
        start server (whatever the command)
        serve -s build (in local)    
        
    In development mode, React shows extra warnings, like: (below not verified)
        Strict Mode Warnings
        Deprecation Warnings
        Prop Type Errors   

# development mode v/s production mode 
    Feature	                 Development Mode 🛠️	              Production Mode 🚀
    Debugging	             ✅ Enabled	                        ❌ Disabled
    Performance	             ❌ Slower	                        ✅ Optimized
    Error Messages	         ✅ Detailed	                        ❌ Hidden
    Security	             ❌ Less secure	                    ✅ Hardened
    Code Optimization	     ❌ Unminified	                    ✅ Minified     

# can i create a custom environment like qa? (for React App built via cra)
    Yes, with the use of dotenv library.
    Search the web for more details.

# how to define a environment variables file?
    Create a .env file at the same level as package.json
    If no other .env type files defined, it caters to both development and production environments.

# environment file for all/environment-specific environments
    We can have many but here are the most important ones:
        .env: default
        .env.development, .env.test, .env.production: Enviroment specific

     If all .env,.env.development and .env.production are present,
     Priority in DEVELOPEMENT would be:
        .env.development > .env
     Priority in PRODUCTION would be:
        .env.production > .env

     If only .env present,
       it would be used in all DEVELOPMENT,TEST AND PRODUCTION environments.  

# access environment in which React App is running from a React Component
    process.env.NAME_OF_ENVIROMENT_VARIABLE

# global environment variables in a React App
    Already available and we cannot override it's value
    There are multiple, but most common is NODE_ENV
    Ex- process.env.NODE_ENV

# process.env.NODE_ENV
    A global environment variable that tells in which environment our app is running.
    Default values for react app created using cra:
        development,test,production
    You cannot override NODE_ENV manually.   

# custom environment variables in a React App
    Custom env variables should follow a strict naming convention:
        Start with REACT_APP
        Example: REACT_APP_URL, REACT_APP_DB etc

# access environment variables from index.html (public folder)
    %NAME_OF_ENVIROMENT_VARIABLE%

# set title of a React App based on environment it is running (2 ways)
Way1:   If we have only one .env file, better to set from React Component:
            Can be done using document.title and process.env.NODE_ENV
            See commented useEffect code in App.js

Way2:   If we have environment specific .env files, better to set title directly in index.html using:
            %NAME_OF_ENVIROMENT_VARIABLE%

# should API keys be stored be stored in environement variables? if not, then where?
    Do not store any secrets (such as private API keys) in your React app!
    Environment variables are embedded into the build, meaning anyone can view them by inspecting your app's files.

# for long .env variables we can shorten them like: 
    DOMAIN=www.example.com
    REACT_APP_URL_DEV=$DOMAIN/dtripdocs
    REACT_APP_URL_PROD=$DOMAIN/tripdocs   

# don't(s)
    1. Don't add any if else conditions in .env type files

# good practices