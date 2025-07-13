import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent, Heroshot} from "@lib/ui-components";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    Heroshot,
    ContactComponent,
    HttpClientModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
}
