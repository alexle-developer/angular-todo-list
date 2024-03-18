import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldModule,
  MatLabel,
  MatSuffix,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectionList, MatListOption } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { TodoStore } from '../store/todo.store';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'todo-list',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatSelectionList,
    MatLabel,
    MatIcon,
    MatSuffix,
    MatListOption,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/**
 * Represents a component that displays a list of todo items.
 */
export class TodoListComponent {
  store = inject(TodoStore);

  /**
   * Adds a new todo item to the store.
   *
   * @param title - The title of the todo item.
   */
  async onAddTodo(title: string) {
    await this.store.addTodo(title);
  }

  /**
   * Deletes a todo item from the store.
   *
   * @param id - The ID of the todo item to delete.
   * @param event - The mouse event that triggered the delete action.
   */
  async onDeleteTodo(id: number, event: MouseEvent) {
    event.stopPropagation();
    await this.store.deleteTodo(id);
  }

  /**
   * Updates the completion status of a todo item in the store.
   *
   * @param id - The ID of the todo item to update.
   * @param completed - The new completion status of the todo item.
   */
  async onUpdateTodo(id: number, completed: boolean) {
    await this.store.updateTodo(id, completed);
  }

  /**
   * Toggles the completion status of a todo item in the store.
   *
   * @param id - The ID of the todo item to toggle.
   * @param completed - The new completion status of the todo item.
   */
  async onTodoToggled(id: number, completed: boolean) {
    await this.store.updateTodo(id, completed);
  }
}
