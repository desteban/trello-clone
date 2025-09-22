import { inject, Injectable } from '@angular/core';
import { Board, BoardItem, defaultBoards, mockBoards } from '@app/models/Board';
import { Observable, of, throwError } from 'rxjs';
import { LocalStorage } from '../LocalStorage/local-storage';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  private lsService: LocalStorage = inject(LocalStorage);
  // /boards
  // private mockBoards = { ...mockBoards };
  private mockBoards: BoardItem[] = [];
  // board/:id
  // private boards: Board[] = [...defaultBoards];
  private boards: Board[] = [];

  constructor() {
    this.syncBoards();
    this.syncMockBoards();
  }

  private syncMockBoards(): void {
    this.mockBoards = this.lsService.findOrCreate('mockBoards', [...mockBoards]);
  }

  private syncBoards(): void {
    this.boards = this.lsService.findOrCreate('boards', [...defaultBoards]);
  }

  public getBoards() {
    return this.mockBoards;
  }

  public getBoard(slug: string): Observable<Board> {
    const board: Board | null = this.boards.filter((board) => board.slug === slug)[0] ?? null;

    if (board === null) {
      return throwError(() => new Error('No encontramos el tablero solicitado'));
    }

    return of(board);
  }

  public updateBoard() {}
}
