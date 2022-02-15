import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


// import { provideFirebaseApp, FirebaseOptions  } from '@angular/fire/app';
// import { AuthModule } from '@angular/fire/auth';
// import { DatabaseModule } from '@angular/fire/database';


import { SharedModule } from './shared/shared.module';
import { initializeApp } from 'firebase/app/dist/app';



// export const firebaseConfig: FirebaseOptions = {
//   apiKey: "AIzaSyCtsvLkfHFclFsoBRclBtLEWL9YglCF9zA",
//   authDomain: "angular-app-2022.firebaseapp.com",
//   databaseURL: "https://angular-app-2022-default-rtdb.firebaseio.com",
//   projectId: "angular-app-2022",
//   storageBucket: "angular-app-2022.appspot.com",
//   messagingSenderId: "365009480168",
//   appId: "1:365009480168:web:c4594afa4f38c078e19c5d",
//   measurementId: "G-1FSKDZL9WJ"
// };

export const ROUTES: Routes = [
    {
        path: 'auth',
        children: [
            {path: '', pathMatch: 'full', redirectTo: 'login'},
            {path: 'login', loadChildren: () => import('./login/login.module').then(x => x.LoginModule)},
            {path: 'register', loadChildren: () => import('./register/register.module').then(x => x.RegisterModule)},
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        // provideFirebaseApp(() => initializeApp(firebaseConfig)),
        // AuthModule,
        // DatabaseModule,
        SharedModule
    ],
    declarations: [],
    providers: [],
    exports: []
})
export class AuthModule1 {}