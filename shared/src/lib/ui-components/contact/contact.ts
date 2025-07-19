import {Component} from '@angular/core';
import {SupabaseContactService} from '../../service/supabase-contact.service';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Modal} from 'bootstrap';

@Component({
  selector: 'lib-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: SupabaseContactService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) return;

    const {name, email, message} = this.contactForm.value;

    this.contactService.sendContactMessage(name, email, message).subscribe({
      next: () => {
        this.contactForm.reset();
        this.showModal();
      },
      error: () => {
        alert('Es ist ein Fehler aufgetreten. Bitte versuche es erneut.');
      },
    });
  }

  showModal() {
    const modalElement = document.getElementById('successModal');
    if (modalElement) {
      const modal = new Modal(modalElement);
      modal.show();
    }
  }
}
