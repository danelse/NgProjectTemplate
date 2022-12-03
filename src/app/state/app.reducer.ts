import { createReducer, on } from '@ngrx/store';
import { AppStateModel } from '../models/app-state.model';
import { AppActions } from './app.actions';

const initialState: AppStateModel = {
  randomNumber: Math.floor(Math.random() * (1000)),
};

export const appReducer = createReducer(
  initialState,
  on(AppActions.changenumber, (_state, { number }) => {
    return {
      ..._state,
      randomNumber: number,
    };
  }),
);
