import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { OverlayContainer, OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'component-overlay',
  imports: [OverlayModule, CommonModule],
  templateUrl: './overlay.html',
  styleUrl: './overlay.css',
  providers: [{ provide: OverlayContainer }],
})
export class Overlay implements OnChanges {
  @Input({ required: false }) isOpen: boolean = false;
  @Input({ required: false }) class: null | string | undefined = undefined;
  @Input() fullScreen: boolean = false;
  @Output() click = new EventEmitter<boolean>();
  private _isOpen: boolean = this.isOpen;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen']) {
      this._isOpen = changes['isOpen'].currentValue;
    }
  }

  get currentOpen(): boolean {
    return this._isOpen;
  }

  toggleOpen(): void {
    this._isOpen = !this._isOpen;
  }

  public closePanel(): void {
    this._isOpen = false;
    this.click.emit(this._isOpen);
  }

  getClassFull(): string {
    return this.fullScreen ? 'top-full-screen' : '';
  }
}
