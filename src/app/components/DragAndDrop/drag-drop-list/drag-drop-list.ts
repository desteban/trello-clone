import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragDropItem } from '../drag-drop-item/drag-drop-item';

@Component({
  selector: 'components-drag-drop-list',
  imports: [DragDropModule, DragDropItem],
  templateUrl: './drag-drop-list.html',
  styleUrl: './drag-drop-list.css',
  // exportAs: 'dragDropList',
})
export class DragDropList {
  @Input() listData: any[] = [];
  @Output() itemDropped = new EventEmitter<CdkDragDrop<any[]>>();

  @ViewChild(CdkDropList) dropList!: CdkDropList;

  onDrop(event: CdkDragDrop<any[]>) {
    this.itemDropped.emit(event);
  }
}
