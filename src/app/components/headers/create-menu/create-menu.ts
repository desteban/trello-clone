import { Component } from '@angular/core';
import { Overlay } from '../../overlay/overlay';
import { Button } from '../../button/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTableColumns, faSwatchbook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar-create-menu',
  imports: [Overlay, Button, FontAwesomeModule],
  templateUrl: './create-menu.html',
  styleUrl: './create-menu.css',
})
export class CreateMenu {
  icons = {
    table: faTableColumns,
    template: faSwatchbook,
  };
}
