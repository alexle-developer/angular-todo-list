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

  async addTodo(todo: Partial<Todo>): Promise<Todo> {
    // use math random to generate a random id
    // this is just for the demo and ensure the id is unique
    return {
      id: Math.floor(Math.random() * 1000) + 1,
      ...todo,
    } as Todo;
  }

  async deleteTodo(id: number) {
    return ToDosData.filter((todo: Todo) => todo.id !== id);
  }

  async updateTodo(id: number, completed: boolean) {
    return {
      ...ToDosData.find((todo: Todo) => todo.id === id),
      completed,
    };
  }
}
