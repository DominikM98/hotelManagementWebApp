import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCleaningComponent } from './room-cleaning.component';
import {HttpClientModule} from "@angular/common/http";

describe('RoomCleaningComponent', () => {
  let component: RoomCleaningComponent;
  let fixture: ComponentFixture<RoomCleaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ RoomCleaningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
