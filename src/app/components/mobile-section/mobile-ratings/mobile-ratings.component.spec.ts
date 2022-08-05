import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileRatingsComponent } from './mobile-ratings.component';

describe('MobileRatingsComponent', () => {
  let component: MobileRatingsComponent;
  let fixture: ComponentFixture<MobileRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileRatingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
