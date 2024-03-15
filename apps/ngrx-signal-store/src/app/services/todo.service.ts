import { Injectable } from '@angular/core';
import { ToDosData } from '../model/todo-mock-data';

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
    return ToDosData.find((todo) => todo.id === id);
  }
}
