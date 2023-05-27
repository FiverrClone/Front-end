import { Component, Input ,Output, EventEmitter, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-card-freelancer',
  templateUrl: './card-freelancer.component.html',
  styleUrls: ['./card-freelancer.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CardFreelancerComponent implements OnInit{
  @Input()profils:any;
  rating: number = 3;
  starCount: number = 5;
  color: string = 'accent';
  ratingUpdated = new EventEmitter();

  public ratingArr = [];

  constructor(){}

  ngOnInit(): void {
    for (let index = 0; index < this.starCount; index++) {
      //this.ratingArr.push(index);
    }
  }

  onClick(rating:number) {
    this.ratingUpdated.emit(rating);
    return false;
  }

  showIcon(index:number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }


}

export enum StarRatingColor {
  primary = "primary",
  accent = "accent",
  warn = "warn"
}