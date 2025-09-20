import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-layouts-screen-layout',
  imports: [],
  templateUrl: './screen-layout.html',
  styleUrl: './screen-layout.css',
})
export class ScreenLayout {
  @Input({ required: false }) showAside: boolean = false;
}
