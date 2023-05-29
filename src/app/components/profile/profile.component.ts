import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { AppUser } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { GigComponent } from '../gig/gig.component';
import { GigService } from 'src/app/services/gig.service';
import { GigFormComponent } from '../gig-form/gig-form.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() user!: AppUser;
  @Output() onRemoveUser = new EventEmitter<number>();
  @Output() onEditUser = new EventEmitter<number>();

  gigs: any[]=[];
  loading = true;
  error: any;
  customersNumber: any;
  order: any;
  ordersNumber: any;
  salesNumber: any;
  chiffre: any;
  newcustomers: any;

  constructor(  private apollo: Apollo, private router:Router , private _gig:MatDialog) {
    this.user = {
      id: 0,
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

  ngOnInit() :void{
   // if (localStorage.getItem('user') !== null ) 
  }

  deleteUserClicked() {
    this.onRemoveUser.emit(this.user.id);
  }

  editUserClicked(){
    this.onEditUser.emit(this.user.id);
  }

  showCustomers() {
    this.router.navigate(['admin/customers'], {relativeTo: undefined });
  }

  AddGigClicked(){
    this._gig.open(GigFormComponent, { width: '500px', disableClose: false });
  }

}
