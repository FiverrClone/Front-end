import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigneUpComponent } from './components/signe-up/signe-up.component';
import { LoginComponent } from './components/login/login.component';
import { BecomeSellerComponent } from './components/become-seller/become-seller.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchComponent } from './components/search/search.component';
import { GigComponent } from './components/gig/gig.component';

const routes: Routes = [
  {path: 'signe-up', component: SigneUpComponent},
  {path: 'login', component: LoginComponent},
  {path: 'become-seller', component: BecomeSellerComponent},
  {path: 'search', component: SearchComponent},
  {path: 'gig/:id', component: GigComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
