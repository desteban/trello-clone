import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Boards } from './pages/boards/boards';
import { BoardPage } from '@domains/boards/pages/board-page/board-page';
import { authGuard } from '@shared/Guards/AuthGuard/auth-guard-guard';
import { AppRoutes } from '@shared/Routes';
import { publicAccessGuard } from '@shared/Guards/AuthGuard/public-access-guard';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    canActivate: [publicAccessGuard],
  },
  {
    path: AppRoutes.login,
    component: Login,
    title: 'Ingresar | TrelloClone',
    canActivate: [publicAccessGuard],
  },
  {
    path: AppRoutes.boards,
    component: Boards,
    title: 'Tableros',
    canActivate: [authGuard],
  },
  {
    path: `${AppRoutes.board}/:id`,
    component: BoardPage,
    canActivate: [authGuard],
  },
];
