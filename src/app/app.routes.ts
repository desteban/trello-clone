import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Boards } from './pages/boards/boards';
import { BoardPage } from '@domains/boards/pages/board-page/board-page';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'boards',
    component: Boards,
    title: 'Tableros',
  },
  {
    path: 'board/:id',
    component: BoardPage,
  },
];
