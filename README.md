# Relay Compiler Webpack Plugin Example

[![Build Status](https://travis-ci.org/danielholmes/relay-compiler-webpack-plugin-example.svg?branch=master)](https://travis-ci.org/danielholmes/relay-compiler-webpack-plugin-example)

Example project setup for testing out 
[relay-compiler-webpack-plugin](https://github.com/danielholmes/relay-compiler-webpack-plugin).


## Dependencies

 - [NodeJS](https://nodejs.org/)
 - [Yarn](https://yarnpkg.com/) (tested with 1.3.2)


## Setting Up

```bash
yarn
```


## Running

```bash
yarn generate-schema
yarn backend
```

```bash
yarn clean
yarn frontend
```

Site now available at [http://127.0.0.1:3000](http://127.0.0.1:3000).

Or for a single webpack build:

```bash
yarn build
```


## Direct relay-compiler Call

To help see differences with webpack plugin vs direct invocation.

```bash
yarn relay-compile
```
