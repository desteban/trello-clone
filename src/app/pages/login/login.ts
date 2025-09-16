import { Component } from '@angular/core';
import { Button } from '../../components/button/button';

@Component({
  selector: 'app-login',
  imports: [Button],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  Submit(e: Event) {
    e.preventDefault();
  }
}
