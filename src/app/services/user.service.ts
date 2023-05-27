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

  constructor(private apollo: Apollo) { }

  registerUser(loginInput: any) {
    return this.apollo
      .mutate({
        mutation: REGISTRE,
        variables: {
          loginInput
        }
      });
  }

}
