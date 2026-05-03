import { Route } from '@angular/router';
import {Cv} from './pages/cv/cv';
import {Home} from "./pages/home/home";
import {NotFound} from "./pages/notfound/404";
import { Photography } from './pages/photography/photography';

export const appRoutes: Route[] = [

  {path: '', component: Home},

  {path: 'cv', component: Cv},

  {path: 'photography', component: Photography},

  {path: '404', component: NotFound},

  {path: '**', redirectTo: ''}
];
