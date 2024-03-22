# Angular ToDo NgRx Application

[Step-By-Step Guide for integrating NgRx State Management in Angular 16](https://dev.to/codecraftjs/step-by-step-guide-for-ngrx-with-angular-16-30jd)

## Start the application

Run `npm run todo-ngrx` or `npx nx run todo-ngrx:serve:development` to start the development server.

## Create new @nx/angular:application

To execute tasks with Nx use the following syntax `npx nx g @nx/angular:application <options>`

```
npx nx g @nx/angular:application --name=todo-ngrx
--bundler=esbuild
--projectNameAndRootFormat=as-provided
--setParserOptionsProject=true
--style=scss
--no-interactive
--dry-run
```

## Install NgRx

```
npx nx generate @nx/angular:ngrx-root-store --project=todo-ngrx --no-interactive --dry-run
```

This command will update the `package.json` and `app.config.ts` files with the necessary NgRx dependencies.
For more information on installation, see the [NgRx Installation](https://ngrx.io/guide/store/install).

## Code Walkthrough

1. Define the model for the ToDo item in `~/todo-ngrx/models/todo.model.ts`
   ```typescript
   export interface Todo {
     id: number | string;
     title: string;
     completed: boolean;
   }
   ```
2. Define the actions for the ToDo item in `~/todo-ngrx/+state/todo.actions.ts`

   ```typescript
   import { createAction, props } from '@ngrx/store';
   import { Todo } from '../model/todo.model';

   // Load Todos
   export const loadTodos = createAction('[Todo] Load Todos');

   // Add Todo
   export const addTodo = createAction('[Todo] Add Todo', props<{ todo: Todo }>());

   // Update Todo
   export const updateTodo = createAction('[Todo] Update Todo', props<{ todo: Todo }>());

   // Delete Todo
   export const deleteTodo = createAction('[Todo] Delete Todo', props<{ id: string }>());
   ```

3. Define the reducer for the ToDo item in `~/todo-ngrx/+state/todo.reducer.ts`

   ```typescript
   import { createReducer, on } from '@ngrx/store';
   import * as TodoActions from './todo.actions';
   import { Todo } from '../model/todo.model';

   export interface TodoState {
     todos: Todo[];
   }

   export const initialState: TodoState = {
     todos: [],
   };

   export const todoReducer = createReducer(
     initialState,

     on(TodoActions.addTodo, (state, { todo }) => ({
       ...state,
       todos: [...state.todos, todo],
     })),

     on(TodoActions.updateTodo, (state, { todo }) => ({
       ...state,
       todos: state.todos.map((t) => (t.id === todo.id ? todo : t)),
     })),

     // id is either a number or a string
     on(TodoActions.deleteTodo, (state, { id }) => ({
       ...state,
       todos: state.todos.filter((t) => t.id !== id),
     }))
   );
   ```

4. Define the selectors for the ToDo item in `~/todo-ngrx/+state/todo.selectors.ts`
5. Define the effects for the ToDo item in `~/todo-ngrx/+state/todo.effects.ts`
