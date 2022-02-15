import { Component } from '@angular/core';

@Component({
  selector: 'Register',
  template: ` <div>
    <auth-form (submitted)="registerUser($event)">
    <h1>Register</h1>
    <a routerLink='/auth/login'> Already have an account?</a>
    <button type="Submit">Create Account</button>
    </auth-form>
    </div> `,
  styleUrls: ['register.component.scss'],
})
export class RegisterComponent {

  registerUser(event){
    console.log(event.value);
  }
}
