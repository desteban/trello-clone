import { Component, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScreenLayout } from '@shared/layouts/screen-layout/screen-layout';
import { BoardHeader } from '@domains/boards/components/board-header/board-header';
import { BoardService } from '@shared/services/Board/board-service';
import { Board, BoardList, CardBoard } from '@app/models/Board';
import { Title } from '@angular/platform-browser';
import {
  Lists,
  newTaskDTO,
  NewTaskWithList,
  selectedTask,
} from '@domains/boards/components/lists/lists';
import { AddCommentProps, ModalTask } from '@domains/boards/components/modal-task/modal-task';
import { Comment, CreateCommentDTO } from '@app/models/Comment';

@Component({
  selector: 'app-board-page',
  imports: [ScreenLayout, BoardHeader, Lists, ModalTask],
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
  selectTask: selectedTask | null = null;

  showTask(task: selectedTask) {
    this.selectTask = task;
  }

  closeTask(task: CardBoard) {
    this.selectTask = null;
  }

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
    if (!this.board) {
      return;
    }

    this.boardService.newList(newList, this.board?.slug).subscribe({
      next: (board) => {
        this.board = board;
      },
      error: (err) => {
        alert('No pudimos agregar la nueva lista');
      },
    });
  }

  addComment(comment: AddCommentProps) {
    const dto: CreateCommentDTO = {
      comment: comment.comment,
      taskId: comment.taskId,
      idList: this.selectTask?.index.toString() ?? '',
      boardSlug: this.board?.slug ?? '',
    };

    this.boardService.newComment(dto);
  }

  addTask(data: NewTaskWithList) {
    if (!this.board) {
      return;
    }

    const dto: newTaskDTO = { ...data, boardSlug: this.board.slug };
    this.boardService.newTask(dto).subscribe({
      next: (board) => {
        this.board = board;
      },
      error: () => {
        alert('No pudimos actualizar el tablero');
      },
    });
  }
}
