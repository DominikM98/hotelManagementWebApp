import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMenuItemComponent } from './add-menu-item.component';
import {HttpClientModule} from "@angular/common/http";

describe('AddMenuItemComponent', () => {
  let component: AddMenuItemComponent;
  let fixture: ComponentFixture<AddMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ AddMenuItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
