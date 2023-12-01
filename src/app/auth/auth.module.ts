import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    RouterOutlet,
    RouterModule,
  ],
  exports: [],
})
export class AuthModule {}
