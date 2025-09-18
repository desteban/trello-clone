import { Component } from '@angular/core';
import { Overlay } from '../../overlay/overlay';
import { ThemeMenu } from '../theme-menu/theme-menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'navbar-account-menu',
  imports: [Overlay, ThemeMenu, FontAwesomeModule],
  templateUrl: './account-menu.html',
  styleUrl: './account-menu.css',
})
export class AccountMenu {
  icons = {
    link: faArrowUpRightFromSquare,
    users: faUser,
  };
}
