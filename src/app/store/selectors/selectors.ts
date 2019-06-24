import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../../models/app.state'; 
import { UserPost, User } from '../../models/user.model';


export const selectedUser = (state: AppState) => state.selectedUser;
const allPosts = (state: AppState) => state.posts;
const allUsers = (state: AppState) => state.users;

export const getAppState = createFeatureSelector<AppState>('users');

export const getUsersState = createSelector(getAppState, allUsers);
export const getPostsState = createSelector(getAppState, allPosts);
export const getUserState = createSelector(getAppState, selectedUser);
