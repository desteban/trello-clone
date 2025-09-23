import { User } from './User';

export interface Comment {
  user: User;
  message: string;
  timestamp: string;
}

export interface CreateCommentDTO {
  boardSlug: string;
  idList: string;
  taskId: string;
  comment: Comment;
}
