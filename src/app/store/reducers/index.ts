import { ActionReducerMap, createSelector, createFeatureSelector, 
    ActionReducer, MetaReducer } from '@ngrx/store';
import * as fromUsers from './user.reducer';
import { environment } from '../../../environments/environment';

export interface State {
users: any;
}
export const reducers: ActionReducerMap<State> = {
users: fromUsers.UserReducer
};

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];