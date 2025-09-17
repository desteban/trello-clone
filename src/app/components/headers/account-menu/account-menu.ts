import { Component } from '@angular/core';
import { Overlay } from "../../overlay/overlay";

@Component({
  selector: 'navbar-account-menu',
  imports: [Overlay],
  templateUrl: './account-menu.html',
  styleUrl: './account-menu.css',
})
export class AccountMenu {}
