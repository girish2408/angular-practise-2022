import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { AuthFormComponent } from './component/auth-form/auth-form.component';

@NgModule({
imports:[
    CommonModule,
    ReactiveFormsModule
],
declarations: [
    AuthFormComponent
],
providers:[],
exports:[AuthFormComponent]
})
export class SharedModule {}