import { Component, inject } from '@angular/core';
import { Overlay } from '../../overlay/overlay';
import { ThemeMenu } from '../theme-menu/theme-menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppIcons } from '@shared/AppIcons';
import { AuthService } from '@shared/services/Auth/auth-service';
import { User } from '@app/models/User';

@Component({
  selector: 'navbar-account-menu',
  imports: [Overlay, ThemeMenu, FontAwesomeModule],
  templateUrl: './account-menu.html',
  styleUrl: './account-menu.css',
})
export class AccountMenu {
  isOpen: boolean = false;
  readonly icons = AppIcons;
  authService: AuthService = inject(AuthService);
  user: User | null = null;

  constructor() {
    this.authService.profile().subscribe({
      next: (profile) => {
        this.user = profile;
      },
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
