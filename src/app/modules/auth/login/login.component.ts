import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  passwordVisible = false;

  togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
  }
}
