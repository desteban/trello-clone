import { Component } from '@angular/core';
import { HeaderUser } from '../../components/headers/header-user/header-user';

@Component({
  selector: 'app-boards',
  imports: [HeaderUser],
  templateUrl: './boards.html',
  styleUrl: './boards.css',
})
export class Boards {}
