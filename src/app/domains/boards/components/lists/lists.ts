import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BoardList, CardBoard, DefaultBoardList } from '@app/models/Board';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppIcons } from '@shared/AppIcons';

export interface selectedTask {
  task: CardBoard;
  index: string;
}

@Component({
  selector: 'boards-components-lists',
  imports: [CdkDropListGroup, CdkDropList, CdkDrag, FontAwesomeModule],
  templateUrl: './lists.html',
  styleUrl: './lists.css',
})
export class Lists {
  @Input({ required: true }) boardList!: BoardList[];
  @Output() addList = new EventEmitter<BoardList>();
  @Output() selectedTask = new EventEmitter<selectedTask>();
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

  addNewList() {
    const newList: BoardList = DefaultBoardList;
    this.addList.emit(newList);
  }
}
