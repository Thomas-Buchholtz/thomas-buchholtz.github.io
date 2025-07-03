import { Route } from '@angular/router';
import {Cv} from './pages/cv/cv';
import {NotFound} from "./pages/notfound/404";

export const appRoutes: Route[] = [

  {path: '', component: NotFound},

  {path: 'cv', component: Cv},

  {path: '**', redirectTo: ''}
];
