import { Component } from '@angular/core';

@Component({
  selector: 'login',
  template: ` <div>
    <auth-form (submitted)="loginUser($event)">
      <h1>Login</h1>
      <a routerLink='/auth/register'> Not registered?</a>
      <button type="Submit">Login</button>
    </auth-form>
    </div> `,
  styleUrls: ['login.component.scss'],
})
export class LoginComponent {

  loginUser(event) {
    console.log(event.value);
  }
}
