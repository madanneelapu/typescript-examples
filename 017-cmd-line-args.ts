//We can use some command line arguments when we compile TypeScript files using 'tsc' command.

/*
  tsc ./017-cmd-line-args.ts
  compile TypeScript to JavaScript and generate JS file with same name as TS file.


  tsc ./017-cmd-line-args.ts --outFile ./017-cmd-line-args-output.js
  custom output file name


  tsc ./017-cmd-line-args.ts --outFile ./017-cmd-line-args-output.js --watch
  watch for changes and compile every time we change the TypeScript file.
*/


class Test{
    id;
    name;

}

var fooTest = new Test();