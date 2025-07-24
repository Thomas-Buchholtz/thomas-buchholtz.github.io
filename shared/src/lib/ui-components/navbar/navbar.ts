import {AfterViewInit, Component, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'lib-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements AfterViewInit {

  ngAfterViewInit() {
    this.scrollToContactIfRequested();
  }
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 10;
  }

  scrollToContact(): void {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({behavior: 'smooth', block: 'start'});
    } else {
      console.warn('Kontakt-Element nicht gefunden');
    }
  }

  private scrollToContactIfRequested(): void {
    if (window.location.hash === '#kontakt') {
      setTimeout(() => this.scrollToContact(), 100);
    }
  }
}
