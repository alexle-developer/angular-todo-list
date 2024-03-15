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

// equivalent to @Injectable({ providedIn: 'root' })
// and ToDoService is a singleton
export const TodoStore = signalStore(
  { providedIn: 'root' },
  withState(iniitalState),
  withMethods((store, todoService = inject(TodoService)) => ({
    async loadAll() {
      patchState(store, { loading: true });
      const todos = await todoService.getTodos();
      patchState(store, { todos, loading: false });
    },

    async addTodo(title: string) {
      const todo = await todoService.addTodo({ title, completed: false });
      // update the state with the new todo
      patchState(store, (state) => ({ todos: [...state.todos, todo] }));
    },

    async deleteTodo(id: number) {
      await todoService.deleteTodo(id);
      patchState(store, (state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      }));
    },
  }))
);
