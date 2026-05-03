import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, CommonModule } from '@angular/common';

interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}

@Component({
  selector: 'lib-chatbot',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, CommonModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.scss',
})

export class Chatbot {
  isOpen = false;
  userInput = '';
  isTyping = false;

  toggleChat(): void {
    this.isOpen = !this.isOpen;
  }

  @ViewChild('chatMessages') chatMessages?: ElementRef<HTMLDivElement>;

  messages: ChatMessage[] = [
    {
      sender: 'bot',
      text: 'Hi 👋 Ich bin Thomas’ Portfolio Assistant. Frag mich gerne etwas über seine Skills, Projekte, Fähigkeiten, Design oder Technologie Stack, Tools, Hobbies etc.',
    },
  ];

  sendMessage(): void {
    const question = this.userInput.trim();
    if (!question || this.isTyping) return;

    this.messages.push({ sender: 'user', text: question });
    this.userInput = '';
    this.isTyping = true;
    this.scrollToBottom();

    setTimeout(() => {
      this.messages.push({
        sender: 'bot',
        text: this.getBotAnswer(question),
      });

      this.isTyping = false;
      this.scrollToBottom();
    }, this.getTypingDelay(question));
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      const element = this.chatMessages?.nativeElement;
      if (element) {
        element.scrollTop = element.scrollHeight;
      }
    });
  }

  private getTypingDelay(question: string): number {
    const baseDelay = 700;
    const extraDelay = Math.min(question.length * 20, 1200);

    return baseDelay + extraDelay;
  }

  private includesAny(text: string, keywords: string[]): boolean {
    return keywords.some((keyword) => text.includes(keyword));
  }

  private getBotAnswer(question: string): string {
    const q = question.toLowerCase();

    if (this.includesAny(q, ['guten tag', 'hallo', 'hi', 'servus'])) {
      return 'Servus grüß dich! Frag mich zum Beispiel nach Thomas’ Skills, Projekten, Tools oder Kontaktmöglichkeiten.';
    }

    if (this.includesAny(q, ['wer bist du', 'über dich', 'about', 'erzähl', 'erzählen', 'was von dir'])) {
      return 'Thomas ist ein erfahrener Frontend Developer und UI/UX Designer mit über 7 Jahren Erfahrung. Sein Fokus liegt auf modernen Webtechnologien und der Entwicklung von nutzerfreundlichen Interfaces.';
    }

    if (this.includesAny(q, ['erfahrung', 'beruf', 'background'])) {
      return 'Thomas hat mehrere Jahre im Versicherungs- und Finanzbereich gearbeitet und dabei Webapplikationen, Kundenportale und Antragsstrecken entwickelt, in agilen Scrum-Teams.';
    }

    if (this.includesAny(q, ['skill', 'skills', 'tool', 'tools', 'werkzeug', 'technologie'])) {
      return 'Thomas arbeitet besonders gerne mit Angular, NX, TypeScript, SCSS, Bootstrap, Tailwind, JavaScript, Cypress und Supabase. Sein Fokus liegt dabei auf sauberen und intuitiven UIs, guter Struktur und verständlichem Code. Zusätzlich beherrscht er natürlich auch verschiedene Design-Tools wie Figma, die Adobe Cloud etc.';
    }

    if (this.includesAny(q, ['ki', 'ai', 'chatgpt', 'chat gpt', 'claude', 'gemini'])) {
      return 'Thomas sieht KI nicht als bedrohung, sondern als neues Tool, welches die heutige Arbeitswelt beschleunigen wird. Daher schaut er sich immer wieder neue Tools an, um stets up to date zu bleiben.';
    }

    if (this.includesAny(q, ['tech', 'technologien', 'entwicklung', 'frontend', 'stack'])) {
      return 'Thomas arbeitet mit Angular, React, Next.js und Nx. Zusätzlich nutzt er Tools wie Bootstrap, Tailwind, RxJS und Cypress für Testing.';
    }

    if (this.includesAny(q, ['hobby', 'hobbies', 'kaninchen', 'trends', 'persönlich', 'weiterentwicklung', 'interessen', 'privat'])) {
      return 'Neben der Arbeit interessiert sich Thomas für Technologie-Trends, Design und persönliche Weiterentwicklung. In seiner Freizeit macht er Sport, fotografiert und beschäftigt sich mit Themen wie Aktien und Krypto. Zusätzlich hat er zwei frei lebende Kaninchen, die Nugget und Cloud heißen und betreibt mit ihnen Social Media Kanäle.';
    }

    if (this.includesAny(q, ['projekt', 'projekte', 'portfolio'])) {
      return 'In seinen Projekten zeigt Thomas vor allem, dass er nicht nur auf Design, Nutzerführung und saubere Umsetzung achtet, sondern als "i" Tüpfelchen auch Code schreiben kann und technologisch sich up to date hält.';
    }

    if (this.includesAny(q, ['stärken', 'charakter', 'soft skills'])) {
      return 'Thomas ist sehr zuverlässig, arbeitet strukturiert und lösungsorientiert und bleibt auch in stressigen Situationen ruhig. Gleichzeitig legt er großen Wert auf Teamarbeit und gute Kommunikation.';
    }

    if (this.includesAny(q, ['ux', 'ui', 'design', 'design thinking'])) {
      return 'Thomas verbindet Entwicklung und Design. Er konzipiert Anwendungen, erstellt Prototypen und setzt diese technisch um – mit dem Ziel, dass sich Software nicht nur gut funktioniert, sondern sich auch gut anfühlt.';
    }

    if (this.includesAny(q, ['kontakt', 'email', 'erreichen'])) {
      return 'Du kannst Thomas am besten über das Kontaktformular erreichen. Alternativ findest du ihn auch über seine verlinkten Profile wie LinkedIn oder XING.';
    }

    if (this.includesAny(q, ['angular'])) {
      return 'Angular ist sein lieblings Frontend Framework, mit dem Thomas arbeitet.';
    }

    return 'Gute Frage 😊 Dazu habe ich noch keine Antwort. Kontaktiere ihn gerne bei weiteren Fragen, oder einem persönlichen kennenlernen mit dem Kontaktformular, oder auch über einen beliebigen Social Media Link im Footer.';
  }
}
