import { HttpClient } from '@angular/common/http';
import { Gig } from './../model/gig.model';
import { Injectable } from '@angular/core';
import { Observable, from, of, throwError } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { ADDGIG, DELETE_GIG, UPDATE_GIG } from '../graphql.operations';
 
@Injectable({
  providedIn: 'root'
})
export class GigService {
  private gigs!: Array<Gig>;
  host!: string;
  
  constructor(private apollo: Apollo, private http: HttpClient) {
  } 

  createGig(input:any): Observable<any>  {
    return this.apollo
      .mutate({
        mutation: ADDGIG,
        variables: {
         input
        }
      });
  }

  updateGig(updateGigId:any,input: any): Observable<any>  {
    return this.apollo
      .mutate({
        mutation: UPDATE_GIG,
        variables: {
          updateGigId,
          input
        }
      });
  }
  deleteGig(deleteGigId:any): Observable<any>  {
    return this.apollo
      .mutate({
        mutation: DELETE_GIG,
        variables: {
          deleteGigId
        }
      });
  }


  public getGigs(): Observable<Array<Gig>> {
      return of(this.gigs);
  }

  

  public getGigsByCategory(category: string): any[] {
    return [];
  }

  public searchGigs(gigName: string): Observable<Gig[]> {
    let result = this.gigs.filter(g => g.description.includes(gigName));
    return of(this.gigs);
  }




}

