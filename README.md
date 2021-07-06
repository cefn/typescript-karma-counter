# Counter (Typescript)

This repo is a reference configuration for debugging and testing Typescript React code. It uses Karma, Jasmine, React-Testing-Library.

It uses Webpack Server to launch an app or Karma to launch a test suite within any supported browser. In both cases, sourcemaps enable line-by-line debugging of Typescript source from within the browser or using VSCode.

## Install the project

```
npm install -g pnpm 
pnpm install
```

## Run the example application

```
pnpm run start
```

After launching the application should be available at http://localhost:8080

You can use the 'Debug App' target in the VSCode [launch.json](.vscode/launch.json) to interactively debug [app.tsx](./src/app.tsx) from within an IDE with Typescript sourcemapping.

## Run the tests


```
pnpm run test
```

## Debug the tests

```
pnpm karma start --browsers Chrome
```

After launching the test suite can be run at http://localhost:9876/debug.html

You can use the 'Debug Tests' target in the VSCode [launch.json](.vscode/launch.json) to interactively debug e.g. [app.test.tsx](./test/app.test.tsx) from within an IDE with Typescript sourcemapping.

# About the App

This simple Typescript app defines shared state independently of React, then binds React views and controls to it. See also the [Javascript version of this app](https://github.com/cefn/lauf/tree/main/apps/counter-js)

Visit https://codesandbox.io/s/github/cefn/lauf/tree/main/apps/counter to see the code and run it in an sandbox

See [index.tsx](https://github.com/cefn/lauf/tree/main/apps/counter/src/index.tsx) to understand how it works.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
