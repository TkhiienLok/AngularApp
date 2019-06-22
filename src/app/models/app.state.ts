import { User, UserPost } from "./user.model";
export interface AppState {
  readonly users: User[];
  readonly posts: UserPost[];
}