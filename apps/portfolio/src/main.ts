import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import 'bootstrap';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
  ]
});
