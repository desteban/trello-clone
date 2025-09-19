import { Component } from '@angular/core';
import { Overlay } from '../../overlay/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppIcons } from '@shared/AppIcons';

@Component({
  selector: 'header-theme-menu',
  imports: [Overlay, FontAwesomeModule],
  templateUrl: './theme-menu.html',
  styleUrl: './theme-menu.css',
})
export class ThemeMenu {
  readonly icons = AppIcons;
}
