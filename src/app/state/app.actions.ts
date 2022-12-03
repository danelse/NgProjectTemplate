
import { createActionGroup, props } from '@ngrx/store';

export const AppActions = createActionGroup({
  source: 'App',
  events: {
    'changenumber': props<{ number: number }>(),
  },
});
