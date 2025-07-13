import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {Footer, Navbar} from "@lib/ui-components";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Navbar,
    Footer
  ],
  templateUrl: './app.html',
})
export class AppComponent {}
