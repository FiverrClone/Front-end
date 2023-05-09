import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigneUpComponent } from './components/signe-up/signe-up.component';
import { LoginComponent } from './components/login/login.component';
import { BecomeSellerComponent } from './components/become-seller/become-seller.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: 'signe-up', component: SigneUpComponent},
  {path: 'login', component: LoginComponent},
  {path: 'become-seller', component: BecomeSellerComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
