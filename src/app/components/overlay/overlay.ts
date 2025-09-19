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
  animatedClass: 'hide-overlay' | 'show-overlay' = 'show-overlay';
  id: string = 'panel-' + Math.random();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen']) {
      this._isOpen = changes['isOpen'].currentValue;
    }
  }

  get currentOpen(): boolean {
    return this._isOpen;
  }

  toggleOpen(): void {
    const newState: boolean = this._isOpen;
    if (newState === true) {
      this.closePanel();
    } else {
      this._isOpen = true;
    }
  }

  public closePanel(): void {
    const el = document.querySelector('.show-overlay');
    this.animatedClass = 'hide-overlay';
    el?.classList.add('hide-overlay');

    setTimeout(() => {
      el?.classList.remove('hide-overlay');
      this._isOpen = false;
    }, 300);
  }

  onPanelDetached(): void {}

  getClassFull(): string {
    return this.fullScreen ? 'top-full-screen' : '';
  }
}
