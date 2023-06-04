import { HttpClient } from '@angular/common/http';
import { Gig } from './../model/gig.model';
import { Injectable } from '@angular/core';
import { Observable, from, of, throwError } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { ADDGIG } from '../graphql.operations';
 
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

  updateGig(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:3000/employees/${id}`, data);
  }

  deleteGig(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/employees/${id}`);
  }

  public getGigs(): Observable<Array<Gig>> {
      return of(this.gigs);
  }

  private apiUrl = 'https://your-api-url.com/gigs';
  getGigById(id: number): Observable<Gig> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Gig>(url);
  }

  public getGigsByCategory(category: string): any[] {
    return [];
  }

  public searchGigs(gigName: string): Observable<Gig[]> {
    let result = this.gigs.filter(g => g.description.includes(gigName));
    return of(this.gigs);
  }




}

