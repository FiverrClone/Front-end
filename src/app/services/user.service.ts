import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUser } from '../model/user.model';
import { REGISTRE } from '../graphql.operations'
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {


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

  deletProfile(id: string) {
    return this.http.delete(+ '/' + id);
  }
  editProfile(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:3000/employees/${id}`, data);
  }

  getEmployees() {
    return this.http.get<AppUser[]>;
  }

}
