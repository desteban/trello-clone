import { Component, Input } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'component-accordion-container',
  imports: [CdkAccordionModule, CommonModule],
  templateUrl: './accordion-container.html',
  styleUrl: './accordion-container.css',
})
export class AccordionContainer {
  @Input({ required: false }) class: string | null | undefined = undefined;
}
