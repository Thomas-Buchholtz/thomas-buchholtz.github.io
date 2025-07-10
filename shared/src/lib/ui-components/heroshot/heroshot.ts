import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-heroshot',
  imports: [CommonModule],
  templateUrl: './heroshot.html',
  styleUrl: './heroshot.scss',
})
export class Heroshot {
  creativeOpacity = 0.5;

  onMouseMove(event: MouseEvent) {
    const container = event.currentTarget as HTMLElement;
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;

    const ratio = x / rect.width;

    this.creativeOpacity = 1 - ratio;
  }
}
