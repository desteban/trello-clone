import { Component, QueryList, ViewChildren } from '@angular/core';
import { DragDropList } from '../drag-drop-list/drag-drop-list';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'components-drag-drop-container',
  imports: [DragDropList],
  templateUrl: './drag-drop-container.html',
  styleUrl: './drag-drop-container.css',
})
export class DragDropContainer {
  elementosPendientes = ['Obtener leche', 'Pasear al perro', 'Estudiar Angular CDK'];
  elementosCompletados = ['Pagar la renta', 'Lavar el auto'];

  @ViewChildren(DragDropList) lists!: QueryList<DragDropList>;

  ngAfterViewInit() {
    // Conecta las listas después de que la vista se ha inicializado
    const pendingList = this.lists.get(0)?.dropList;
    const completedList = this.lists.get(1)?.dropList;

    if (pendingList && completedList) {
      pendingList.connectedTo = [completedList];
      completedList.connectedTo = [pendingList];
    }
  }

  onDrop(event: CdkDragDrop<string[]>) {
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
}
