import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  OverlayContainer,
  OverlayModule,
  Overlay as Ov,
  ConnectedPosition,
  FlexibleConnectedPositionStrategyOrigin,
} from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'component-overlay',
  imports: [OverlayModule, CommonModule],
  templateUrl: './overlay.html',
  styleUrl: './overlay.css',
  providers: [{ provide: OverlayContainer }],
})
export class Overlay {
  @Input({ required: false }) class: null | string | undefined = undefined;
  @Input() fullScreen: boolean = false;
  @Output() click = new EventEmitter<boolean>();
  isOpen: boolean = false;
  overlay = inject(Ov);

  toggleOpen(): void {
    this.isOpen = !this.isOpen;
  }

  closePanel(): void {
    this.isOpen = false;
    this.click.emit(this.isOpen);
  }
}
