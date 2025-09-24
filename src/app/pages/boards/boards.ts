import { Component, inject } from '@angular/core';
import { HeaderUser } from '@app/components/headers/header-user/header-user';
import { Aside } from '@app/domains/boards/components/aside/aside';
import { BoardItem, mockBoards } from '@app/models/Board';
import { ItemBoards } from '@domains/boards/item-boards/item-boards';
import { ScreenLayout } from '@shared/layouts/screen-layout/screen-layout';
import { CreateNewBoard } from '@domains/home/components/create-new-board/create-new-board';
import { BoardService } from '@shared/services/Board/board-service';

@Component({
  selector: 'app-boards',
  imports: [HeaderUser, Aside, ItemBoards, ScreenLayout, CreateNewBoard],
  templateUrl: './boards.html',
  styleUrl: './boards.css',
})
export class Boards {
  private boardService: BoardService = inject(BoardService);
  readonly boards: BoardItem[] = this.boardService.getBoards();
}
