import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { CardBoard } from '@app/models/Board';
import { ModalContainer } from '@components/Modal/modal-container/modal-container';
import { InputField } from '@components/input-field/input-field';
import { TextArea } from '@components/text-area/text-area';
import { AppIcons } from '@shared/AppIcons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { Button } from '@components/button/button';
import { CommentsModal } from '../comments-modal/comments-modal';
import { AuthService } from '@shared/services/Auth/auth-service';
import { User } from '@app/models/User';
import { Comment } from '@app/models/Comment';

export interface AddCommentProps {
  comment: Comment;
  taskId: string;
}

@Component({
  selector: 'boards-components-modal-task',
  imports: [
    ModalContainer,
    InputField,
    FormsModule,
    ReactiveFormsModule,
    TextArea,
    FaIconComponent,
    Button,
    CommentsModal,
  ],
  templateUrl: './modal-task.html',
  styleUrl: './modal-task.css',
})
export class ModalTask implements OnChanges {
  @Input({ required: false }) selectedTask: CardBoard | null = null;
  @Output() taskClosed: EventEmitter<CardBoard> = new EventEmitter<CardBoard>();
  @Output() addNewComment: EventEmitter<AddCommentProps> = new EventEmitter<AddCommentProps>();
  private fb: FormBuilder = inject(FormBuilder);
  isOpen: boolean = false;
  form: FormGroup = this.dataForm;
  formComment = this.fb.group({ comment: [''] });
  readonly icons = AppIcons;
  authService: AuthService = inject(AuthService);
  user!: User;

  constructor() {
    this.authService.profile().subscribe({
      next: (user) => (this.user = user),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const taskChanges: SimpleChange = changes['selectedTask'];
    if (taskChanges && taskChanges.currentValue) {
      this.onChangeSelectedTask(taskChanges.currentValue);
    }
  }

  private onChangeSelectedTask(task: CardBoard) {
    this.isOpen = true;
    this.form = this.dataForm;
  }

  private get dataForm() {
    return this.fb.group({
      title: [this.selectedTask?.title ?? '', [Validators.required]],
      description: [this.selectedTask?.description ?? '', []],
    });
  }

  closedModal() {
    this.isOpen = false;
    this.taskClosed.emit(this.form.value);
  }

  get comments(): Comment[] {
    return this.selectedTask?.comments ?? [];
  }

  submitForm(event: Event) {
    event.preventDefault();
  }

  addComment(event: Event) {
    event.preventDefault();
    const date = new Date();
    const { comment } = this.formComment.value;
    if (!comment) {
      return;
    }

    const newComment: AddCommentProps = {
      comment: {
        timestamp: date.toISOString(),
        message: comment,
        user: this.user,
      },
      taskId: this.selectedTask?.id ?? '',
    };

    this.addNewComment.emit(newComment);
  }
}
