import { Component, Input } from '@angular/core';
import { User } from '@app/models/User';

@Component({
  selector: 'board-components-team',
  imports: [],
  templateUrl: './team.html',
  styleUrl: './team.css',
})
export class Team {
  @Input({ required: true }) team!: User[];
}
