import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SigneUpComponent } from '../signe-up/signe-up.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/app/services/snack-bar.service';


@Component({
  selector: 'app-become-seller',
  templateUrl: './become-seller.component.html',
  styleUrls: ['./become-seller.component.css']
})


export class BecomeSellerComponent {
  BecomeSellerForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _dialogRef: DialogRef<BecomeSellerComponent>,
    private _SigneUp: MatDialog,
    private _router: Router,
    private _snackBarService: SnackBarService,
  ) {
    this.BecomeSellerForm = this._fb.group({
      userName: '',
      roles: '',
    })
  }

  OnSubmit() {
    if (this.BecomeSellerForm.valid) {
      this._dialogRef.close();      
      this._router.navigateByUrl("/dfghj");
      this._snackBarService.openSnackBar("Welcome to our community");
    }

  }
 
  openSigneUpForm() {
    this._SigneUp.open(SigneUpComponent, { width: '500px', disableClose: false });
  }

}
