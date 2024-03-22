import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TodoState } from './todo.reducer';
import { Todo } from '../model/todo.model';

// Get the feature state
const getTodoState = createFeatureSelector<TodoState>('todo');

// Get all todos
export const getAllTodos = createSelector(
  getTodoState,
  (state: TodoState) => state.todos
);

// Get a specific todo by ID
export const getTodoById = (id: number) =>
  createSelector(getAllTodos, (todos: Todo[]) =>
    todos.find((todo) => todo.id === id)
  );

// Get the total number of todos
export const getTotalTodos = createSelector(
  getAllTodos,
  (todos: Todo[]) => todos.length
);
