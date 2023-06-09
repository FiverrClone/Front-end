import { Component, Input, OnInit } from '@angular/core';
import { HomeComponent } from '../../LazyLoadedModules/user/components/home/home.component';
import { Gig } from 'src/app/model/gig.model';

@Component({
  selector: 'app-gig',
  templateUrl: './gig.component.html',
  styleUrls: ['./gig.component.css']
})
export class GigComponent implements OnInit {
  @Input() 
  gigs!: any;

  constructor() { }
  ngOnInit(): void { }

}


