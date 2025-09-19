import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'boards-components-aside',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './aside.html',
  styleUrl: './aside.css',
})
export class Aside {}
