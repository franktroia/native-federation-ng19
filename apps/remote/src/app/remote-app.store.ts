import { combineReducers, createActionGroup, createFeature, createReducer, emptyProps, on } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { RemoteAppService } from './remote-app.service';
import { tap } from 'rxjs';

const featureName = 'remoteAppState';

export const RemoteActions = createActionGroup({
  source: featureName,
  events: {
    remoteLoaded: emptyProps(),
  },
});

export const remoteFeature = createFeature({
  name: featureName,
  reducer: combineReducers({
    remoteLoaded: createReducer(
      false,
      on(RemoteActions.remoteLoaded, () => true),
    ),
  }),
});

export const remoteEffect = createEffect(
  (actions$ = inject(Actions), remoteAppService = inject(RemoteAppService)) =>
    actions$.pipe(
      ofType(RemoteActions.remoteLoaded),
      tap(() => remoteAppService.loaded()),
    ),
  {
    dispatch: false,
    functional: true,
  },
);
