import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-component-more-cards',
  imports: [],
  templateUrl: './more-cards.html',
  styleUrl: './more-cards.css',
})
export class MoreCards {
  @Input({ required: true }) src!: string;
  @Input({ required: true }) alt!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
}
