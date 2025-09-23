import { Component, Input } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { Comment } from '@app/models/Comment';

@Component({
  selector: 'boards-component-comments-modal',
  imports: [ScrollingModule],
  templateUrl: './comments-modal.html',
  styleUrl: './comments-modal.css',
})
export class CommentsModal {
  @Input({ required: false }) comments: Comment[] | undefined = [];

  getDate(timestamp: string) {
    const date: Date = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      // hour12: false, // Formato de 24 horas
    };
    return date.toLocaleString('es-ES', options);
  }
}
