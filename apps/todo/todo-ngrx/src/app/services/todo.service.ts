import { Injectable } from '@angular/core';
import { ToDosData } from '../model/todo-mock-data';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // TODO: service to be replaced with ngrx store
  // for now using service to fetch data
  getTodos() {
    return of(ToDosData);
  }
}
