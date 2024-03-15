import { Injectable } from '@angular/core';
import { ToDosData } from '../model/todo-mock-data';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {
    // Constructor logic here
  }

  // get All ToDos
  async getTodos() {
    return ToDosData;
  }

  // get ToDo by ID
  async getTodoById(id: number) {
    return ToDosData.find((todo: Todo) => todo.id === id) as Todo;
  }

  async addTodo(todo: Partial<Todo>) {
    return {
      id: ToDosData.length + 1,
      ...todo,
    } as Todo;
  }
}
