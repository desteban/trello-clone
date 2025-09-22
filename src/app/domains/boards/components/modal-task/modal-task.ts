import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { CardBoard } from '@app/models/Board';
import { ModalContainer } from '@components/Modal/modal-container/modal-container';
import { InputField } from '@components/input-field/input-field';
import { TextArea } from '@components/text-area/text-area';
import { AppIcons } from '@shared/AppIcons';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { Button } from "@components/button/button";

@Component({
  selector: 'boards-components-modal-task',
  imports: [ModalContainer, InputField, FormsModule, ReactiveFormsModule, TextArea, FaIconComponent, Button],
  templateUrl: './modal-task.html',
  styleUrl: './modal-task.css',
})
export class ModalTask implements OnChanges {
  @Input({ required: false }) selectedTask: CardBoard | null = null;
  @Output() taskClosed: EventEmitter<CardBoard> = new EventEmitter<CardBoard>();
  private fb: FormBuilder = inject(FormBuilder);
  isOpen: boolean = false;
  form: FormGroup = this.dataForm;
  readonly icons = AppIcons

  ngOnChanges(changes: SimpleChanges): void {
    const taskChanges: SimpleChange = changes['selectedTask'];
    if (taskChanges && taskChanges.currentValue) {
      this.onChangeSelectedTask(taskChanges.currentValue);
    }
  }

  private onChangeSelectedTask(task: CardBoard) {
    this.isOpen = true;
    this.form = this.dataForm;
  }

  private get dataForm() {
    return this.fb.group({
      title: [this.selectedTask?.title ?? '', [Validators.required]],
      description: [this.selectedTask?.description ?? '', []],
    });
  }

  closedModal() {
    this.isOpen = false;
  }

  submitForm(event: Event) {
    event.preventDefault();
  }
}
