import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Overlay } from '@components/overlay/overlay';
import { InputField } from '@components/input-field/input-field';
import { Button } from '@components/button/button';
import { BoardService } from '@shared/services/Board/board-service';
import { CreateBoardDTO } from '@app/models/Board';
import { Router } from '@angular/router';
import { AppRoutes } from '@shared/Routes';

@Component({
  selector: 'home-create-new-board',
  imports: [Overlay, CommonModule, FormsModule, ReactiveFormsModule, InputField, Button],
  templateUrl: './create-new-board.html',
  styleUrl: './create-new-board.css',
})
export class CreateNewBoard {
  private router: Router = inject(Router);
  private boardService: BoardService = inject(BoardService);
  private fb: FormBuilder = inject(FormBuilder);
  private random: string = Math.floor(Math.random()).toString();
  private defaultImage = `https://picsum.photos/400/250?random=${this.random}`;
  showForm: boolean = false;
  newBoardForm = this.fb.nonNullable.group({
    title: ['', [Validators.required]],
    image: [this.defaultImage, [Validators.required]],
  });

  submitForm(event: Event): void {
    event.preventDefault();
    this.newBoardForm.markAllAsTouched();
    if (this.newBoardForm.invalid) {
      return;
    }

    const data = this.newBoardForm.getRawValue();
    const dto: CreateBoardDTO = { title: data.title, srcImg: data.image };
    this.boardService.createBoard(dto).subscribe({
      next: (board) => {
        this.closeOverlay();
        this.router.navigate([`/${AppRoutes.board}/${board.slug}`]);
      },
    });
  }

  openOverlay() {
    this.showForm = true;
  }

  closeOverlay() {
    this.showForm = false;
    this.newBoardForm.reset();
  }
}
