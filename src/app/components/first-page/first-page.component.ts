import { GigService } from './../../services/gig.service';
import { CategoryService } from './../../services/category.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Gig } from 'src/app/model/gig.model';
import { Category } from 'src/app/model/category.model';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})


export class FirstPageComponent implements OnInit {
  SearchForm: FormGroup;
  searchInput = new FormControl();
  searchFormGroup: any;
  gigs!: Array<Gig>;
  categories!: Array<Category>;
  errorMSG!: string;

  slides=[
    {url: './asset/image-1.jpeg', title:'beach'},
    {url: './asset/image-2.jpeg', title:'boat'},
    {url: './asset/image-3.jpeg', title:'forest'},
    {url: './asset/image-4.jpeg', title:'city'},
    {url: './asset/image-5.jpeg', title:'italy'},
  ];
  currentIndex: number = 0;
  timeoutId?: number;

  constructor(
    private _gigService: GigService,
    private _categoryService: CategoryService,
    private _fb: FormBuilder,
  ) {

    this.SearchForm = this._fb.group({
      keyword: this._fb.control(""),

    })
  }

  ngOnInit(): void {
    this.getGigs();

    this.searchFormGroup = this._fb.group({
      keyword: this._fb.control(null),
    });

    this.resetTimer();
  }
  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
  }
  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }
  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }
  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }
  getCurrentSlideUrl() {
    return `url('${this.slides[this.currentIndex].url}')`;
  }

  getGigs() {
    this._gigService.getGigs().subscribe({
      next: (data: Gig[]) => {
        this.gigs = data;
      },
      error: (err) => {
        this.errorMSG = err;
      }
    });
  }

  getCategories() {
    this._categoryService.getCategories().subscribe({
      next: (data: Category[]) => {
        this.categories = data;
      },
      error: (err) => {
        this.errorMSG = err;
      }
    });
  }



}

