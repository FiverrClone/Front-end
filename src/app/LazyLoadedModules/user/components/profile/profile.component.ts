import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { AppUser } from 'src/app/model/user.model';
import { GigFormComponent } from '../../../../components/gig-form/gig-form.component';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileComponent } from 'src/app/components/edit-profile/edit-profile.component';
import { GET_GIGS } from 'src/app/graphql.operations';
import { DialogRef } from '@angular/cdk/dialog';
import { UserService } from 'src/app/services/user.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { GigService } from 'src/app/services/gig.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() user!: AppUser;
  @Output() onRemoveUser = new EventEmitter<number>();
  @Output() onEditUser = new EventEmitter<number>();

  gigs: any[] = [];
  loading = true;
  error: any;
  customersNumber: any;
  order: any;
  ordersNumber: any;
  salesNumber: any;
  chiffre: any;
  newcustomers: any;

  constructor(
    private apollo: Apollo, 
    private router: Router, 
    private _dialog: MatDialog,
    private _gig:GigService,
    private _user:UserService,
    private _snackbar:SnackBarService,
    ) {
    this.user = {
      id: '1',
      firstName: '',
      lastName: '',
      birthday: '',
      gender: '',
      role: [],
      email: '',
      password: '',
      img: '',
    }
  }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query:GET_GIGS
    })
    .valueChanges.subscribe((result: any) => {
      console.log(result.data);
      this.gigs = result.data?.gigs;
      this.loading = result.loading;
      this.error = result.error;
    });  }

  deleteUserClicked(id:string) {
    this._user.deletProfile(id).subscribe({
      next: (res) => {
        this._snackbar.openSnackBar('profile deleted!', 'done');
        this._user.getEmployees();
      },
      error: console.log,
    });
  }

  editUserClicked(data:any) {
    this._dialog.open(EditProfileComponent, { data,  width: '600px', disableClose: false });
  }
  
  AddGigClicked() {
    const dialogRef = this._dialog.open(GigFormComponent, { width: '500px', disableClose: false });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          
        }
      },
    });
  }

  editGigClicked(data:any){
    const dialogRef = this._dialog.open(GigFormComponent, { data, width: '500px', disableClose: false });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this._gig.deleteGig(val.id).subscribe({
            next: (res) => {
              this._snackbar.openSnackBar('Gig deleted!', 'done');
              this._gig.getGigs();
            },
            error: console.log,
          });
        }
      },
    });
  }

  showOrders() {
    this.router.navigate(['admin/customers'], { relativeTo: undefined });
  }


}
