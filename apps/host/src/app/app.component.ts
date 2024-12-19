import { Component, createEnvironmentInjector, EnvironmentInjector, inject } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  template: `<button (click)="loadRemoteApp()">Load remote app</button>`,
  standalone: true,
})
export class AppComponent {
  private _environmentInjector = inject(EnvironmentInjector);
  private _store = inject(Store);

  private _provided = false;

  loadRemoteApp(): void {
    loadRemoteModule('remote', './provider').then(({ provideRemoteApp, RemoteActions }) => {
      if (!this._provided) {
        createEnvironmentInjector([provideRemoteApp()], this._environmentInjector);

        this._provided = true;
      }

      this._store.dispatch(RemoteActions.remoteLoaded());
    });
  }
}
