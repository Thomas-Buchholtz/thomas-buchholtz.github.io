import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Character {
  id: string;
  name: string;
  imageUrl: string;
  skills: string;
  skillDescription: string;
  weaknesses: string;
  weakenDescription: string;
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
  selectedCharacter: any = null;
  isClosing = false;

  openModal(character: any): void {
    this.selectedCharacter = character;
    this.isClosing = false;
  }

  closeModal(): void {
    this.isClosing = true;

    setTimeout(() => {
      this.selectedCharacter = null;
      this.isClosing = false;
    }, 200);
  }
}
