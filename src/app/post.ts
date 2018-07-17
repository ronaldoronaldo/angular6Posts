import {User} from './user';

export class Post {
  id: number;
  message: string;
  date: string;
  beingEdited: boolean;
  userPopUp: boolean;
  user: User;
}
