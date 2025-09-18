import { Component } from '@angular/core';
import { Overlay } from '../../overlay/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'header-theme-menu',
  imports: [Overlay, FontAwesomeModule],
  templateUrl: './theme-menu.html',
  styleUrl: './theme-menu.css',
})
export class ThemeMenu {
  icons = {
    chevronRight: faChevronRight,
  };
}
