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

  createGig(price: String, category: String, description: String, title: String): Observable<any>  {
    return this.apollo
      .mutate({
        mutation: ADDGIG,
        variables: {
          price,
          category,
          description,
          title,
        }
      });
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

