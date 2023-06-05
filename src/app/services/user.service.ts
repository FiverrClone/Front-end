import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUser } from '../model/user.model';
import { DELETE_USER, REGISTRE, UPDATE_USER } from '../graphql.operations'
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user!: Observable<any>;


  // constructor(private _http:HttpClient) {}
  constructor(private apollo: Apollo, private http: HttpClient) { }

  registerUser(registerInput: any) {
    return this.apollo
      .mutate({
        mutation: REGISTRE,
        variables: {
          registerInput
        }
      });
  }


  updateUser(input: any): Observable<any>  {
    return this.apollo
      .mutate({
        mutation: UPDATE_USER,
        variables: {
          input
        }
      });
  }
  deleteUser(): Observable<any>  {
    return this.apollo
      .mutate({
        mutation: DELETE_USER,
        variables: {
        }
      });
  }




}
