import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BoardList } from '@app/models/Board';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppIcons } from '@shared/AppIcons';

@Component({
  selector: 'boards-components-lists',
  imports: [CdkDropListGroup, CdkDropList, CdkDrag, FontAwesomeModule],
  templateUrl: './lists.html',
  styleUrl: './lists.css',
})
export class Lists {
  @Input({ required: true }) boardList!: BoardList[];
  @Output() addList = new EventEmitter<BoardList>();
  readonly icons = AppIcons;

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
    const newList: BoardList = { title: 'Nueva lista', cards: [] };
    this.addList.emit(newList);
  }
}
