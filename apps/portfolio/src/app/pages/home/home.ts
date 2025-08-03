import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  About,
  Character,
  PieChartComponent,
  ContactComponent,
  Heroshot,
  TestimonialComponent
} from "@lib/ui-components";
import {HttpClientModule} from "@angular/common/http";
import {RouterLink} from "@angular/router";

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
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit {
  @ViewChild('heading', {static: true}) heading!: ElementRef;

  chartData = [55, 30, 10, 5];
  chartLabels = ['UI/UX Designer', 'Frontend Entwickler', 'Berater', 'Bonus'];
  colors = ['#35538E', '#619691', '#BCB2AD', '#837BAC',];

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
      imageUrl: 'assets/ui-ux-me.jpg',
      skills: 'Fähigkeiten:',
      skillDescription: 'Nutzerprobleme & Bedürfnisse erkennen und ausgeklügelt lösen, mit stetigem Blick auf das große Ganze.',
      weaknesses: 'Schwächen:',
      weakenDescription: 'Unscharfe Bildschirme und direktes Sonnenlicht.'
    },
    {
      id: 'frontend',
      name: 'Frontend Hero',
      imageUrl: 'assets/frontend-me.jpg',
      skills: 'Fähigkeiten:',
      skillDescription: 'Technologie begeistert mit stetigen Updates, um immer auf dem neuesten Stand zu bleiben.',
      weaknesses: 'Schwächen:',
      weakenDescription: 'Zu wenig Koffein und Bewegung.'
    },
    {
      id: 'consulting',
      name: 'Consultant Pro',
      imageUrl: 'assets/consultant-me.jpg',
      skills: 'Fähigkeiten:',
      skillDescription: 'Überzeugend, geerdet, professionell, anpassbar.',
      weaknesses: 'Schwächen:',
      weakenDescription: 'Essen / rascheln / gähnen im Publikum.'
    },
    {
      id: 'bonus',
      name: 'Bonus Charakter',
      imageUrl: 'assets/bonus-me.jpg',
      skills: 'Fähigkeiten:',
      skillDescription: 'Humorvoll mit großer Portion Selbstironie. Fachmännischer Kaninchen Trainer.',
      weaknesses: 'Schwächen:',
      weakenDescription: 'Koffeingetränke und Tiere in jeglicher Art und Weise.'
    },
  ];
}
