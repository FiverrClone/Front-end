import { AppUser } from './../../model/user.model';
import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { MatDialog } from '@angular/material/dialog';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { MultiformsComponent } from '../multiforms/multiforms.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  LoginForm: FormGroup;
  errorMsg: any;
  hide = true;

  constructor(
    private _fb: FormBuilder,
    private _dialogRef: DialogRef<LoginComponent>,
    private _router: Router,
    private _login: LoginService,
    private _SigneUp: MatDialog,
    private _Forgot: MatDialog,
  ) {
    this.LoginForm = this._fb.group({
      email: this._fb.control(""),
      password: this._fb.control(""),
    })
  }

  OnFormLogin() {
    let email = this.LoginForm.value.email;
    let password = this.LoginForm.value.password;
    this._login.login(email, password).subscribe({
      next: (AppUser) => {
        this._login.authenticateUser(AppUser).subscribe({
          next: (data: boolean) => {
            this._dialogRef.close();
            this._router.navigateByUrl("./home");
          }
        });
      },
      error: (err) => {
        this.errorMsg = err;
      }
    });
  }

  openMultiforms() {
    this._SigneUp.open(MultiformsComponent, { width: '500px', disableClose: false });
  }

  openForgotPasswordForm(): void {
    const dialogRef = this._Forgot.open(ForgotPasswordComponent, {
      width: '350px',
    });
  }

}
