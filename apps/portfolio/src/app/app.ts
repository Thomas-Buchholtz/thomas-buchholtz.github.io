import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {Cv} from "./features/cv";
import {Navbar} from "@lib/ui-components";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Cv,
    Navbar
  ],
  templateUrl: './app.html',
})
export class AppComponent {}
