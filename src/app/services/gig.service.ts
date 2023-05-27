import { Gig } from './../model/gig.model';
import { Injectable } from '@angular/core';
import { Observable, from, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GigService {
  private gigs!: Array<Gig>;
  
  constructor() {
  }

  public getGigs(): Observable<Array<Gig>> {
      return of(this.gigs);
  }

  public searchGigs(gigName: string): Observable<Gig[]> {
    let result = this.gigs.filter(g => g.description.includes(gigName));
    return of(this.gigs);
  }






}

