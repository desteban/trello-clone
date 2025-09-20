import { Component } from '@angular/core';
import { AccountMenu } from '../account-menu/account-menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Overlay } from '../../overlay/overlay';
import { CreateMenu } from '../create-menu/create-menu';
import { AppIcons } from '@shared/AppIcons';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'component-header-user',
  imports: [AccountMenu, FontAwesomeModule, Overlay, CreateMenu, RouterLinkWithHref],
  templateUrl: './header-user.html',
  styleUrl: './header-user.css',
})
export class HeaderUser {
  readonly icons = AppIcons;
}
