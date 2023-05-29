import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { GET_GIGS } from 'src/app/graphql.operations';
import { Gig } from 'src/app/model/gig.model';
import { GigComponent } from '../gig/gig.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  gigs: any[]=[];
  loading = true;
  error: any;
  router: any;

  constructor(private apollo: Apollo, router: Router) {}

  ngOnInit() :void{
    this.apollo.watchQuery({
        query:GET_GIGS
      })
      .valueChanges.subscribe((result: any) => {
        console.log(result.data);
        this.gigs = result.data?.gigs;
        this.loading = result.loading;
        this.error = result.error;
      });
  }

  showGig(gig: any){
    //this.router.navigate(['/gig-details'],{queryParams:{id:this.gigs.}});

  }

  // gigs: Gig[] = [
  //   {
  //     id:"1",
  //     img: 'https://source.unsplash.com/odxB5oIG_iA/400x250',
  //     category: 'freelancing',
  //     name: 'The Road to Freedom',
  //     description:'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
  //     price: 299,
  //     sellerId:"1",
  //     sellerImg: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
  //     sellerName: 'John Smith',
  //     gigDate: '10th August 2020',
  //   },
  //   {
  //     id:"1",
  //     img: 'https://source.unsplash.com/odxB5oIG_iA/400x250',
  //     category: 'freelancing',
  //     name: 'The Road to Freedom',
  //     description:'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
  //     price: 299,
  //     sellerId:"1",
  //     sellerImg: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
  //     sellerName: 'John Smith',
  //     gigDate: '10th August 2020',
  //   },
  //   {
  //     id:"1",
  //     img: 'https://source.unsplash.com/odxB5oIG_iA/400x250',
  //     category: 'freelancing',
  //     name: 'The Road to Freedom',
  //     description:'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
  //     price: 299,
  //     sellerId:"1",
  //     sellerImg: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
  //     sellerName: 'John Smith',
  //     gigDate: '10th August 2020',
  //   },
  //   {
  //     id:"1",
  //     img: 'https://source.unsplash.com/odxB5oIG_iA/400x250',
  //     category: 'freelancing',
  //     name: 'The Road to Freedom',
  //     description:'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
  //     price: 299,
  //     sellerId:"1",
  //     sellerImg: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
  //     sellerName: 'John Smith',
  //     gigDate: '10th August 2020',
  //   },
  //   {
  //     id:"1",
  //     img: 'https://source.unsplash.com/odxB5oIG_iA/400x250',
  //     category: 'freelancing',
  //     name: 'The Road to Freedom',
  //     description:'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
  //     price: 299,
  //     sellerId:"1",
  //     sellerImg: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
  //     sellerName: 'John Smith',
  //     gigDate: '10th August 2020',
  //   },
  // ]
}
