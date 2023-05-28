import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GigService } from '../../services/gig.service';

@Component({
  selector: 'app-detail-gig',
  templateUrl: './detail-gig.component.html',
  styleUrls: ['./detail-gig.component.css']
})
export class DetailGigComponent implements OnInit{

  gigId!: number;
  gigDetails: any;

  constructor( 
    private route: ActivatedRoute,
    private gigService: GigService
    ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.gigId = +params['id']; 
      this.loadGigDetails();
    });
  }

  loadGigDetails() {
    this.gigService.getGigById(this.gigId).subscribe(
      (response: any) => {
        this.gigDetails = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  


}
 