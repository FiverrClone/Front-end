import { Component, HostListener, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SnackBarService } from '../../services/snack-bar.service';
import { Observable } from 'rxjs';
import { MultiformsComponent } from '../multiforms/multiforms.component';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private _SigneUp: MatDialog,
    private _Login: MatDialog,
    private login: LoginService,
    private _snackBarService: SnackBarService,
    private _router: Router
  ) { }

  

  openmultiforms() {
    this._SigneUp.open(MultiformsComponent, { width: '500px', disableClose: false });
  }

  openLoginForm() {
    this._Login.open(LoginComponent, { width: '500px', disableClose: false });
  }

  logout(){
    this.login.updateStateSession(false);
    localStorage.removeItem('token');
    localStorage.setItem('token', "7410");
    const currentRouter = this._router.url;
    if (currentRouter !== '/register' && currentRouter !== '/users') {
      this._router.navigate(['/firstpage']);
    }
  }

  navbg: any;
  navbg2: any;
  @HostListener('document:scroll') scrollover() {
    console.log(document.body.scrollTop, 'scrolllength#');

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navbg = {
        'background-color': '#369ebd',
        'position': 'fixed',
      }
      this.navbg2 = {
        'transform': 'translateY(-100%)',
        'transition': 'transform 0.2s ease-out',
      }
    } else {
      this.navbg = {}
      this.navbg2 = {}
    } 
  }


  /*@Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }*/


}
