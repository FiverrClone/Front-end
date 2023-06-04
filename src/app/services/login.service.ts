import { AppUser } from './../model/user.model';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject, map, of, throwError } from 'rxjs';
import { LOGIN } from '../graphql.operations'
import { Apollo } from 'apollo-angular';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{

  
  public accessVar = new Subject<boolean>();
  public accessVar$ = this.accessVar.asObservable();
  public userVar = new Subject<any>();
  public userVar$ = this.userVar.asObservable();
  loginResult: any;
  logedUser:any;

  constructor(private apollo: Apollo, public router: Router) { }
  
  ngOnInit(): void {}

  public updateStateSession(newValue: boolean){
    this.accessVar.next(newValue);
  }

  public updateUser(newValue: any) {
    this.userVar.next(newValue);
  }

  loginUser(loginInput: any): Observable<any>  {
    return this.apollo
      .mutate({
        mutation: LOGIN,
        variables: {
          loginInput
        }
      });
  }

  public infoUser() {
    console.log(localStorage.getItem("authUser"));
    return localStorage.getItem("authUser");
  }

 
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('authUser');
    this.router.navigate(['firstpage']);
    console.log("logout service");
  }


  auth() {
    throw new Error('Method not implemented.');
  }



}
