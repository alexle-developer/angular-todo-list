import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Todo } from '../model/todo.model';
import { TodoService } from '../services/todo.service';
import { inject } from '@angular/core';

export type TodosFilter = 'all' | 'active' | 'completed';

type TodoState = {
  todos: Todo[];
  loading: boolean;
  filter: TodosFilter;
};

const iniitalState: TodoState = {
  todos: [],
  loading: false,
  filter: 'all',
};

/**
 * Represents the TodoStore, which is responsible for managing the state and methods related to todos.
 *
 * @remarks
 * This store provides methods for loading todos, adding a new todo, deleting a todo, and updating a todo.
 * The state of the store includes the list of todos and a loading flag.
 *
 * @public
 */
export const TodoStore = signalStore(
  { providedIn: 'root' },
  withState(iniitalState),
  withMethods((store, todoService = inject(TodoService)) => ({
    async loadAll() {
      patchState(store, { loading: true });
      const todos = await todoService.getTodos();
      patchState(store, { todos, loading: false });
    },

    /**
     * Adds a new todo with the specified title to the store.
     * @param title - The title of the todo.
     * @returns A Promise that resolves to the newly added todo.
     */
    async addTodo(title: string) {
      const todo = await todoService.addTodo({ title, completed: false });
      // update the state with the new todo
      patchState(store, (state) => ({ todos: [...state.todos, todo] }));
    },

    /**
     * Deletes a todo item from the store.
     * @param id - The ID of the todo item to delete.
     */
    async deleteTodo(id: number) {
      await todoService.deleteTodo(id);
      patchState(store, (state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      }));
    },

    async updateTodo(id: number, completed: boolean) {
      await todoService.updateTodo(id, completed);
      patchState(store, (state) => ({
        todos: state.todos.map((t) => (t.id === id ? { ...t, completed } : t)),
      }));
    },

    updateFilter(filter: TodosFilter) {
      patchState(store, { filter });
    },
  }))
);
