import { Component } from '@angular/core';
import { HeaderUser } from '../../components/headers/header-user/header-user';
import { Overlay } from '../../components/overlay/overlay';
import { Aside } from '../../domains/boards/components/aside/aside';

@Component({
  selector: 'app-boards',
  imports: [HeaderUser, Overlay, Aside],
  templateUrl: './boards.html',
  styleUrl: './boards.css',
})
export class Boards {}
