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
    // let email = this.LoginForm.value.email;
    // let password = this.LoginForm.value.password;
    // const loginInput={email,password}
    // this._login.loginUser(loginInput).subscribe((result:any)=>{
    //   if (result){
    //     localStorage.setItem('tokenJWT', result.token);
    //     console.log('login correcto');
        // this.auth.updateStateSession(true);
      //   this.router.navigate(['/me']);
      // } else {
      //   this.error = true;
      //   this.show = true;
      //   this.auth.updateStateSession(false);
      //   localStorage.removeItem('tokenJWT');
      //   console.log('login incorrecto');
      //   this.sendData = false;
      // }
    // })
           
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
