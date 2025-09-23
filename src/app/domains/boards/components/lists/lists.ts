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
import { ModalContainer } from '@components/Modal/modal-container/modal-container';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleList } from "../title-list/title-list";

export interface selectedTask {
  task: CardBoard;
  index: string;
}

@Component({
  selector: 'boards-components-lists',
  imports: [CdkDropListGroup, CdkDropList, CdkDrag, FontAwesomeModule, ModalContainer, FormsModule, ReactiveFormsModule, TitleList],
  templateUrl: './lists.html',
  styleUrl: './lists.css',
})
export class Lists {
  @Input({ required: true }) boardList!: BoardList[];
  @Output() addList = new EventEmitter<BoardList>();
  @Output() selectedTask = new EventEmitter<selectedTask>();
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

    if (this.newTaskForm.invalid) {
      return;
    }

    const { title } = this.newTaskForm.getRawValue();
    const newList: BoardList = { ...DefaultBoardList, title };
    this.addList.emit(newList);
  }
}
