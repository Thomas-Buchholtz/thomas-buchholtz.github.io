import { Component, HostListener } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Chatbot } from "@lib/ui-components";

interface Photo {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

@Component({
  selector: 'app-photography',
  standalone: true,
  imports: [NgFor, NgIf, Chatbot],
  templateUrl: './photography.html',
  styleUrl: './photography.scss',
})
export class Photography {
  selectedPhoto: Photo | null = null;
  selectedIndex = 0;
  isClosing = false;
  photos: Photo[] = [
    {
      title: 'Madeira',
      description: 'Inselspitze von Madeira',
      imageUrl: 'assets/photography/vacation_1.JPG',
      category: 'Drohne DJI Mini II',
    },
    {
      title: 'Madeira',
      description: 'Inselspitze von Madeira',
      imageUrl: 'assets/photography/vacation_2.JPG',
      category: 'Sony Alpha 7 III Kamera',
    }, {
      title: 'Madeira',
      description: 'Funchal',
      imageUrl: 'assets/photography/vacation_3.JPG',
      category: 'Drohne DJI Mini II',
    }, {
      title: 'Madeira',
      description: 'Inselspitze von Madeira',
      imageUrl: 'assets/photography/vacation_4.JPG',
      category: 'Sony Alpha 7 III Kamera',
    }, {
      title: 'Madeira',
      description: 'Funchal',
      imageUrl: 'assets/photography/vacation_5.JPG',
      category: 'Drohne DJI Mini II',
    }, {
      title: 'Algarve',
      description: 'Lagos',
      imageUrl: 'assets/photography/vacation_6.JPG',
      category: 'Drohne DJI Mini II',
    }, {
      title: 'Algarve',
      description: 'Lagos',
      imageUrl: 'assets/photography/vacation_7.JPG',
      category: 'Drohne DJI Mini II',
    }, {
      title: 'Algarve',
      description: 'Budens',
      imageUrl: 'assets/photography/vacation_8.JPG',
      category: 'Drohne DJI Mini II',
    }, {
      title: 'Algarve',
      description: 'Lagos',
      imageUrl: 'assets/photography/vacation_9.JPG',
      category: 'Drohne DJI Mini II',
    },{
      title: 'Algarve',
      description: 'Lagos',
      imageUrl: 'assets/photography/vacation_10.JPG',
      category: 'Drohne DJI Mini II',
    },{
      title: 'Madeira',
      description: 'São Vicente',
      imageUrl: 'assets/photography/vacation_11.JPG',
      category: 'Sony Alpha 7 III Kamera',
    },{
      title: 'Algarve',
      description: 'Budens',
      imageUrl: 'assets/photography/vacation_12.JPG',
      category: 'Sony Alpha 7 III Kamera',
    },{
      title: 'Madeira',
      description: 'Machico',
      imageUrl: 'assets/photography/vacation_13.JPG',
      category: 'Sony Alpha 7 III Kamera',
    },{
      title: 'Madeira',
      description: 'Porto Moniz',
      imageUrl: 'assets/photography/vacation_14.JPG',
      category: 'Sony Alpha 7 III Kamera',
    },{
      title: 'Algarve',
      description: 'Sagres',
      imageUrl: 'assets/photography/vacation_15.JPG',
      category: 'Sony Alpha 7 III Kamera',
    },{
      title: 'Algarve',
      description: 'Sagres',
      imageUrl: 'assets/photography/vacation_16.JPG',
      category: 'Sony Alpha 7 III Kamera',
    },{
      title: 'Lissabon',
      description: 'Estrela',
      imageUrl: 'assets/photography/vacation_17.JPG',
      category: 'Sony Alpha 7 III Kamera',
    },{
      title: 'Lissabon',
      description: 'Estrela',
      imageUrl: 'assets/photography/vacation_18.JPG',
      category: 'Sony Alpha 7 III Kamera',
    },
  ];

  openModal(photo: Photo, index: number): void {
    this.selectedPhoto = photo;
    this.selectedIndex = index;
    this.isClosing = false;
  }

  closeModal(): void {
    this.isClosing = true;

    setTimeout(() => {
      this.selectedPhoto = null;
      this.isClosing = false;
    }, 220);
  }

  nextPhoto(event?: Event): void {
    event?.stopPropagation();
    this.selectedIndex = (this.selectedIndex + 1) % this.photos.length;
    this.selectedPhoto = this.photos[this.selectedIndex];
  }

  previousPhoto(event?: Event): void {
    event?.stopPropagation();
    this.selectedIndex =
      (this.selectedIndex - 1 + this.photos.length) % this.photos.length;
    this.selectedPhoto = this.photos[this.selectedIndex];
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.selectedPhoto) {
      this.closeModal();
    }
  }

  @HostListener('document:keydown.arrowRight')
  onArrowRight(): void {
    if (this.selectedPhoto) {
      this.nextPhoto();
    }
  }

  @HostListener('document:keydown.arrowLeft')
  onArrowLeft(): void {
    if (this.selectedPhoto) {
      this.previousPhoto();
    }
  }
}
