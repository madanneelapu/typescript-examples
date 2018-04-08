Use the below command to initiate a node project
```
    npm init
```
A `package.json` file will be created.


Create a script target in `'scripts'` property in `package.json` file.
```
    "start": "tsc && node ./out/index.js"
```
We are chaining commands here.
>    tsc (compiles TypeScript based on 'tsconfig.json' file)
>    node ./out/index.js (executes 'index.js' file)
Note: 'index.js' is the starting point of our application. It is configured in 'package.json'


use the below command to run the app
```
    npm start
```



Installing dependencies into the project:
We shall install 'lodash' (a JavaScript library to operate on DataStructures).
    npm install lodash --save
The above command adds 'lodash' as a dependency to 'package.json'. Downloads the related files from npm repo and puts them in 'node_modules' folder.

import 'lodash' using  the below line of code:
    import * as _ from 'lodash'; 
'*' means import everything. '_' is an alias for lodash.
Note: when we import node modules, we don't use relative paths.

This might show up as an error in TypeScript. Also when you use lodash using the alias(_), you might not get the auto-completion support. This is because, TypeScript could not resolve the type information of lodash.
In general, node modules are JS files. They have no type information associated with them.

So, we also have to install another node package
    npm install @types/lodash --save-dev
This will install the type definitions module of lodash into 'node_module/@types' folder.
This is also added as a development dependency to 'package.json'.
Now that TypeScript has all the type information, the import statement doesn't show an error and we have the auto-completion support.




