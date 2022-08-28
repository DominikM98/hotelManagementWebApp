import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuContextComponent } from './menu-context.component';
import {HttpClientModule} from "@angular/common/http";

describe('MenuContextComponent', () => {
  let component: MenuContextComponent;
  let fixture: ComponentFixture<MenuContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ MenuContextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
