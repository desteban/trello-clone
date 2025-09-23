import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Boards } from './pages/boards/boards';
import { BoardPage } from '@domains/boards/pages/board-page/board-page';
import { authGuard } from '@shared/Guards/AuthGuard/auth-guard-guard';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'login',
    component: Login,
    title: 'Ingresar | TrelloClone',
  },
  {
    path: 'boards',
    component: Boards,
    title: 'Tableros',
    canActivate: [authGuard],
  },
  {
    path: 'board/:id',
    component: BoardPage,
    canActivate: [authGuard],
  },
];
