import { Component, createEnvironmentInjector, EnvironmentInjector, inject } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { Store } from '@ngrx/store';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
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
