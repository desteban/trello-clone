import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  SimpleChange,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Dialog, DialogConfig, DialogModule, DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { AppIcons } from '@shared/AppIcons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export type ModalConfig = DialogConfig<unknown, DialogRef<unknown, any>>;

@Component({
  selector: 'component-modal-container',
  imports: [DialogModule, CommonModule, FontAwesomeModule],
  templateUrl: './modal-container.html',
  styleUrl: './modal-container.css',
})
export class ModalContainer implements OnChanges {
  @Input({ required: false }) modalConfig: ModalConfig = {};

  @Input({ required: false }) open: boolean = false;
  @Input({ required: false }) className: string | undefined = undefined;
  @Output() opened = new EventEmitter<boolean>();
  @Output() closed = new EventEmitter<any>();
  @ViewChild('template') template!: TemplateRef<any>;
  private defaultDialogConfig: ModalConfig = {
    minWidth: '300px',
    width: '100%',
    maxWidth: '1080px',
  };
  dialog = inject(Dialog);
  readonly icons = AppIcons;

  ngOnChanges(changes: SimpleChanges): void {
    const changeOpen = changes['open'];
    if (changeOpen) {
      this.changeOpen(changeOpen);
    }
  }

  private changeOpen(open: SimpleChange): void {
    if (open.currentValue === true) {
      this.openDialog();
    }

    if (open.currentValue === false) {
      this.closeDialog();
    }
  }

  openDialog() {
    const config = { ...this.defaultDialogConfig, ...this.modalConfig };
    const dialog = this.dialog.open(this.template, config);

    dialog.closed.subscribe((result) => {
      this.closed.emit(result);
    });
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }
}
