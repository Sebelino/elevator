# Stabelo code test

## Description

This is the code skeleton for the stabelo code test. It provides initial setup for frontend and backend in the intrest
of saving time. It consists of two projects. Frontend and backend. Frontend has a simple react ui set up and the backend
has a simple rest controller sample.

## Running

Both the frontend and the backend has the following npm scripts

* `npm run clean`
    * Used to clean the workspace
* `npm run build`
    * Builds the source files
* `npm run develop`
    * Runs the application locally

May also be needed:

```bash
npm install typescript -g
npm install --prefix=./backend
npm install --prefix=./frontend
```

## Usage

Run backend:

```bash
npm run develop --prefix=./backend
```

Run frontend:

```bash
npm run develop --prefix=./frontend
```

Then open http://localhost:8080/implementation in the browser.

Initially, all elevators will be located at floor 1. You can use the buttons to call the nearest elevator to the
requested floor.

![image](https://user-images.githubusercontent.com/837775/164991999-532c02c2-d887-4d3e-a533-e4a362d83bf2.png)
