import { AppUser } from './../model/user.model';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject, map, of, throwError } from 'rxjs';
import { LOGIN } from '../graphql.operations'
import { Apollo } from 'apollo-angular';
import { Route, Router } from '@angular/router';
import{createApollo} from'../graphql.module'

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{

  // users: AppUser[] = [];
  // authenticatedUser!: AppUser;
  public accessVar = new Subject<boolean>();
  public accessVar$ = this.accessVar.asObservable();
  public userVar = new Subject<any>();
  public userVar$ = this.userVar.asObservable();
  loginResult: any;

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

 /* getMe() {
    this.loginUser(any).subscribe((result:any)=>{
      console.log(result);
  }
}*/

  logout() {
    this.updateStateSession(false);
    localStorage.removeItem('token');
    const currentRouter = this.router.url;
    if (currentRouter !== '/register' && currentRouter !== '/users') {
      this.router.navigate(['/login']);
    }
  }

  private sincroValues(result: any, state: boolean) {
    this.updateStateSession(state);
    this.updateUser(result);
  }

 /* start() {
    if (localStorage.getItem('token') !== null ) {
      this.loginUser(loginInput).subscribe((result: any) => {
        if (result) {
       //   if (this.router.url === '/login') {
            this.sincroValues(result, true);
            this.router.navigate(['/home']);
         // }
        }
        this.sincroValues(result, false);
      });
    } else { // No hay token
      this.sincroValues(null, false);
    }
  }*/

  auth() {
    throw new Error('Method not implemented.');
  }


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

}
