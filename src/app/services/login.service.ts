import { AppUser } from './../model/user.model';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {LOGIN} from '../graphql.operations'
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // users: AppUser[] = [];
  // authenticatedUser!: AppUser;

  constructor(private apollo: Apollo) {}

  loginUser(loginInput: any) {
    return this.apollo
      .mutate({
        mutation: LOGIN,
        variables: {
          loginInput
        }
      });


  // public login(email: string, password: string): Observable<AppUser> {
  //   let AppUser = this.users.find(u => u.email == email);
  //   if (!AppUser) return throwError(() => new Error("email or password incorrect"));
  //   return of(AppUser);
  // }

  // public authenticateUser(appUser: AppUser):Observable<boolean>{
  //   this.authenticatedUser=appUser;
  //   localStorage.setItem("authUser", JSON.stringify({email:appUser.email, roles:appUser.roles, jwt:"JWT_TOKEN"}));
  //   return of(true);
  // }

  // public hasRole(role:string): boolean{
  //   return this.authenticatedUser!.roles.includes(role);
  // }

  // public isAuthenticated(){
  //   return this.authenticatedUser!=undefined;
  // }

    }}
