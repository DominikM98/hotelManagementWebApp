import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileClientsComponent } from './mobile-clients.component';
import {HttpClientModule} from "@angular/common/http";

describe('MobileClientsComponent', () => {
  let component: MobileClientsComponent;
  let fixture: ComponentFixture<MobileClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ MobileClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
