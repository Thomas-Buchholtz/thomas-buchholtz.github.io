import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {About, Character, PieChartComponent, ContactComponent, Heroshot, TestimonialComponent} from "@lib/ui-components";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    Heroshot,
    ContactComponent,
    HttpClientModule,
    TestimonialComponent,
    About,
    PieChartComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit {
@ViewChild('heading', { static: true }) heading!: ElementRef;

  chartData = [55, 30, 10, 5];
  chartLabels = ['UI/UX Designer', 'Frontend Entwickler', 'Berater', 'Bonus'];
  colors =['#35538E', '#619691', '#BCB2AD', '#837BAC',];

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

  characters: Character[] = [
    {
      id: 'uiux',
      name: 'UI/UX Master',
      imageUrl: 'assets/marie_vormwald.jpg',
      role: 'UI/UX Designer',
      description: 'Experte für Nutzerfreundlichkeit und Design.'
    },
    {
      id: 'frontend',
      name: 'Frontend Hero',
      imageUrl: 'assets/sebastian_scholz.jpg',
      role: 'Frontend Entwickler',
      description: 'Leidenschaftlicher Angular- und CSS-Zauberer.'
    },
    {
      id: 'consulting',
      name: 'Consultant Pro',
      imageUrl: 'assets/heroshot_code_2.jpg',
      role: 'Consultant',
      description: 'Berät strategisch und lösungsorientiert.'
    },
    {
      id: 'bonus',
      name: 'Bonus Charakter',
      imageUrl: 'assets/mobile_hero_2.jpg',
      role: 'Special Guest',
      description: 'Überraschungsgast mit besonderen Skills.'
    },
  ];
}
