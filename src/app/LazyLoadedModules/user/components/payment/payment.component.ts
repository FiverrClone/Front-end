import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../../../../model/order.model';
import { OrderService } from '../../../../services/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentAmount!: number;
  currentOrder!: Order;
  constructor(private router: Router, private route: ActivatedRoute,
    public orderService: OrderService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id']
    this.orderService.getOrder(id).subscribe(data => {
      this.currentOrder = data;
    }, err => {
      console.log(err);
    })
  }

  onParOrder(data: any) {
    console.log(data);
  }
}
