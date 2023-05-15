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

  ],
  providers: [GigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
