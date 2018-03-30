Use the below command to initiate a node project
    npm init

A package.json file will be created.


Create a script target in 'scripts' property in package.json file.
    "start": "tsc && node ./out/index.js"
We are chaining commands here.
    tsc (compiles TypeScript based on 'tsconfig.json' file)
    node ./out/index.js (executes 'index.js' file)
Note: 'index.js' is the starting point of our application. It is configured in 'package.json'


use the below command to run the app
    npm start

