import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SigneUpComponent } from './components/signe-up/signe-up.component';
import { LoginComponent } from './components/login/login.component';
import { SnackBarService } from './services/snack-bar.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'FiverrClone';
  
  constructor(
    private _SigneUp: MatDialog,
    private _Login: MatDialog,
    private _snackBarService: SnackBarService,
  ) {}

  openSigneUpForm() {
    this._SigneUp.open(SigneUpComponent, { width: '500px', disableClose: false });
  }

  openLoginForm() {
    this._Login.open(LoginComponent, { width: '500px', disableClose: false });
  }

  navbg: any;
  navbg2: any;
  @HostListener('document:scroll') scrollover() {
    console.log(document.body.scrollTop, 'scrolllength#');

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navbg = {
        'background-color':'yellow',
        'position':'fixed',        
      }
      this.navbg2={
        'transform': 'translateY(-100%)',
        'transition': 'transform 0.2s ease-out',
      }
    } else {
      this.navbg = {}
      this.navbg2={}
    }
  }



}