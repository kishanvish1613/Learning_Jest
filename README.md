# Set-up Jest

Remember: if you are using module-js 

- create a file .babelrc 
- inside babelrc file
- copy & paste
    ```
    {
        "env": {
        "test": {
            "plugins":  ["@babelplugin-transform-modules-commonjs"]
            }
        }
    }
    ```
- install
    ```
    npm install --save-dev jest @babel/plugin-transform-modules-commonjs
    ```
- Done

for more info
`https://how-to.dev/how-to-set-up-jest-for-es-module`
this doc
