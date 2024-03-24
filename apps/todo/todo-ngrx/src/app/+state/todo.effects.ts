import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoService } from '../services/todo.service';
import { switchMap, map, catchError, EMPTY } from 'rxjs';
import * as TodoActions from './todo.actions';

// To use NgRx Effects, you need to register them in the app.config.ts file.
// The app.config.ts file is where you define the providers for the application.
// The provideEffects() function registers the effects with the NgRx store.
// The provideStore() function registers the reducers with the NgRx store.

@Injectable()
export class TodoEffects {
  // The loadTodos$ effect listens for the loadTodos action and
  // then calls the service to get the todos.
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      switchMap(() =>
        this.service$.getTodos().pipe(
          map((todos) => TodoActions.loadTodosSuccess({ todos })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  // To use the NgRx Effects, you need to inject the Actions service and
  // the service that you want to use in the effect.
  constructor(private actions$: Actions, private service$: TodoService) {}
}
