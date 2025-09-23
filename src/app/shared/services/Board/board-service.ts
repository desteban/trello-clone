import { inject, Injectable } from '@angular/core';
import { Board, BoardItem, defaultBoards, mockBoards } from '@app/models/Board';
import { Observable, of, throwError } from 'rxjs';
import { LocalStorage } from '../LocalStorage/local-storage';
import { CreateCommentDTO } from '@app/models/Comment';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  private lsService: LocalStorage = inject(LocalStorage);
  // /boards
  private mockBoards: BoardItem[] = [];
  private mockBoardsKey: string = 'mockBoards';
  // board/:id
  private boards: Board[] = [];
  private boardsKey = 'boards';

  constructor() {
    this.syncBoards();
    this.syncMockBoards();
  }

  private syncMockBoards(): void {
    this.mockBoards = this.lsService.findOrCreate(this.mockBoardsKey, [...mockBoards]);
  }

  private syncBoards(): void {
    const board = this.lsService.findOrCreate(this.boardsKey, [...defaultBoards]);
    this.boards = board;
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

  public newComment(props: CreateCommentDTO): Observable<boolean> {
    const { comment, idList, boardSlug, taskId } = props;
    const board = this.boards.find((b) => b.slug === boardSlug);
    const list = board?.lists.find((l) => l.id === idList);
    const card = list?.cards.find((c) => c.id === taskId);

    if (!card) return throwError(() => new Error('404')); // Si no se encuentra, devuelve el array original.

    // Crea una copia del array de comentarios y añade el nuevo.
    const updatedComments = card.comments ? [...card.comments, comment] : [comment];
    console.log('updated', updatedComments);

    // Devuelve una nueva copia de todo el array de `boards` con el cambio.
    const updatedBoards = this.boards.map((b) =>
      b.slug === boardSlug
        ? {
            ...b,
            lists: b.lists.map((l) =>
              l.id === idList
                ? {
                    ...l,
                    cards: l.cards.map((c) =>
                      c.id === taskId ? { ...c, comments: updatedComments } : c
                    ),
                  }
                : l
            ),
          }
        : b
    );
    this.boards = updatedBoards;
    this.lsService.setItem(this.boardsKey, updatedBoards);
    return of(true);
  }

  public updateBoard() {}
}
