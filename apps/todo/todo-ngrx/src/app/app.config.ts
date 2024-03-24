import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { appEffects, appStore } from './+state/todo.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(appEffects), // register the effects with the NgRx store
    provideStore(appStore), // register the reducers with the NgRx store
    provideRouter(appRoutes),
  ],
};
