import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { AppRoutes } from '@shared/Routes';

@Component({
  selector: 'home-components-header',
  imports: [RouterLinkWithHref],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  get homeRoute(): string {
    return `/${AppRoutes.index}`;
  }

  get loginRoute(): string {
    return `/${AppRoutes.login}`;
  }
}
