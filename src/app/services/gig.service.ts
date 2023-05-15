import { Gig } from './../model/gig.model';
import { Injectable } from '@angular/core';
import { Observable, from, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GigService {

  private gigs!: Array<Gig>;
  constructor() {
    this.gigs = [
      { id: '1', name: "HP", price: 6000, description: "ggggggggggggggg", img: "https://cdn.pixabay.com/photo/2021/01/11/06/01/freelance-5907232_960_720.png", sellerName: "youness", sellerId: "kb1" },
      { id: '2', name: "DELL", price: 8000, description: "ggggggggggggggg", img: "https://cdn.pixabay.com/photo/2021/01/11/06/01/freelance-5907232_960_720.png", sellerName: "youness", sellerId: "kb1" },
      { id: '3', name: "ASUS", price: 5000, description: "ggggggggggggggg", img: "https://cdn.pixabay.com/photo/2021/01/11/06/01/freelance-5907232_960_720.png", sellerName: "youness", sellerId: "kb1" },
    ];
    for (let i = 0; i < 10; i++) {
      this.gigs.push({ id: '1', name: "HP", price: 6000, description: "ggggggggggggggg", img: "https://cdn.pixabay.com/photo/2021/01/11/06/01/freelance-5907232_960_720.png", sellerName: "youness", sellerId: "kb1" });
      this.gigs.push({ id: '2', name: "DELL", price: 8000, description: "ggggggggggggggg", img: "https://cdn.pixabay.com/photo/2021/01/11/06/01/freelance-5907232_960_720.png", sellerName: "youness", sellerId: "kb1" });
      this.gigs.push({ id: '3', name: "ASUS", price: 5000, description: "ggggggggggggggg", img: "https://cdn.pixabay.com/photo/2021/01/11/06/01/freelance-5907232_960_720.png", sellerName: "youness", sellerId: "kb1" });
    }
  }

  public getGigs(): Observable<Array<Gig>> {
    /////pour tester
    let rnd = Math.random();
    if (rnd < 0.2) return throwError(() => new Error("Internet connexion error"));
    else
      //////fin de test
      return of(this.gigs);
  }







}

