# typescript-learning-course
This is my TS learning session


# Install yarn
yarn add

# Install npm
npm install

# Install nodemon with TS
npm install --save-dev ts-node nodemon

# Install TSC
tsc --init

# Use tsc watch to see errors
tsc -w

# Run nodemon 
nodemon [filename].ts

# Use TSC to see the results
tsc (one time comply)
tsc --watch (realtime comply)


# tsconfig.json 4 main files
1. "target":"es2016" is specificate ts compiles to JS es2016 (You can do more ES by edit at type version)
2. "rootDir":"./" is folder's position that stores ts file group
3. "outDir":"./dist/" is folder's position that stores JS compiled file group such as "dist folder" and etc. 
4. "include":["src", ....] defined file which you want to compile such as files in src folder and etc.
