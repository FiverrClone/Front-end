import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchComponent } from './components/search/search.component';
import { GigComponent } from './components/gig/gig.component';
import { HomeComponent } from './components/home/home.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DetailGigComponent } from './components/detail-gig/detail-gig.component';
import { MultiformsComponent } from './components/multiforms/multiforms.component';
import { GigFormComponent } from './components/gig-form/gig-form.component';

const routes: Routes = [ 
  {path: 'firstpage', component: FirstPageComponent},
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'multiforms', component: MultiformsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path:'formGig', component:GigFormComponent},
  {path: 'search', component: SearchComponent},
  {path: 'gig-details/:gigId', component: DetailGigComponent},
  {path: '', redirectTo: 'firstpage', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
