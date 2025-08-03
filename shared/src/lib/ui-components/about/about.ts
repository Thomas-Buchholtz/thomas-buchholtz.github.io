import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Character {
  id: string;
  name: string;
  imageUrl: string;
  role: string;
  description: string;
}

@Component({
  selector: 'lib-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
})
export class About {
  @Input() characters: Character[] = [];
  selectedCharacter: Character | null = null;

  openModal(character: Character): void {
    this.selectedCharacter = character;
  }

  closeModal(): void {
    this.selectedCharacter = null;
  }
}
