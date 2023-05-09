import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  forgotPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(
    public dialogRef: MatDialogRef<ForgotPasswordComponent>
  ) {}
  
  onSubmit(): void {
    const email = this.forgotPasswordForm.controls.email.value;
    // Send password reset email to user
    // ...
    this.dialogRef.close();
  }
  
  onCancelClick(): void {
    this.dialogRef.close();
  }
  

}
