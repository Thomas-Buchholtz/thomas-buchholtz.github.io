import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent, Heroshot, TestimonialComponent} from "@lib/ui-components";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    Heroshot,
    ContactComponent,
    HttpClientModule,
    TestimonialComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit {
@ViewChild('heading', { static: true }) heading!: ElementRef;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.heading.nativeElement.classList.add('visible');
          observer.unobserve(this.heading.nativeElement);
        }
      },
      {
        threshold: 1
      }
    );

    observer.observe(this.heading.nativeElement);
  }
}
