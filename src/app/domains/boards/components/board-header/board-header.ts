import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppIcons } from '@shared/AppIcons';
import { HeaderUser } from '@components/headers/header-user/header-user';

@Component({
  selector: 'board-components-board-header',
  imports: [FontAwesomeModule, HeaderUser],
  templateUrl: './board-header.html',
  styleUrl: './board-header.css',
})
export class BoardHeader {
  @Input({ required: true }) name!: string;
  readonly icons = AppIcons;
}
