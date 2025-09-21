import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScreenLayout } from '@shared/layouts/screen-layout/screen-layout';
import { BoardHeader } from '@domains/boards/components/board-header/board-header';
import { BoardService } from '@shared/services/Board/board-service';
import { Board, BoardList } from '@app/models/Board';
import { Title } from '@angular/platform-browser';
import { Lists } from '@domains/boards/components/lists/lists';

@Component({
  selector: 'app-board-page',
  imports: [ScreenLayout, BoardHeader, Lists],
  templateUrl: './board-page.html',
  styleUrl: './board-page.css',
})
export class BoardPage implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private boardService: BoardService = inject(BoardService);
  private titleService: Title = inject(Title);
  board: Board | null = null;
  slug: string | null = this.route.snapshot.paramMap.get('id');
  loading: boolean = false;

  ngOnInit(): void {
    if (this.slug === null) return;
    this.loadBoard(this.slug);
  }

  ngOnDestroy() {
    this.loadBackground(null);
  }

  get nameBoard(): string {
    return this.board?.title ?? '';
  }

  get boardList(): BoardList[] {
    return this.board?.lists ?? [];
  }

  private loadBoard(slug: string) {
    this.loading = true;
    this.boardService.getBoard(slug).subscribe({
      next: (board) => {
        this.board = board;
        this.titleService.setTitle(`${board.title}`);
        this.loadBackground(board.srcImg);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  /**
   * Mostrar o quitar la imagen del tablero
   * @param {string} src url de la Imagen del tablero
   * @returns
   */
  private loadBackground(src: string | null) {
    const body = document.querySelector('body');
    if (!body) return;

    if (src === null) {
      body.style = '';
      return;
    }

    body.style = `background: url(${src}); background-repeat: no-repeat; background-size: cover;`;
  }

  addNewList(newList: BoardList): void {
    this.board?.lists.push(newList);
  }
}
