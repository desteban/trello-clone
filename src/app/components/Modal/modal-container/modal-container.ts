import { Component, inject, Input, TemplateRef, ViewChild } from '@angular/core';
import { Dialog, DIALOG_DATA, DialogModule } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'component-modal-container',
  imports: [DialogModule, CommonModule],
  templateUrl: './modal-container.html',
  styleUrl: './modal-container.css',
})
export class ModalContainer {
  @Input({ required: false }) className: string | undefined = undefined;
  @ViewChild('template') template!: TemplateRef<any>;
  dialog = inject(Dialog);

  openDialog() {
    this.dialog.open(this.template, {
      minWidth: '300px',
      data: {
        animal: 'panda',
      },
    });
  }

  close(): void {
    this.dialog.closeAll();
  }
}
