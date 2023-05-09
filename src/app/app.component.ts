import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SigneUpComponent } from './components/signe-up/signe-up.component';
import { LoginComponent } from './components/login/login.component';
import { SnackBarService } from './services/snack-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'FiverrClone';

  constructor(private _SigneUp: MatDialog, private _Login: MatDialog, private _snackBarService: SnackBarService) { }

  openSigneUpForm() {
    this._SigneUp.open(SigneUpComponent, { width: '500px', disableClose: false });
  }

  openLoginForm() {
    this._Login.open(LoginComponent, { width: '500px', disableClose: false });
  }
}