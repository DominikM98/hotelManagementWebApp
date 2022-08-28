import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatePageComponent } from './template-page.component';
import {HttpClientModule} from "@angular/common/http";

describe('TemplatePageComponent', () => {
  let component: TemplatePageComponent;
  let fixture: ComponentFixture<TemplatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ TemplatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
