import { ActionReducer, Action } from '@ngrx/store';
import { TodoState, todoReducer } from './todo.reducer';
import { TodoEffects } from './todo.effects';

// AppState interface will define all the feature properties of the application.
// Here we have a single feature called as todo which is of type TodoState. We
export interface AppState {
  todo: TodoState;
}

// AppStore interface will define all the reducer types used in our app.
// In this case we have a single todo reducer so we will map the todoReducer
// to the todo property. appStore will be used to config our Store Module.
export interface AppStore {
  todo: ActionReducer<TodoState, Action>;
}

export const appStore: AppStore = {
  todo: todoReducer,
};

// appEffects will have the array of defined effects classes.
// This will be used to register the effects in the application.
export const appEffects = [TodoEffects];
