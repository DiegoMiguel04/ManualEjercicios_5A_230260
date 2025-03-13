import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './practica12c.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};