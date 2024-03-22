import { createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';
import { Todo } from '../model/todo.model';

export type TodosFilter = 'all' | 'active' | 'completed';
export interface TodoState {
  todos: Todo[];
  loading: boolean;
  filter: TodosFilter;
}

export const initialState: TodoState = {
  todos: [],
  loading: false,
  filter: 'all',
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
