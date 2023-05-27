import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUser } from '../model/user.model';
import {REGISTRE} from '../graphql.operations'
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // constructor(private _http:HttpClient) {}
  constructor(private apollo: Apollo) { }

  register(user: any) {
    return this.apollo
      .mutate({
        mutation: REGISTRE,
        variables: {
          user
        }
      });
  }

  // addUser(user: AppUser): Observable<any>
  // {
  //   return this._http.post('http://localhost:3000/user', user);


  //   /*for put usernom roles:
  //   return this._http.put('http://localhost:3000/user', data);
  //   */
  // } 
}
