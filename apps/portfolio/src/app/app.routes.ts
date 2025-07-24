import {Route} from '@angular/router';
import {Home} from "./pages/home/home";

export const appRoutes: Route[] = [

  {path: '', component: Home},

  {
    path: 'cv',
    loadComponent: () =>
      import('./pages/cv/cv').then(m => m.Cv),
  },

  {
    path: '404',
    loadComponent: () =>
      import('./pages/pageNotFound/pageNotFound').then(m => m.PageNotFound),
  },

  {path: '**', redirectTo: ''}
];
