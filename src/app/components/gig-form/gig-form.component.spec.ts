import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigFormComponent } from './gig-form.component';

describe('GigFormComponent', () => {
  let component: GigFormComponent;
  let fixture: ComponentFixture<GigFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GigFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
