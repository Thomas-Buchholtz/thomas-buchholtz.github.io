import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Heroshot} from "@lib/ui-components";

@Component({
  selector: 'app-home',
  imports: [CommonModule, Heroshot],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
