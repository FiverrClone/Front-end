import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailGigComponent } from './components/detail-gig/detail-gig.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RootComponent } from './components/root/root.component';
import { AuthenticationGuard } from 'src/app/guards/authentication.guard';

const routes: Routes = [
  {
    path: '', component: RootComponent, children: [
      { path: 'firstpage', component: FirstPageComponent },
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent, canActivate:[AuthenticationGuard] },
      { path: 'search', component: SearchComponent },
      { path: 'gig-details/:gigId', component: DetailGigComponent},
      { path: 'payment', component: PaymentComponent, },
      { path: '', redirectTo: 'firstpage', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
