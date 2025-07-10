import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {Navbar} from "@lib/ui-components";
import {Home} from "./pages/home/home";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Navbar,
    Home,
  ],
  templateUrl: './app.html',
})
export class AppComponent {}
