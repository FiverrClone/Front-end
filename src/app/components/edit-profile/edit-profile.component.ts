import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit{
  EditProfileForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _user: UserService,
    private _dialogRef: MatDialogRef<EditProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.EditProfileForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      password:'',
      dob: '',
      gender: '',
      experience: '',
      package:'',
      role:'',
    });
  }

  ngOnInit(): void {
    this.EditProfileForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.EditProfileForm.valid) {
      if (this.data) {
        this._user.editProfile(this.data.id, this.EditProfileForm.value).subscribe({
            next: (val: any) => {
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._user.registerUser(this.EditProfileForm.value).subscribe({
          next: (val: any) => {
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }

 
}
