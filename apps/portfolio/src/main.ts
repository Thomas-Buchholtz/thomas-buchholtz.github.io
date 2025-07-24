import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import {provideRouter, withInMemoryScrolling} from '@angular/router';
import { appRoutes } from './app/app.routes';
import 'bootstrap';
import {provideHttpClient} from "@angular/common/http";

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(
      appRoutes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      })
    ),
  ]
});
