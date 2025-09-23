import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  AbstractControl,
} from '@angular/forms';
import { InputField } from '@components/input-field/input-field';

interface ChangeTitleProps {
  title: string;
}

type ErrorMessageFn = (control: AbstractControl) => string;

@Component({
  selector: 'boards-title-list',
  imports: [FormsModule, ReactiveFormsModule, InputField],
  templateUrl: './title-list.html',
  styleUrl: './title-list.css',
})
export class TitleList {
  @Input({ required: true }) id!: string;
  @Input({ required: false }) title: string | undefined = undefined;
  @Output() changeTitle: EventEmitter<ChangeTitleProps> = new EventEmitter<ChangeTitleProps>();
  private fb: FormBuilder = inject(FormBuilder);
  formTitle = this.fb.nonNullable.group({
    title: [this.title ?? '', [Validators.required, Validators.minLength(1)]],
  });
  showInput: boolean = false;

  get containerId(): string {
    return `container-${this.id}`;
  }

  get buttonId(): string {
    return `button-${this.id}`;
  }

  clickButton() {
    this.showInput = true;
  }

  blurInput() {
    this.showInput = false;
    this.formTitle.reset();
  }

  submit(e: Event) {
    e.preventDefault();
    this.formTitle.markAllAsTouched();

    if (this.formTitle.invalid) {
      return;
    }

    const { title } = this.formTitle.getRawValue();
    const data: ChangeTitleProps = { title };
    this.changeTitle.emit(data);
  }

  MatchError(controlName: string): string | null {
    const control: AbstractControl | null = this.formTitle.get(controlName);
    if (!control) return null;

    return this.ErrorControl(control);
  }

  private ErrorControl(control: AbstractControl): string | null {
    if (!control.errors || !control.touched) return null;

    const errorKey = Object.keys(control.errors)[0];
    const error: string | null = this.errorsMessage[errorKey](control);
    return error;
  }

  private errorsMessage: { [key: string]: ErrorMessageFn } = {
    required: () => 'El campo es obligatorio',
    minLength: (control) =>
      `Al menos debe contener ${control.getError('minlength').requiredLength} caracteres.`,
  };
}
