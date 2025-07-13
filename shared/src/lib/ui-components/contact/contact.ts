import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SupabaseContactService} from "../../service/supabase-contact.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'lib-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  success = false;
  error = false;

  constructor(private contactService: SupabaseContactService) {}

  onSubmit() {
    this.contactService
      .sendContactMessage(this.name, this.email, this.message)
      .subscribe({
        next: () => {
          this.success = true;
          this.error = false;
          this.name = '';
          this.email = '';
          this.message = '';
        },
        error: () => {
          this.success = false;
          this.error = true;
        },
      });
  }
}
