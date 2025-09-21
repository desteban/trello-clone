import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { AppIcons } from '@shared/AppIcons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'component-modal-container',
  imports: [DialogModule, CommonModule, FontAwesomeModule],
  templateUrl: './modal-container.html',
  styleUrl: './modal-container.css',
})
export class ModalContainer {
  @Input({ required: false }) className: string | undefined = undefined;
  @Output() opened = new EventEmitter<boolean>();
  @ViewChild('template') template!: TemplateRef<any>;
  dialog = inject(Dialog);
  readonly icons = AppIcons;

  openDialog() {
    this.dialog.open(this.template, {
      minWidth: '300px',
      data: {
        animal: 'panda',
      },
    });
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }
}
