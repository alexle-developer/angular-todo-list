import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TodoState } from './todo.reducer';
import { Todo } from '../model/todo.model';

// Get the feature state
const getTodoState = createFeatureSelector<TodoState>('todo');

// Get all todos
export const selectTodos = createSelector(
  getTodoState,
  (state: TodoState) => state.todos
);

// Get a specific todo by ID
export const selectTodoById = (id: number) =>
  createSelector(selectTodos, (todos: Todo[]) =>
    todos.find((todo) => todo.id === id)
  );

// Get the total number of todos
export const getTotalTodos = createSelector(
  selectTodos,
  (todos: Todo[]) => todos.length
);

// create selecter for isLoading
export const selectTodoLoading = createSelector(
  getTodoState,
  (state: TodoState) => state.loading
);
