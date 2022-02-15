import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { RegisterComponent } from './container/register/register.component';

export const routes: Routes = [{ path: '', component: RegisterComponent }];

@NgModule({
imports:[
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
],
declarations: [
    RegisterComponent,
],
providers:[]
})
export class RegisterModule {}