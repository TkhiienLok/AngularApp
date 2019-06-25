import { User, UserPost } from "./user.model";
export interface AppState {
  readonly selectedUser: User;
  readonly users: User[];
  readonly posts: UserPost[];
}