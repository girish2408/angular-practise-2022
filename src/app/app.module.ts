import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules
import { AuthModule1 } from '../auth/auth.module';


import { AppComponent } from './containers/app/app.component';



export const ROUTES: Routes = [
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule1,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
    Store
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

