import { Component, Input } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { BoardItem } from '@app/models/BoardItem';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppIcons } from '@shared/AppIcons';

@Component({
  selector: 'boards-item-board',
  imports: [FontAwesomeModule, RouterLinkWithHref],
  templateUrl: './item-boards.html',
  styleUrl: './item-boards.css',
})
export class ItemBoards {
  @Input({ required: true }) board!: BoardItem;
  readonly icons = AppIcons;

  get src(): string {
    return this.board.srcImg;
  }

  get name(): string {
    return this.board.name;
  }

  get altText(): string {
    return `Tablero: ${this.name}`;
  }

  get slug(): string {
    return this.board.slug;
  }
}
