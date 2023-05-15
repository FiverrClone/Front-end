import { Injectable } from '@angular/core';
import { Category } from '../model/category.model';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories!: Array<Category>;

  constructor() {
    this.categories = [
      { id: 1, name: "frot end" },
      { id: 2, name: "back end" },
      { id: 3, name: "mobile" },
    ];
    for (let i = 0; i < 10; i++) {
      this.categories.push({ id: 1, name: "frot end" });
      this.categories.push({ id: 1, name: "back end" });
      this.categories.push({ id: 1, name: "not mobile" });
    }
  }

  public getCategories(): Observable<Array<Category>> {
      return of(this.categories);
  }
}
