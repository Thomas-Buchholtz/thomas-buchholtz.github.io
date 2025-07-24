import { Component, inject } from '@angular/core';
import { SupabaseContactService } from '../../service/supabase-contact.service';
import { FormBuilder, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Modal } from 'bootstrap';

@Component({
  selector: 'lib-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private contactService = inject(SupabaseContactService);

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, emailWithUmlautValidator]],
    message: ['', Validators.required],
  });

  onSubmit() {
    if (this.contactForm.invalid) return;

    const name = this.contactForm.get('name')?.value as string;
    const email = this.contactForm.get('email')?.value as string;
    const message = this.contactForm.get('message')?.value as string;

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

function emailWithUmlautValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!value || emailRegex.test(value)) {
    return null;
  }

  return { email: true };
}
