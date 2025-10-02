import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-component-action-card',
  imports: [CommonModule],
  templateUrl: './action-card.html',
  styleUrl: './action-card.css',
})
export class ActionCard {
  @Input({ required: true }) src!: string;
  @Input({ required: true }) alt!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: false }) rightImage: boolean = false;
}
