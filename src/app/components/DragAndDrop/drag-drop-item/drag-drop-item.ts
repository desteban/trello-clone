import { Component } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'component-drag-drop-item',
  imports: [DragDropModule],
  templateUrl: './drag-drop-item.html',
  styleUrl: './drag-drop-item.css',
})
export class DragDropItem {}
