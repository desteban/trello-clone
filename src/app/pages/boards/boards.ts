import { Component } from '@angular/core';
import { HeaderUser } from '@app/components/headers/header-user/header-user';
import { Aside } from '@app/domains/boards/components/aside/aside';

@Component({
  selector: 'app-boards',
  imports: [HeaderUser, Aside],
  templateUrl: './boards.html',
  styleUrl: './boards.css',
})
export class Boards {}
