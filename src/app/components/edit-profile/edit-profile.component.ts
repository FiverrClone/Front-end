import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  EditProfileForm: FormGroup;

  user:any;
  constructor(
    private _fb: FormBuilder,
    private _user: UserService,
    private route:Router,
    private _dialogRef: MatDialogRef<EditProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.EditProfileForm = this._fb.group({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      birthday: '',
      gender: '',
      role: '',
    });
  }

  ngOnInit(): void {
    this.EditProfileForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.EditProfileForm.valid) {
      if (this.data) {
        this._user
          .updateUser(this.EditProfileForm.value)
          .subscribe({
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
