import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { BoardList, CardBoard, DefaultBoardList } from '@app/models/Board';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppIcons } from '@shared/AppIcons';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangeTitleProps, TitleList } from '../title-list/title-list';
import { AddTaskButton, AddTaskProps } from '../add-task-button/add-task-button';

export interface selectedTask {
  task: CardBoard;
  index: string;
}

export interface newTaskDTO {
  task: CardBoard;
  listId: string;
  boardSlug: string;
}

export interface NewTaskWithList {
  task: CardBoard;
  listId: string;
}

@Component({
  selector: 'boards-components-lists',
  imports: [
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    TitleList,
    AddTaskButton,
  ],
  templateUrl: './lists.html',
  styleUrl: './lists.css',
})
export class Lists {
  @Input({ required: true }) boardList!: BoardList[];
  @Output() addList = new EventEmitter<BoardList>();
  @Output() selectedTask = new EventEmitter<selectedTask>();
  @Output() addTask: EventEmitter<NewTaskWithList> = new EventEmitter<NewTaskWithList>();
  private fb: FormBuilder = inject(FormBuilder);
  newTaskForm = this.fb.nonNullable.group({
    title: ['', [Validators.required]],
  });
  readonly icons = AppIcons;

  onClicTask(task: CardBoard, index: string) {
    this.selectedTask.emit({ task, index });
  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addNewList(e: Event) {
    e.preventDefault();
    this.newTaskForm.markAllAsTouched();

    console.log('Validando', this.newTaskForm.invalid);

    if (this.newTaskForm.invalid) {
      return;
    }

    const { title } = this.newTaskForm.getRawValue();
    const newList: BoardList = { ...DefaultBoardList, title };
    this.addList.emit(newList);
  }

  newList(data: ChangeTitleProps) {
    const id = Math.random().toString(36).substring(10);
    const newList: BoardList = { cards: [], id, title: data.title };
    this.addList.emit(newList);
  }

  newTask(data: AddTaskProps, listId: string) {
    const dto: NewTaskWithList = { listId, task: data.task };
    this.addTask.emit(dto);
  }
}
