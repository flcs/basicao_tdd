# react_tdd

## npx jest --init 
✔ "test" script in "package.json"? … yes
✔ Typescript for the configuration file? … no
✔ environment  › node
✔ coverage reports? … no
✔ provider for coverage? › v8
✔ Automatically clear every test? … no


  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],

  // The glob patterns Jest uses to detect test files
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],

  preset: "ts-jest",
  testEnvironment: "node",


## npx tsc --init 

  "moduleDetection": "auto",                /* Control what method is used to detect module-format JS files. */

  "experimentalDecorators": true,         /* Enable experimental support for TC39 stage 2 draft decorators. */
  "emitDecoratorMetadata": true,          /* Emit design-type metadata for decorated declarations in source files. */

  "moduleDetection": "auto",              /* Control what method is used to detect module-format JS files. */

  "rootDir": "./",                        /* Specify the root folder within your source files. */
  "moduleResolution": "node",             /* Specify how TypeScript looks up a file from a given module specifier. */

  "baseUrl": "./src",                        /* Specify the base directory to resolve non-relative module names. */


  "outDir": "./dist",                         /* Specify an output folder for all emitted files. */


  "esModuleInterop": true,                   /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */

  "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */
  "resolveJsonModule": true,                        /* Enable importing .json files. */


  "forceConsistentCasingInFileNames": true,  /* Ensure that casing is correct in imports. */


  "strict": true,                            /* Enable all strict type-checking options. */


  "skipLibCheck": true                       /* Skip type checking all .d.ts files. */
