import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export type TypeButton = 'submit' | 'button' | 'reset';
// las variantes y los colores deben coincidir con lo que tenemos en nuestro css
export type VariantButton = 'full' | 'outline';
export type ColorsButton = 'primary' | 'red';

@Component({
  selector: 'component-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input({ required: false }) type: TypeButton = 'button';
  @Input({ required: false }) class: string = '';
  @Input({ required: false }) variant: VariantButton = 'full';
  @Input({ required: false }) color: ColorsButton = 'primary';

  get buttonClasses() {
    return {
      [this.class]: true,
      [this.variant]: true,
      [this.color]: true,
    };
  }
}
