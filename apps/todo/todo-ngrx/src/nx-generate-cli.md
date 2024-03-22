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
2. Define the actions for the ToDo item in `~/todo-ngrx/+state/todo.actions.ts`
3. Define the reducer for the ToDo item in `~/todo-ngrx/+state/todo.reducer.ts`
4. Define the selectors for the ToDo item in `~/todo-ngrx/+state/todo.selectors.ts`
5. Define the effects for the ToDo item in `~/todo-ngrx/+state/todo.effects.ts`
