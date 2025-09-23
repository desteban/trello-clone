import { v4 } from 'uuid';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardBoard } from '@app/models/Board';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppIcons } from '@shared/AppIcons';
import { Button } from '@components/button/button';
import { InputField } from '@components/input-field/input-field';

export interface AddTaskProps {
  task: CardBoard;
}

@Component({
  selector: 'board-add-task-button',
  imports: [FontAwesomeModule, FormsModule, ReactiveFormsModule, Button, InputField],
  templateUrl: './add-task-button.html',
  styleUrl: './add-task-button.css',
})
export class AddTaskButton {
  @Input({ required: true }) listId!: string;
  @Output() addTask: EventEmitter<AddTaskProps> = new EventEmitter<AddTaskProps>();
  showForm: boolean = false;
  readonly icons = AppIcons;
  private fb: FormBuilder = inject(FormBuilder);
  formAddTask = this.fb.nonNullable.group({
    title: ['', [Validators.required]],
  });

  get buttonId(): string {
    return `newTask-${this.listId}`;
  }

  clickButton() {
    this.showForm = true;
  }

  clean(): void {
    this.showForm = false;
    this.formAddTask.reset();
  }

  submit(e: Event) {
    e.preventDefault();
    this.formAddTask.markAllAsTouched();

    if (this.formAddTask.invalid) {
      return;
    }

    const { title } = this.formAddTask.getRawValue();
    const id = v4();
    const newTask: CardBoard = { id, title, description: '', comments: [] };
    this.addTask.emit({ task: newTask });
    this.clean();
  }
}
