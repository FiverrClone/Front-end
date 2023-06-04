import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GigService } from '../../../../services/gig.service';
import { GIG } from 'src/app/graphql.operations';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-detail-gig',
  templateUrl: './detail-gig.component.html',
  styleUrls: ['./detail-gig.component.css']
})
export class DetailGigComponent implements OnInit{

  gigId: any;
  gigDetails: any;
  gig: any;
  error: any;
  loading!: false;
  paymentHandler:any=null;
  constructor( 
    private Activeroute: ActivatedRoute,
    private gigService: GigService,
    private router:Router,
    private apollo:Apollo,
    ){}

  ngOnInit(): void {

      this.gigId=this.Activeroute.snapshot.paramMap.get('gigId');
      console.log(this.gigId);
      this.loadGigDetails(this.gigId);
      this.invokeStripe();
  }
  

  loadGigDetails(gigId:any) {
    console.log(gigId);
    this.apollo.watchQuery({
      query:GIG,
        variables: {
          gigId
        }
    })
    .valueChanges.subscribe((result: any) => {
      
      this.gig = result?.data?.gig;
      console.log(this.gig?.title);
      this.loading = result.loading;
      this.error = result.error;
    });
  }


  invokeStripe(){
    if(!document.getElementById('stripe-script')){
      const script=document.createElement('script');
      script.id='stripe-script';
      script.type='text/javascript';
      script.src='https://checkout.stripe.com/checkout.js';
      window.document.body.appendChild(script);
    }
  }
  payment(amount:any){
    const paymentHandler=(<any>window).StripeCheckout.configure({
      key:'pk_test_51ND77jDcyWArQDWrCCy0YNu8yufjnl8Lc8D5ZJUzFZthzsekGDbqt0mt2BWaXgQQaliGERCuZvNaPtifJnB13Yp200At0PmAnX',
      locale:'auto',
      token:function(stripeToken:any){
        console.log(stripeToken.card);
        alert('Stripe token generated');
      },
    });

    paymentHandler.open({
      name:'Mohammed',
      description:'2 Gig added',
      amount:amount*100,
    });
  }


}
 