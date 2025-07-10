import { Route } from '@angular/router';
import {Cv} from './pages/cv/cv';
import {Home} from "./pages/home/home";

export const appRoutes: Route[] = [

  {path: '', component: Home},

  {path: 'cv', component: Cv},

  {path: '**', redirectTo: ''}
];
