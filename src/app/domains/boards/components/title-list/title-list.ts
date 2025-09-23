import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  AbstractControl,
} from '@angular/forms';
import { InputField } from '@components/input-field/input-field';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export interface ChangeTitleProps {
  title: string;
}

type ErrorMessageFn = (control: AbstractControl) => string;

@Component({
  selector: 'boards-title-list',
  imports: [FormsModule, ReactiveFormsModule, InputField, FontAwesomeModule],
  templateUrl: './title-list.html',
  styleUrl: './title-list.css',
})
export class TitleList implements OnInit {
  @Input({ required: false }) leftIcon: any = undefined;
  @Input({ required: false }) rightIcon: any = undefined;
  @Input({ required: true }) id!: string;
  @Input({ required: false }) title: string = '';
  @Input({ required: false }) initialValue: string = '';
  @Output() changeTitle: EventEmitter<ChangeTitleProps> = new EventEmitter<ChangeTitleProps>();
  private fb: FormBuilder = inject(FormBuilder);
  formTitle = this.FormSchema;
  showInput: boolean = false;

  ngOnInit(): void {
    this.formTitle = this.FormSchema;
  }

  private get FormSchema() {
    return this.fb.nonNullable.group({
      title: [this.initialValue, [Validators.required, Validators.minLength(1)]],
    });
  }

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
    this.blurInput();
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
