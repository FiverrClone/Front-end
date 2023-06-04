import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { MultiformsComponent } from './components/multiforms/multiforms.component';
import { GigFormComponent } from './components/gig-form/gig-form.component';

/*
import { NotFoundComponent } from './LazyLoadedModules/user/components/not-found/not-found.component';
import { SearchComponent } from './LazyLoadedModules/user/components/search/search.component';
import { GigComponent } from './components/gig/gig.component';
import { HomeComponent } from './LazyLoadedModules/user/components/home/home.component';
import { FirstPageComponent } from './LazyLoadedModules/user/components/first-page/first-page.component';
import { ProfileComponent } from './LazyLoadedModules/user/components/profile/profile.component';
import { DetailGigComponent } from './LazyLoadedModules/user/components/detail-gig/detail-gig.component';*/


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./LazyLoadedModules/user/user.module').then((m) => m.UserModule)
  },
  { path: 'multiforms', component: MultiformsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'formGig', component: GigFormComponent },
  { path: '', redirectTo: 'firstpage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
