import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Character {
  /** Eindeutige Kennung, z.B. 'uiux', 'frontend' */
  id: string;
  /** Anzeigename */
  name: string;
  /** Pfad oder URL zum Bild */
  imageUrl: string;
  /** Kurztitel oder Rolle */
  role: string;
  /** Kurzprofil-Text */
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
