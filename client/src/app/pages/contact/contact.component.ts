import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm: FormGroup;
  isLoading = signal(false);
  successMessage = signal('');
  errorMessage = signal('');

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', [Validators.required]],
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onSubmit(): void {
    if (!this.contactForm.valid) {
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set('');
    this.successMessage.set('');

    this.apiService.submitContact(this.contactForm.value).subscribe(
      (response) => {
        this.isLoading.set(false);
        this.successMessage.set(response.message || 'Message sent successfully!');
        this.contactForm.reset();
      },
      (error) => {
        this.isLoading.set(false);
        this.errorMessage.set(
          error.error?.message || 'Failed to send message. Please try again.'
        );
      }
    );
  }
}
