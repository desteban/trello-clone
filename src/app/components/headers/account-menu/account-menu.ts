import { Component } from '@angular/core';
import { Overlay } from '../../overlay/overlay';
import { ThemeMenu } from '../theme-menu/theme-menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppIcons } from '@shared/AppIcons';

@Component({
  selector: 'navbar-account-menu',
  imports: [Overlay, ThemeMenu, FontAwesomeModule],
  templateUrl: './account-menu.html',
  styleUrl: './account-menu.css',
})
export class AccountMenu {
  isOpen: boolean = false;
  readonly icons = AppIcons;
}
