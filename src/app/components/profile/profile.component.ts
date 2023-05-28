import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppUser } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() user!: AppUser;
  @Output() onRemoveUser = new EventEmitter<number>();
  @Output() onEditUser = new EventEmitter<number>();

  constructor() {
    this.user = {
      id: 0,
      firstName: '',
      lastName: '',
      birthday: '',
      gender: '',
      roles: [],
      email: '',
      password: '',
      img: '',
    }
  }

  ngOnInit(): void {
    console.log(this.user);
  }

  deleteUserClicked() {
    this.onRemoveUser.emit(this.user.id);
  }

  editUserClicked(){
    this.onEditUser.emit(this.user.id);
  }

}
