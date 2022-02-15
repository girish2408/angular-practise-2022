import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'auth-form',
  template: ` <div class="auth-form">
    <form [formGroup]="form" (ngSubmit)= "onSubmit()"> 
      <ng-content select="h1"></ng-content>
      <label>
        <input type="email" formControlName="email" placeholder="Type Email">
      </label>
      <label>
        <input type="password" formControlName="password" placeholder="Type Password">
      </label>
      <div class="error" *ngIf="emailFormat">Invalid Email format</div>
      <div class="error" *ngIf="PasswordFormat">Password is required</div>
      <ng-content select=".error"></ng-content>
      <div class="auth-form__action">
        <ng-content select="button"></ng-content>
      </div>
      <div class="auth-form__toggle">
        <ng-content select="a"></ng-content>
      </div>
    </form>
  </div> `,
  styleUrls: ['auth-form.component.scss'],
})
export class AuthFormComponent {

  @Output() submitted = new EventEmitter<any>();
  form = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required]
  })
  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.form.valid) {
      this.submitted.emit(this.form);
    }
  }

  get emailFormat() {
    const control = this.form.get('email');
    return control?.hasError('email') && control.touched;
  }

  get PasswordFormat() {
    const control = this.form.get('password');
    return control?.hasError('required') && control.touched;
  }

}
