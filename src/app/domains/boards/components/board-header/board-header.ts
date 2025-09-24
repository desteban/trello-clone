import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppIcons } from '@shared/AppIcons';
import { HeaderUser } from '@components/headers/header-user/header-user';
import { Team } from '../team/team';
import { User } from '@app/models/User';

@Component({
  selector: 'board-components-board-header',
  imports: [FontAwesomeModule, HeaderUser, Team],
  templateUrl: './board-header.html',
  styleUrl: './board-header.css',
})
export class BoardHeader {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) team!: User[];
  readonly icons = AppIcons;
}
