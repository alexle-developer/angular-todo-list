import { createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';
import { Todo } from '../model/todo.model';
import { ToDosData } from '../model/todo-mock-data';

export type TodosFilter = 'all' | 'active' | 'completed';
export interface TodoState {
  todos: Todo[];
  loading: boolean;
  filter: TodosFilter;
}

export const initialState: TodoState = {
  todos: ToDosData,
  loading: false,
  filter: 'all',
};

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.loadTodos, (state) => ({
    ...state,
    loading: true,
  })),

  on(TodoActions.loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos,
    loading: false,
  })),

  on(TodoActions.loadTodosFailure, (state) => ({
    ...state,
    loading: false,
  })),

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
