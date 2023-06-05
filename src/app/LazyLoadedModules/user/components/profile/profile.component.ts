import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { AppUser } from 'src/app/model/user.model';
import { GigFormComponent } from '../../../../components/gig-form/gig-form.component';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileComponent } from 'src/app/components/edit-profile/edit-profile.component';
import { GET_GIGS, GET_GIGS_BY_USER, GET_ORDERS, GET_USER } from 'src/app/graphql.operations';
import { DialogRef } from '@angular/cdk/dialog';
import { UserService } from 'src/app/services/user.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { GigService } from 'src/app/services/gig.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // @Input() user!: AppUser;
  @Output() onRemoveUser = new EventEmitter<number>();
  @Output() onEditUser = new EventEmitter<number>();

  gigs: any[] = [];
  orders: any[] = [];
  loading = true;
  user:any;
  error: any;
  customersNumber: any;
  order: any;
  ordersNumber: any;
  salesNumber: any;
  chiffre: any;
  newcustomers: any;
  gigId: any;

  constructor(
    private _login:LoginService,
    private apollo: Apollo, 
    private router: Router, 
    private _dialog: MatDialog,
    private _gig:GigService,
    private _user:UserService,
    private _snackbar:SnackBarService,
    private Activeroute: ActivatedRoute,
    ) {
    this.user = {
      id: '1',
      firstname: '',
      lastname: '',
      birthday: '',
      gender: '',
      role: [],
      email: '',
      password: '',
      image: '',
    }
  }

  ngOnInit(): void {
    this.gigId=this.Activeroute.snapshot.paramMap.get('gigId')
    this.apollo.watchQuery({
      query:GET_GIGS_BY_USER
    })
    .valueChanges.subscribe((result: any) => {
      this.gigs = result.data?.gigByUser;
      this.loading = result.loading;
      this.error = result.error;
    });  

    this.apollo.watchQuery({
      query:GET_ORDERS
    })
    .valueChanges.subscribe((result: any) => {
      console.log(result.data);
      this.orders = result.data?.orders;
      this.loading = result.loading;
      this.error = result.error;
    });

    this.apollo.watchQuery({
      query:GET_USER
    })
    .valueChanges.subscribe((result: any) => {
      console.log(result.data);
      this.user= result.data?.logedUser;
      this.loading = result.loading;
      this.error = result.error;
    });
  }

  deleteUserClicked() {
    this._user.deleteUser().subscribe({
      next: (res) => {
        this._snackbar.openSnackBar('profile deleted!', 'done');
        this.router.navigateByUrl('/home')
        this._login.logout()
        // this._user.getEmployees();
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
          this._gig.updateGig(this.gigId,val).subscribe({
            next: (res) => {
              this._snackbar.openSnackBar('Gig updated!', 'done');
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
