import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';

import { RemoteAppService } from './remote-app.service';
import { provideState } from '@ngrx/store';
import { remoteEffect, remoteFeature } from './remote-app.store';
import { provideEffects } from '@ngrx/effects';

export const provideRemoteApp = (): EnvironmentProviders =>
  makeEnvironmentProviders([RemoteAppService, provideState(remoteFeature), provideEffects({ remoteEffect })]);
