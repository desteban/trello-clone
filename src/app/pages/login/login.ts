import { Component, inject } from '@angular/core';
import { Button } from '../../components/button/button';
import { InputField, InputFieldVariants } from '../../components/input-field/input-field';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [Button, InputField, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private router: Router = inject(Router);
  private fb: FormBuilder = inject(FormBuilder);
  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  get InputType() {
    return InputFieldVariants;
  }

  Submit(e: Event) {
    e.preventDefault();

    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) {
      console.error('Error', this.loginForm.value);
      return;
    }

    this.router.navigate(['boards']);
  }
}
