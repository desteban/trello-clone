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
  @Output() onOpen = new EventEmitter();
  @Output() onDetach = new EventEmitter();
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
    this._isOpen = !this._isOpen;
    if (this._isOpen === true) {
      this.onOpen.emit();
    }
  }

  public closePanel(): void {
    // this.hidePanel();
    this._isOpen = false;
  }

  private hidePanel() {
    const el = document.querySelector('.show-overlay');
    this.animatedClass = 'hide-overlay';
    el?.classList.add('hide-overlay');

    setTimeout(() => {
      el?.classList.remove('hide-overlay');
      this._isOpen = false;
    }, 300);
  }

  onPanelDetached(): void {
    console.log('detach');
    this.onDetach.emit();
  }

  getClassFull(): string {
    return this.fullScreen ? 'top-full-screen' : '';
  }
}
