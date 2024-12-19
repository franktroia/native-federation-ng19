import { loadRemoteModule } from '@angular-architects/native-federation';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { createReducer, provideStore } from '@ngrx/store';
import { AppComponent } from './app.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideStore({
      host: createReducer(true),
    }),
    provideRouter([
      {
        path: '',
        component: AppComponent,
      },
      {
        path: 'remote',
        loadChildren: () => loadRemoteModule('remote', './routes').then(m => m.remoteAccessRoutes),
      },
    ]),
  ],
};
