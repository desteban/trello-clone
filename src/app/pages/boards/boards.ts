import { Component } from '@angular/core';
import { HeaderUser } from '../../components/headers/header-user/header-user';
import { Overlay } from "../../components/overlay/overlay";

@Component({
  selector: 'app-boards',
  imports: [HeaderUser, Overlay],
  templateUrl: './boards.html',
  styleUrl: './boards.css',
})
export class Boards {}
