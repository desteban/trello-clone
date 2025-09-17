import { Component } from '@angular/core';
import { OverlayContainer, OverlayModule } from '@angular/cdk/overlay';

@Component({
  selector: 'component-overlay',
  imports: [OverlayModule],
  templateUrl: './overlay.html',
  styleUrl: './overlay.css',
  providers: [{ provide: OverlayContainer }],
})
export class Overlay {
  isOpen: boolean = false;

  toggleOpen(): void {
    this.isOpen = !this.isOpen;
  }

  closePanel(): void {
    console.log('Close');

    this.isOpen = false;
  }
}
