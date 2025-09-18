import { Component } from '@angular/core';
import { AccountMenu } from '../account-menu/account-menu';
import { Button } from '../../button/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Overlay } from "../../overlay/overlay";
@Component({
  selector: 'component-header-user',
  imports: [AccountMenu, Button, FontAwesomeModule, Overlay],
  templateUrl: './header-user.html',
  styleUrl: './header-user.css',
})
export class HeaderUser {
  icons = {
    search: faMagnifyingGlass,
  };
}
