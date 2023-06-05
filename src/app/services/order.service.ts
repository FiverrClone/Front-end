import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GigService } from './gig.service';
import { Order } from '../model/order.model';
import { AppUser } from '../model/user.model';
import { Gig } from '../model/gig.model';
import { Apollo } from 'apollo-angular';
import { ORDER } from '../graphql.operations';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public order!: Order;

  constructor(
    private _gig: GigService,
    private httpClient: HttpClient,
    private apollo: Apollo,
    ) { }

  public setClient(client: AppUser) {
    this.order.client = client;
  }
  // public loadProductsFromCaddy() {
  //   this.order.gigs = [];
  //   for (let key in this._gig.getGigById(1)) {
  //     this.order.gigs.push();
  //   }
  // }
  public getTotal(): number {
    let total: number = 0;
    this.order.gigs.forEach(p => {
      total += p.price ;
    });
    return total;
  }

  createOrder(gigId: String): Observable<any>  {
    console.log(gigId)
    return this.apollo
      .mutate({
        mutation: ORDER,
        variables: {
          gigId
        }
      });
  }
  submitOrder() {
    return this.httpClient.post(this._gig.host + "/orders", this.order);
  }

  public getOrder(id: number): Observable<Order> {
    return this.httpClient.get<Order>(this._gig.host + "/orders/" + id);
  }
}
