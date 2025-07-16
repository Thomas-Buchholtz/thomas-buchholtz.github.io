import {Component, ElementRef, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cv',
  imports: [CommonModule],
  templateUrl: './cv.html',
})
export class Cv {
  currentPage = 1;

  @ViewChild('dateText', { static: false }) dateTextRef!: ElementRef<SVGTextElement>;

  currentDate = new Date().toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  ngAfterViewInit(): void {
    if (this.dateTextRef?.nativeElement) {
      this.dateTextRef.nativeElement.textContent = this.currentDate;
    }
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < 2) this.currentPage++;
  }
}
