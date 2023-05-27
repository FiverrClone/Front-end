import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SigneUpComponent } from './components/signe-up/signe-up.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { BecomeSellerComponent } from './components/become-seller/become-seller.component';
import {MatChipsModule} from '@angular/material/chips';
import { SearchComponent } from './components/search/search.component';
import { GigComponent } from './components/gig/gig.component';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu'
import {MatSelectModule} from '@angular/material/select';
import { FirstPageComponent } from './components/first-page/first-page.component'
import { GigService } from './services/gig.service';
import { HomeComponent } from './components/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { FooterComponent } from './components/footer/footer.component';
import { DetailGigComponent } from './components/detail-gig/detail-gig.component';
import { CardFreelancerComponent } from './components/card-freelancer/card-freelancer.component';
import { GraphQLModule } from './graphql.module';
import { MultiformsComponent } from './components/multiforms/multiforms.component';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [
    AppComponent,
    SigneUpComponent,
    LoginComponent,
    NotFoundComponent,
    ForgotPasswordComponent,
    BecomeSellerComponent,
    SearchComponent,
    GigComponent,
    FirstPageComponent,
    HomeComponent,
    HeaderComponent,
    SidenavComponent,
    ProfileComponent,
    FooterComponent,
    DetailGigComponent,
    CardFreelancerComponent,
    MultiformsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatChipsModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatListModule,
    MatStepperModule,
    GraphQLModule,

  ],
  providers: [GigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
