import { Component, Input } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppIcons } from '@shared/AppIcons';

@Component({
  selector: 'component-accordion-item',
  imports: [CdkAccordionModule, CommonModule, FontAwesomeModule],
  templateUrl: './accordion-item.html',
  styleUrl: './accordion-item.css',
})
export class AccordionItem {
  @Input({ required: false }) class: string | null | undefined = undefined;
  @Input({ required: true }) id!: string;
  private readonly baseIdTrigger: string = 'accordion-header';
  private readonly baseIdBody: string = 'accordion-body';
  readonly icons = AppIcons;

  get idTrigger(): string {
    return `${this.baseIdTrigger}-${this.id}`;
  }

  get idBody(): string {
    return `${this.baseIdBody}-${this.id}`;
  }
}
