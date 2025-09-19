import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AccordionContainer } from '@app/components/accordion/accordion-container/accordion-container';
import { AccordionItem } from '@app/components/accordion/accordion-item/accordion-item';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppIcons } from '@shared/AppIcons';

@Component({
  selector: 'boards-components-aside',
  imports: [RouterLinkActive, RouterLink, AccordionContainer, AccordionItem, FontAwesomeModule],
  templateUrl: './aside.html',
  styleUrl: './aside.css',
})
export class Aside {
  readonly icons = AppIcons;
}
