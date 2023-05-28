import { AppUser } from './../model/user.model';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users: AppUser[] = [];
  authenticatedUser!: AppUser;

  constructor() {
    this.users.push({
      id: 1, firstName: "mohammed", lastName: 'daaouan', birthday: "30/07/2001", email: "med@gmail.com", password: "123456", roles: ["user"], img: "/image", gender:''});
    this.users.push({
      id: 1, firstName: "saaid", lastName: 'frikh', birthday: "01/01/2001", email: "frikh@gmail.com", password: "123456", roles: ["user", "admin"], img: "/image",gender: ''});
  }

  public login(email: string, password: string): Observable<AppUser> {
    let AppUser = this.users.find(u => u.email == email);
    if (!AppUser) return throwError(() => new Error("email or password incorrect"));
    return of(AppUser);
  }

  public authenticateUser(appUser: AppUser):Observable<boolean>{
    this.authenticatedUser=appUser;
    localStorage.setItem("authUser", JSON.stringify({email:appUser.email, roles:appUser.roles, jwt:"JWT_TOKEN"}));
    return of(true);
  }

  public hasRole(role:string): boolean{
    return this.authenticatedUser!.roles.includes(role);
  }

  public isAuthenticated(){
    return this.authenticatedUser!=undefined;
  }

}
