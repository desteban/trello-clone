import { Component } from '@angular/core';
import { AccountMenu } from '../account-menu/account-menu';

@Component({
  selector: 'component-header-user',
  imports: [AccountMenu],
  templateUrl: './header-user.html',
  styleUrl: './header-user.css',
})
export class HeaderUser {}
