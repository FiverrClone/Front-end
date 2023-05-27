import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { DialogRef } from '@angular/cdk/dialog';
import { SnackBarService } from '../../services/snack-bar.service';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { BecomeSellerComponent } from '../become-seller/become-seller.component';

@Component({
  selector: 'app-signe-up',
  templateUrl: './signe-up.component.html',
  styleUrls: ['./signe-up.component.css']
})
export class SigneUpComponent  {
  SigneUpForm: FormGroup;
  hide = true;

  constructor(
    private _fb: FormBuilder ,  
    private _userService: UserService, 
    private _dialogRef: DialogRef<SigneUpComponent>,
    private _snackBarService: SnackBarService,
    private _Login: MatDialog,
    private _seller: MatDialog,
    ){
    this.SigneUpForm = this._fb.group({
      firstName: '',
      lastName: '',
      email:  new FormControl('', [Validators.required, Validators.email]),
      password: '',
      birthday: '',
      gender: '',
    })
  }
 
  OnFormSubmit(){
    if(this.SigneUpForm.valid)
    {
      this._userService.register(this.SigneUpForm.value).subscribe({
        next:(val: any)=>{
          const userResult: any = val.register;
          console.log(userResult)
          this._dialogRef.close();
        },
        error:(err: any)=>{
          console.log(err);
        },
      })
    }
  }

  openLoginForm() {
    this._Login.open(LoginComponent, { width: '500px', disableClose: false });
  }

  openBecomeSellerForm(): void {
    const dialogRef = this._seller.open(BecomeSellerComponent, {
      width: '400px',
    });
  }
}

 