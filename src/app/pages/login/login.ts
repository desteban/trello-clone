import { Component, inject } from '@angular/core';
import { Button } from '../../components/button/button';
import { InputField, InputFieldVariants } from '../../components/input-field/input-field';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/Auth/auth-service';

@Component({
  selector: 'app-login',
  imports: [Button, InputField, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private router: Router = inject(Router);
  private authService: AuthService = inject(AuthService);
  private fb: FormBuilder = inject(FormBuilder);
  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  private LoginFormErrors: { [key: string]: string } = {
    required: 'El campo es obligatorio',
    email: 'Debe ingresar un correo electrónico valido',
  };

  getErrorsField(controlName: string): string | null {
    const control = this.loginForm.get(controlName);
    if (!control || !control.errors || !control.touched) return null;

    const errorsKey = Object.keys(control.errors)[0];
    if (!errorsKey) return null;

    return this.LoginFormErrors[errorsKey] ?? null;
  }

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

    const data = this.loginForm.value;
    this.authService.login(data).subscribe({
      next: (tokens) => {
        console.log('tokens', tokens);

        this.router.navigate(['boards']);
      },
    });
  }
}
