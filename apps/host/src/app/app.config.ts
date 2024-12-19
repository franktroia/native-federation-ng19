import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { createReducer, provideStore } from '@ngrx/store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideStore({
      host: createReducer(true),
    }),
  ],
};
