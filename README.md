# Lumen5 Frontend Engineer (React)

## 1. Data structure for how I would store the data

There are two data items which I would use for this task:

1. `todos: Array<{id: number, category: string, text: string, complete: boolean}>`

    each element is ``
     
1. `categoryFilter: string`

## 2. Factors and tradeoffs

Main factor was simplicity and consistence of data. When todo is added, category list is calculated automatically therefore it's always up to date.

The only tradeoff is calculating of category list. This is synthetic string list which should be cached normally, but not extracted on the go.

## 3. filterTodos

This function itself is located at [src/components/TodoList/filterTodos.js](src/helpers/filterTodos.js)

Tests for this function are located at [src/components/TodoList/filterTodos.test.js](src/helpers/filterTodos.test.js)

Tests can be run by the command `npm test`

## 4. Components

I used 4 components. They are functional components. `AddForm` component uses local state via hook `useState`. All components have dispatched properties.

List of components:

1. `App` (main component, to wrap up everything)
1. `CategorySelector` (to change todos filtering)
1. `TodoList` (main component which renders list of filtered todos)
1. `AddForm` (simple form for adding new todo and specify its category)

## 5. Redux

I have already implemented the application using Redux.

Actions:

1. `ADD_TODO`
1. `TOGGLE_TODO_COMPLETE`
1. `SET_CATEGORY_FILTER`

Reducers:

1. `todos`
1. `categoryFilter`

## How to use this repo

### Install dependencies:

```bash
npm ci
```

### Launch dev server:

```bash
npm start
```

### Build for production:

```bash
npm run build
```
