import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { appEffects, appStore } from './+state/todo.state';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Import the 'environment' object

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideEffects(appEffects), // register the effects with the NgRx store
    provideStore(appStore), // register the reducers with the NgRx store
    provideStoreDevtools({ maxAge: 5, logOnly: environment.production }), // enable the NgRx store devtools
  ],
};
