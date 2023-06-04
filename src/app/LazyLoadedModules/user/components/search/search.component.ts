import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Gig } from 'src/app/model/gig.model';
import { GigService } from 'src/app/services/gig.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  gigs!:Array<Gig>;

  constructor(private _gigService: GigService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      gigName: this.fb.control(null),
    });
  }

  searchResult:any;
  searchForm = new FormGroup({
    'gigName':new FormControl()
  });

  submitForm() {
    let gigName = this.searchForm.value.gigName;
    this._gigService.searchGigs(gigName).subscribe({
      next: (data: Gig[]) => {
        this.gigs = data;
      }
    })
  }

}