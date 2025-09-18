import { Component } from '@angular/core';
import { AccountMenu } from '../account-menu/account-menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Overlay } from '../../overlay/overlay';
import { CreateMenu } from '../create-menu/create-menu';
@Component({
  selector: 'component-header-user',
  imports: [AccountMenu, FontAwesomeModule, Overlay, CreateMenu],
  templateUrl: './header-user.html',
  styleUrl: './header-user.css',
})
export class HeaderUser {
  icons = {
    search: faMagnifyingGlass,
  };
}
