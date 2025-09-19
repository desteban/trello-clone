import { Component } from '@angular/core';
import { HeaderUser } from '@app/components/headers/header-user/header-user';
import { Aside } from '@app/domains/boards/components/aside/aside';
import { BoardItem, mockBoards } from '@app/models/BoardItem';
import { ItemBoards } from "@domains/boards/item-boards/item-boards";

@Component({
  selector: 'app-boards',
  imports: [HeaderUser, Aside, ItemBoards],
  templateUrl: './boards.html',
  styleUrl: './boards.css',
})
export class Boards {
  readonly boards: BoardItem[] = mockBoards;
}
