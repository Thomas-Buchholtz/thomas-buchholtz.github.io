import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  role: string;
  imageUrl: string;
  text: string;
  linkedinUrl?: string;
}

@Component({
  selector: 'lib-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.html',
  styleUrl: './testimonial.scss',
})
export class TestimonialComponent {
  @Input() testimonials: Testimonial[] = [];
  currentIndex = 0;
  isFading = false;

  changeIndex(next: boolean) {
    this.isFading = true;

    setTimeout(() => {
      this.currentIndex = next
        ? (this.currentIndex + 1) % this.testimonials.length
        : (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
      this.isFading = false;
    }, 300);
  }

  goToIndex(index: number) {
    if (index === this.currentIndex || this.isFading) return;
    this.isFading = true;

    setTimeout(() => {
      this.currentIndex = index;
      this.isFading = false;
    }, 300);
  }

}
