import { Component } from '@angular/core';
import { Gig } from 'src/app/model/gig.model';
import { GigComponent } from '../gig/gig.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  gigs: Gig[] = [
    {
      id:"1",
      img: 'https://source.unsplash.com/odxB5oIG_iA/400x250',
      category: 'freelancing',
      name: 'The Road to Freedom',
      description:'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      price: 299,
      sellerId:"1",
      sellerImg: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      sellerName: 'John Smith',
      gigDate: '10th August 2020',
    },
    {
      id:"1",
      img: 'https://source.unsplash.com/odxB5oIG_iA/400x250',
      category: 'freelancing',
      name: 'The Road to Freedom',
      description:'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      price: 299,
      sellerId:"1",
      sellerImg: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      sellerName: 'John Smith',
      gigDate: '10th August 2020',
    },
    {
      id:"1",
      img: 'https://source.unsplash.com/odxB5oIG_iA/400x250',
      category: 'freelancing',
      name: 'The Road to Freedom',
      description:'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      price: 299,
      sellerId:"1",
      sellerImg: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      sellerName: 'John Smith',
      gigDate: '10th August 2020',
    },
    {
      id:"1",
      img: 'https://source.unsplash.com/odxB5oIG_iA/400x250',
      category: 'freelancing',
      name: 'The Road to Freedom',
      description:'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      price: 299,
      sellerId:"1",
      sellerImg: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      sellerName: 'John Smith',
      gigDate: '10th August 2020',
    },
    {
      id:"1",
      img: 'https://source.unsplash.com/odxB5oIG_iA/400x250',
      category: 'freelancing',
      name: 'The Road to Freedom',
      description:'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      price: 299,
      sellerId:"1",
      sellerImg: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      sellerName: 'John Smith',
      gigDate: '10th August 2020',
    },
  ]

}
  