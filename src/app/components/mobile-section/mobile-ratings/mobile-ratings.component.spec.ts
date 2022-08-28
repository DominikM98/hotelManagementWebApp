import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileRatingsComponent } from './mobile-ratings.component';
import {HttpClientModule} from "@angular/common/http";

describe('MobileRatingsComponent', () => {
  let component: MobileRatingsComponent;
  let fixture: ComponentFixture<MobileRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
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
