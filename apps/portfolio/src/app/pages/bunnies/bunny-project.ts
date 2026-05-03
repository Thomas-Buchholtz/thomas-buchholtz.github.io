import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Chatbot } from "@lib/ui-components";

interface Metric {
  label: string;
  value: string;
  description: string;
}

interface Task {
  icon: string;
  title: string;
  text: string;
}

interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-rabbit-project',
  standalone: true,
  imports: [NgFor, Chatbot],
  templateUrl: './bunny-project.html',
  styleUrl: './bunny-project.scss',
})
export class RabbitProjectComponent {
  metrics: Metric[] = [
    {
      label: 'Content Creation',
      value: 'Short-form Video',
      description: 'Videoschnitt, Storytelling, Texte und visuelle Aufbereitung.',
    },
    {
      label: 'Channels',
      value: 'TikTok · Instagram · Beacons',
      description: 'Aufbau und Pflege verschiedener Social-Media-Touchpoints.',
    },
    {
      label: 'Funnel',
      value: 'Affiliate Links',
      description: 'Verlinkung und Monetarisierung über Beacons.ai und Amazon.',
    },
  ];

  tasks: Task[] = [
    {
      icon: 'bi-camera-reels',
      title: 'Video Editing',
      text: 'Schnitt, Timing, Untertitel, Story-Aufbau und Anpassung an Plattformformate.',
    },
    {
      icon: 'bi-pencil-square',
      title: 'Storytelling',
      text: 'Entwicklung kurzer, sympathischer Geschichten rund um die Kaninchen.',
    },
    {
      icon: 'bi-bar-chart-line',
      title: 'Analytics',
      text: 'Auswertung von Reichweite, Engagement und Performance der Inhalte.',
    },
    {
      icon: 'bi-link-45deg',
      title: 'Affiliate Funnel',
      text: 'Bündelung von Links, Social Channels und Affiliate-Zielen über Beacons.ai.',
    },
  ];

  socialLinks: SocialLink[] = [
    {
      label: 'TikTok',
      url: 'https://www.tiktok.com/@nugget_n_cloud?_r=1&_t=ZG-963y0YiTYX2',
      icon: 'bi-tiktok',
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/nugget_n_cloud?igsh=dXlwMmZ1Z2VsaWR0&utm_source=qr',
      icon: 'bi-instagram',
    },
    {
      label: 'Beacons.ai',
      url: 'https://beacons.ai/nugget_n_cloud',
      icon: 'bi-link-45deg',
    },
  ];
}
