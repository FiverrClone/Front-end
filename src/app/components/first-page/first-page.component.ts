import { GigService } from './../../services/gig.service';
import { CategoryService } from './../../services/category.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Gig } from 'src/app/model/gig.model';
import { Category } from 'src/app/model/category.model';
import { SlideInterface } from 'src/app/model/slide.model';
import { interval, Observable, startWith, Subject, switchMap, timer,} from 'rxjs';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})


export class FirstPageComponent implements OnInit {
  @Input() slides: SlideInterface[] = [
    { url: '../../assets/image-1.jpeg', title: 'beach' },
    { url: '../../assets/image-2.jpeg', title: 'boat' },
    { url: '../../assets/image-3.jpeg', title: 'forest' },
    { url: '../../assets/image-4.jpeg', title: 'city' },
    { url: '../../assets/image-5.jpeg', title: 'italy' },];
  currentIndex: number = 0;
  timeoutId?: number;

  SearchForm: FormGroup;
  searchInput = new FormControl();
  searchFormGroup: any;
  gigs!: Array<Gig>;
  categories!: Array<Category>;
  errorMSG!: string;

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
    this.timeoutId = window.setTimeout(() => this.goToNext(), 4000);
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
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

  profils = [
    {
      img: "../../../assets/user.jpg.jpeg",
      lastName: "MOHAMMED DAAOUAN",
      info: "technical skills, design principles, and problem-solving abilities to build engaging web applications that effectively meet the needs of both users and businesses",
      company: "GOOGLE"
    },
    {
      img: "../../../assets/user.jpg.jpeg",
      lastName: "MOHAMMED DAAOUAN",
      info: "technical skills, design principles, and problem-solving abilities to build engaging web applications that effectively meet the needs of both users and businesses",
      company: "GOOGLE"
    },
    {
      img: "../../../assets/user.jpg.jpeg",
      lastName: "MOHAMMED DAAOUAN",
      info: "technical skills, design principles, and problem-solving abilities to build engaging web applications that effectively meet the needs of both users and businesses",
      company: "GOOGLE"
    },
  ]



}

