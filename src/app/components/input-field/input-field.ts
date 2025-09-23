import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  Output,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

export enum InputFieldVariants {
  'text' = 'text',
  'password' = 'password',
  'email' = 'email',
  'number' = 'number',
  'phone' = 'phone',
}

@Component({
  selector: 'component-input-field',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './input-field.html',
  styleUrl: './input-field.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputField),
      multi: true,
    },
  ],
})
export class InputField implements ControlValueAccessor, OnChanges {
  @Input() focus: boolean = false;
  @Input({ required: true }) id!: string;
  @Input({ required: false }) name: string | undefined = undefined;
  @Input({ required: true }) placeholder!: string;
  @Input({ required: false }) label: string = '';
  @Input({ required: false }) type: InputFieldVariants = InputFieldVariants.text;
  @Input({ required: false }) error: string | undefined | null = undefined;
  @Input({ required: false }) required: boolean = false;
  @Input({ required: false }) helpText: string | undefined = undefined;
  @Input({ required: false }) autoComplete: string | null | undefined = undefined;
  @Input({ required: false }) class: string | undefined | null = undefined;

  @Output() blur = new EventEmitter();

  private _currentValue: string = '';
  private _disabled: boolean = false;
  private onChange = (value: any): void => {};
  private onTouched = (value: any): void => {};
  @ViewChild('input') inputElement!: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    const change: SimpleChange = changes['focus'];
    if (!change) return;

    const { currentValue } = change;
    if (currentValue === true) {
      const el = document.querySelector(`input#${this.id}`) as HTMLInputElement;
      el.focus();

      this.inputElement?.nativeElement.focus();
    }
  }

  writeValue(obj: any): void {
    this._currentValue = obj || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this._disabled = isDisabled;
  }

  handleInput(event: Event): void {
    const { value } = event.target as HTMLInputElement;
    this.onChange(value);
    this._currentValue = value;
  }

  onBlur() {
    this.onTouched(true);
  }

  get currentValue() {
    return this._currentValue;
  }

  get isDisabled(): boolean {
    return this._disabled;
  }
}
