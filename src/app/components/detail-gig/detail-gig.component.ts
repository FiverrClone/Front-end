import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GigService } from '../../services/gig.service';
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
    if(!window.document.getElementById('stripe-script')){
      const script=window.document.createElement('script');
      script.id='stripe-script';
      script.type='text/javascript';
      script.src="";
      window.document.body.appendChild(script);
    }
  }
  payment(){
    const paymentHandler=(<any>window).StripCheckout.configure({
      key:'pk_test_51ND77jDcyWArQDWrCCy0YNu8yufjnl8Lc8D5ZJUzFZthzsekGDbqt0mt2BWaXgQQaliGERCuZvNaPtifJnB13Yp200At0PmAnX',
      locale:'auto',
      token:function(stripToken:any){
        console.log(stripToken.card);
        alert('Stripe token generated');
      },
    });

    paymentHandler.open({
      name:'Mohammed',
      description:'2 Gig added',
    })
  }


}
 