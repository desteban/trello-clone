import { Injectable } from '@angular/core';
import { Board, defaultBoards, mockBoards } from '@app/models/Board';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  public getBoards() {
    return mockBoards;
  }

  public getBoard(slug: string): Observable<Board> {
    const board: Board | null = defaultBoards.filter((board) => board.slug === slug)[0] ?? null;

    if (board === null) {
      return throwError(() => new Error('No encontramos el tablero solicitado'));
    }

    return of(board);
  }
}
