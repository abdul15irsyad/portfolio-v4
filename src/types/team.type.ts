import { User } from './user.type';

export interface Team {
  userId: string;
  user?: User;
  role: string;
}
